const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const config = require('../config/config');

const key = config.MYAPIKEY;

router.get('/', function (req, res, next) {

    const options = { method: 'GET',
        url: 'https://service.zipapi.us/zipcode/02215',
        qs: { 'X-API-KEY': key },
        headers:
            { 'Postman-Token': 'eea5e93e-d91c-4f38-b9c2-1e7a813559fa',
                'Cache-Control': 'no-cache',
                Authorization: 'Basic YXJpc0B2YW5kZXJwb29scy5jb206YXB2cGExMTE=' } };

    rp(options)
        .then(function (body) {
            console.log(body);
            res.render('ps4', JSON.parse(body));
        })
        .catch(function (err) {
            // API call failed...
        });
);

router.post('/zip', function (req,res,next) {

});

module.exports = router;