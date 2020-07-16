// Import express
const express = require('express')
// Import articles-controller
const articlesRoutes = require('./../controllers/articles-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all articles
// In server.js, articles route is specified as '/articles'
// this means that '/all' translates to '/articles/all'
router.get('/all', articlesRoutes.articlesAll)

// Add route for POST request to create new article
// In server.js, articles route is specified as '/articles'
// this means that '/create' translates to '/articles/create'
router.post('/create', articlesRoutes.articlesCreate)

// Add route for PUT request to delete specific article
// In server.js, articles route is specified as '/articles'
// this means that '/delete' translates to '/articles/delete'
router.put('/delete', articlesRoutes.articlesDelete)

// Add route for PUT request to reset articleshelf list
// In server.js, articles route is specified as '/articles'
// this means that '/reset' translates to '/articles/reset'
router.put('/reset', articlesRoutes.articlesReset)

// Export router
module.exports = router