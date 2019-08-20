const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Record = require('../../models/Record');

// @route     POST api/translations
// @desc      Create record in database with german word, translation and a sentence with this word
// @access    Public
router.post(
  '/',
  [
    check('word', 'Please add a german noun').isString(),
    check('article', 'Please enter an article')
      .isString()
      .isLength(3),
    check('wordTranslated', 'Please add a proper translation').isString(),
    check('sentences', 'Please add two translations')
      .not()
      .isEmpty(),
    check('sentences.*.sentence', 'Sentence must be a string')
      .isLength({ min: 2 })
      .matches(/^[a-zA-Z ]*$/, 'i')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    console.log(req.body);

    const { word, article, wordTranslated, sentences } = req.body;

    try {
      // check word OR translation if was already added
      let translatedWord = await Record.findOne({
        $or: [{ word }, { wordTranslated }]
      }).populate(['sentence']);
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
      if (sentences.length > 0) translationFields.sentences = sentences;

      translatedWord = new Record(translationFields);
      await translatedWord.save();
      res.send(translatedWord);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route     GET api/translations
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

module.exports = router;
