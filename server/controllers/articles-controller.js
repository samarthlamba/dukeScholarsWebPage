// Import database
const knex = require('./../db')

// Retrieve all articles
exports.articlesAll = async (req, res) => {
  // Get all articles from database
  knex
    .select('*') // select all records
    .from('articles') // from 'articles' table
    .then(userData => {
      // Send articles extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving articles: ${err}` })
    })
}

// Create new article
exports.articlesCreate = async (req, res) => {
  // Add new article to database
  knex('articles')
    .insert({ // insert new record, an article
      'title': req.body.title,
      'author': req.body.author,
      'published_date': req.body.published_date,
      'publication_location': req.body.publication_location
      'citations': req.body.citations
      'readership': req.body.readership
      'tweets': req.body.tweets
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Article \'${req.body.title}\' by ${req.body.author} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} article: ${err}` })
    })
}


// Remove specific article
exports.articlesDelete = async (req, res) => {
  // Find specific article in the database and remove it
  knex('articles')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Article ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} article: ${err}` })
    })
}
// Remove all articles on the list
exports.articlesReset = async (req, res) => {
  // Remove all articles from database
  knex
    .select('*') // select all records
    .from('articles') // from 'articles' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Article list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting article list: ${err}.` })
    })
}