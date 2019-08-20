const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  word: {
    type: String,
    required: true
  },
  article: {
    type: String,
    required: true
  },
  wordTranslated: {
    type: String,
    required: true
  },
  sentences: [
    {
      sentence: {
        type: String,
        required: true
      }
    },
    {
      sentence: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const Record = mongoose.model('translation', RecordSchema);

module.exports = Record;
