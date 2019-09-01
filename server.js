const express = require('express');
const connect = require('./config/db');
const path = require('path');

const app = express();
connect();

// init middlewares
app.use(express.json({ extended: false }));

app.use('/api/translations', require('./routes/api/translations'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.NODE_ENV === 'development' ? process.env.PORT : 5000;

app.listen(PORT, () => {
  console.log('App is running on port ' + PORT);
});
