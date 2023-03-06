var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: {

        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;