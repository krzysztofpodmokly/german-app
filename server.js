const express = require('express');
const connect = require('./config/db');

const app = express();
connect();

// init middlewares
app.use(express.json({ extended: false }));

app.use('/api/translations', require('./routes/api/translations'));

const PORT = process.env.NODE_ENV === 'development' ? process.env.PORT : 5000;

app.listen(PORT, () => {
  console.log('App is running on port ' + PORT);
});
