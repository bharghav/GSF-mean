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

exports.add_client = (req, res) => {
    const clientData = req.body;
    var clientObj = new Clients(clientData);
    clientObj.save((err) => {
        if (err) {
            console.log(err);
            return res.status(400).send({
                statusCode: 400,
                message: err.message
            });
        }
        return res.status(200).send({
            statusCode: 200,
            message: 'Client added successfully'
        })
    })
}

exports.update_client = (req, res) => {
    const clientData = req.body;
    const updateData = {
        "clientId": clientData.clientId,
        "clientName": clientData.clientName
    };

    Clients.findOneAndUpdate({
        _id: clientData.id
    }, {
        $set: updateData
    }, function (err, product) {
        if (err) {
            return res.status(400).send({
                statusCode: 400,
                message: err.message
            });
        }
        return res.status(200).send({
            statusCode: 200,
            message: 'Client updated successfully'
        })
    });

}

exports.delete_client = (req, res) => {
    const clientData = req.body;
    Clients.findOneAndDelete({
            _id: clientData._id
        },
        function (err, product) {
            if (err) {
                return res.status(400).send({
                    statusCode: 400,
                    message: err.message
                });
            }
            return res.status(200).send({
                statusCode: 200,
                message: 'Client deleted successfully'
            })
        });
}