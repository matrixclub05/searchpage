var express = require('express');
var router = express.Router();
var data = require('../data/datafile.json');
var cors = require('cors');
/* GET users listing. */
router.get('/', function (req, res, next) {
    var query = req.query.query.toLowerCase();
    var isAutocomplete = req.query.autocomplete;
    var pattern = new RegExp(query);
    var results = [];
    if (isAutocomplete) {
        data.map(function (record) {
            var fullName = record.first_name + ' ' + record.last_name;
            if (pattern.test(fullName.toLowerCase())) {
                results.push(fullName)

            }
        });
    } else {
        results = data.filter(function (record) {
            var fullName = record.first_name + ' ' + record.last_name;
            return pattern.test(fullName.toLowerCase());
        });
    }

    res.send({data: results, total: results.length});
});

module.exports = router;
