const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');
module.exports = {
    index(_, res){
        Pet.find()
            .then(pets => {
                console.log('index method in controller...');
                res.json({pets})
            })
            .catch(console.log);
    },
    create(req, res){
        Pet.create(req.body)
            .then(pet => res.json({pet}))
            .catch(e => {
                const errors = [];
                for(key in e.errors){
                    errors.push(e.errors[key].message);
                }
                res.json({errors })
            });  
    },
    delete(req, res){
        Pet.findByIdAndDelete(req.params.id)
            .then(() => res.json({status: 'success'}))
            .catch(e => res.json({ errors: e}))
    },
    update(req, res){
        Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
                context: 'query'
            }
        )
            .then(pet => res.json({pet}))
            .catch(e => {
                const errors = [];
                for(key in e.errors){
                    errors.push(e.errors[key].message);
                }
                res.json({errors })
            }); 
    },
    getPet(req, res){
        Pet.findById(req.params.id)
            .then(pet => {
                console.log(pet);
                res.json({pet})
            })
            .catch(e => res.json({errors: e}))
    }

}