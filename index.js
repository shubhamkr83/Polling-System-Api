const express = require('express')
const app = express();
const connectWithDb = require('./config/mongoose');
const bodyParser = require('body-parser');

const PORT = 3000;


// connect with database
connectWithDb();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));


app.listen(PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running at ${PORT}`);
});