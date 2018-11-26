const Clients = require('../models/clients');

exports.clients_get_all = (req, res, next) => {

    Clients.find()
        .select('clientId clientName _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                clients: docs.map(doc => {
                    return {
                        id: doc.id,
                        clientId: doc.clientId,
                        clientName: doc.clientName,
                        type: 'GET'
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}