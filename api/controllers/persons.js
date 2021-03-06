const Persons = require('../models/persons');

exports.persons_get_all = (req, res, next) => {

    Persons.find()
            .select('name city amount _id')
            .exec()
            .then(docs => {
               
                const response = {
                    count: docs.length,
                    persons: docs.map(doc => {
                        return {
                            id: doc.id,
                            name: doc.name,
                            city: doc.city,
                            amount:doc.amount,
                            type: 'GET'
                        }
                    })
                };
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ error : err });
            });
}

exports.add_person = (req, res) => {
    const personData = req.body;

    var personObj = new Persons(personData);
    personObj.save((err) => {
        if(err){
            console.log(err);
            return res.status(400).send({statusCode: 400, message: err.message});
        }
        return res.status(200).send({statusCode: 200, message:'User added successfully'})
    })


}


