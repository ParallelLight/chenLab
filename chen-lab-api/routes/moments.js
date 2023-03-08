var express = require('express');
var router = express.Router();
const Moments = require('../model/Moments');

/* Moments 增加一条记录 */
// Moments.create({
//     date: "2023-03-09",
//     title: "Welcome to ChenLab",
//     image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//     isShow: true,
// }, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Moments 增加一条记录");
// });

/* GET Moments page. */
router.get('/', async (req, res, next) => {
    let results = await Moments.find({ isShow: true }).sort({ "date": -1 }).exec();
    const data = {
        code: 0,
        data: { moments: results },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;