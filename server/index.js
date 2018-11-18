const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./books.routes');
const PORT = 3300 || process.env.PORT;

// DB SETUP
mongoose.connect(process.env.PORT || "mongodb://localhost/up-north-text", { useNewUrlParser: true });

// MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static('build'));

// BOOK ROUTES
app.use('/api/books', bookRoutes);

// ERROR HANDLER
app.use(function(error, req, res, next) {
  const code = error.code || 500;
  const message = error.message || "Something went wrong";
  res.status(code).json({
    code: code,
    message: message
  });
});

//LISTENER
app.listen(PORT, function() {
  console.log('Up North Test Server running on ' + PORT);
});

