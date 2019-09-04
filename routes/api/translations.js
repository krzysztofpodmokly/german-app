const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Record = require('../../models/Record');
const ObjectId = require('mongodb').ObjectId;

// @route     POST /api/translations
// @desc      Create record in database with german word, translation and a sentence with this word
// @access    Public
router.post(
  '/',
  [
    check('word', 'Please add a german noun').isString(),
    check('article', 'Please enter an article')
      .isString()
      .isLength({ min: 3 }),
    check('wordTranslated', 'Please add a proper translation').isString(),
    check('sentenceOne', 'Please add a sentence').isString(),
    check('sentenceTwo', 'Please add a sentence').isString()

    // if sentences is an array
    // check('sentences', 'Please add two translations')
    //   .custom(sentences => sentences && sentences.length === 2)
    //   .withMessage('Provide two sentences'),
    // check('sentences.*.sentence', 'Sentence must be a string')
    //   .isLength({ min: 2 })
    //   .matches(/^[a-zA-Z ]*$/, 'i')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const {
      word,
      article,
      wordTranslated,
      sentenceOne,
      sentenceTwo
    } = req.body;

    try {
      // check word OR translation if was already added
      let translatedWord = await Record.findOne({
        $or: [{ word }, { wordTranslated }]
      });
      if (translatedWord) {
        return res
          .status(400)
          .send({ errors: [{ msg: 'This word already exists' }] });
      }

      // if the word was not registered in the database, create new and save
      const translationFields = {};
      if (word) translationFields.word = word;
      if (article) translationFields.article = article;
      if (wordTranslated) translationFields.wordTranslated = wordTranslated;
      if (sentenceOne) translationFields.sentenceOne = sentenceOne;
      if (sentenceTwo) translationFields.sentenceTwo = sentenceTwo;
      translatedWord = new Record(translationFields);
      await translatedWord.save();
      res.send(translatedWord);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route     GET /api/translations/random
// @desc      Retrieve random translation from database
// @access    Public
router.get('/random', async (req, res) => {
  try {
    const randomTranslation = await Record.aggregate([
      { $sample: { size: 1 } }
    ]);
    res.send(randomTranslation);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET /api/translations
// @desc      Retrieve random translation from database
// @access    Public
router.get('/', async (req, res) => {
  try {
    const userQuery = req.query.search;
    const regExp = new RegExp(
      '\\W' +
        userQuery +
        '|^' +
        userQuery +
        '|' +
        userQuery +
        '$|' +
        userQuery +
        'W',
      'i'
    );
    const words = await Record.find({
      $or: [
        { word: { $regex: regExp } },
        { article: { $regex: regExp } },
        { wordTranslated: { $regex: regExp } }
      ]
      // sentences: { $regex: regExp, $nin: ['sentence'] }
    });
    res.send(words);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route     GET /api/translations/:id
// @desc      Retrieve set of data for particular id
// @access    Public
router.get('/:id', async (req, res) => {
  try {
    const wordById = await Record.findOne({ _id: req.params.id });
    res.send(wordById);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route     GET /api/translations/delete/:id
// @desc      Remove an item from database
// @access    Public
router.delete('/delete/:id', async (req, res) => {
  try {
    const wordToDelete = await Record.findById(req.params.id);

    if (!wordToDelete) {
      return res.status(404).send({ msg: 'Dataset not found' });
    }

    await wordToDelete.remove();
    res.send({ msg: 'Dataset was removed!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
