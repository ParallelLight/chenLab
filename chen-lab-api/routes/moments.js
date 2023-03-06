var express = require('express');
var router = express.Router();

/* GET Moments page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: {
            moments: [
                {
                    date: "2018-04-15",
                    title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important event",
                    image: ""
                },
                {
                    date: "2018-04-15",
                    title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important event",
                    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                },
                {
                    date: "2018-04-15",
                    title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important event",
                    image: ""
                },
                {
                    date: "2018-04-15",
                    title: "An important eventAn important eventAn important eventAn important event",
                    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                },
                {
                    date: "2018-04-15",
                    title: "An important event",
                    image: ""
                },
                {
                    date: "2018-04-15",
                    title: "An important event",
                    image: ""
                },
                {
                    date: "2018-04-15",
                    title: "An important event",
                    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                },
                {
                    date: "2018-04-15",
                    title: "An important event",
                    image: ""
                }
            ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
