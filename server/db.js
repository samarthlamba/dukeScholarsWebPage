const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Create a table in the database called "articles"
knex.schema
  // Make sure no "articles" table exists
  // before trying to create new
  .hasTable('articles')
    .then((exists) => {
      if (!exists) {
        // If no "articles" table exists
        // create new, with "id", "title", "author",
        // "published_date", "publication_location",
        // "citations", "readership", and "tweets" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (article)
        return knex.schema.createTable('article', (table)  => {
          table.increments('id').primary()
          table.string('title')
          table.integer('author')
          table.string('published_date')
          table.integer('publication_location')
          table.integer('citations')
          table.integer('readership')
          table.integer('tweets')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Articles\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })
// Just for debugging purposes:
// Log all data in "books" table
knex.select('*').from('articles')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))
// Export the database
module.exports = knex