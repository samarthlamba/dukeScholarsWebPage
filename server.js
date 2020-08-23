const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const MONGODB_URI = 'mongodb+srv://daml123:scholars@cluster0.pecv7.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    dbName: "articles",
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Schema
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  authors: String,
  published_date: String,
  doi: String,
  abstract: String,
  publication_location: String,
  link: String,
  citations: String,
  readership: String,
  tweets: String,
  news_mentions: String
}, {collection: 'machine_learning'});

// Model
const article = mongoose.model('article', articleSchema);


app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  article.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));


