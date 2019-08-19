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
    check('word', 'Please add a german word').isString(),
    check('translation', 'Please add a proper translation').isString(),
    check('sentence', 'Please add example sentence').isString()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { word, translation, sentence } = req.body;

    try {
      // check word OR translation if was already added
      let translatedWord = await Record.findOne({
        $or: [{ word }, { translation }]
      });
      if (translatedWord) {
        return res
          .status(400)
          .send({ errors: [{ msg: 'This word already exists' }] });
      }

      // if the word was not registered in the database, create new and save
      const translationFields = {};
      if (word) translationFields.word = word;
      if (translation) translationFields.translation = translation;
      if (sentence) translationFields.sentence = sentence;

      translatedWord = new Record(translationFields);
      await translatedWord.save();
      res.send(translation);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
