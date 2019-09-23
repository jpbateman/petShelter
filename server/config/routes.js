const petsController = require('../controllers/pets');
module.exports = function(app){
    app.get('/api/pets/:id', petsController.getPet);
    app.put('/api/pets/:id', petsController.update);
    app.delete('/api/pets/:id', petsController.delete);
    app.post('/api/pets', petsController.create);
    app.get('/api/pets', petsController.index);
}