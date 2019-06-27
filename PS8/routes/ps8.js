const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const config = require('../config/config');
const db = require('../mongo/mongo');

const key = config.MYAPIKEY;

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.post('/zip', (req, res) => {
    zipcode = req.body.zipcode;
    let mongo = db.getDB();

    mongo.collection('zipcode').findOne({'zipcode': zipcode}, function(err, data) {
        if ( data ) {
            console.log(data);
            res.send(data);
        } else {
            const options = {
                method: 'GET',
                url: 'https://service.zipapi.us/zipcode/' + req.body.zipcode,
                qs: {'X-API-KEY': key},
                headers:
                    {
                        'Postman-Token': 'eea5e93e-d91c-4f38-b9c2-1e7a813559fa',
                        'Cache-Control': 'no-cache',
                        Authorization: 'Basic YXJpc0B2YW5kZXJwb29scy5jb206YXB2cGExMTE='
                    }
            };

            rp(options)
                .then(function (body) {
                    console.log(body);
                    mongo.collection('zipcode').insertOne(req.body, function (err, r) {
                        res.send('success');
                    });
                })
                .catch(function (err) {
                    // API call failed...
                });
        }
    })
});

module.exports = router;