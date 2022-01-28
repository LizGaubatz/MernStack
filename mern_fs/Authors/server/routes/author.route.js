const authorController = require('../controllers/author.controller');

module.exports = (app) => {
    // app.get('/api', authorController.index);
    app.post('/api/author/new', authorController.createAuthor)
    app.get('/api/author', authorController.getallAuthors)
    app.get('/api/author/:id', authorController.getAuthor)
    app.put('/api/author/edit/:id', authorController.updateAuthor)
    app.delete('/api/author/delete/:id', authorController.deleteAuthor)
}