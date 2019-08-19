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

    const translationFields = {};
    if (word) translationFields.word = word;
    if (translation) translationFields.translation = translation;
    if (sentence) translationFields.sentence = sentence;

    try {
      const translation = new Record(translationFields);
      await translation.save();
      res.send(translation);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
