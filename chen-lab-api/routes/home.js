var express = require('express');
var router = express.Router();
// const Tools = require('../model/Tools');

/* Tools 增加一条记录 */
// Tools.create({
//     title: "Science",
//     image: "https://www.science.org/pb-assets/images/styleguide/logo-1672180580750.svg",
//     link: "https://www.science.org/journals",
//     isShow: true
// }, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Tools 成功增加一条记录");
// });

/* Tools 增加多条记录 */
// Tools.insertMany([
//     {
//         title: "Cell",
//         image: "https://www.cell.com/pb-assets/ux3/logos/cell/CellMetabolism_white-1532516638307.svg",
//         link: "https://www.cell.com/",
//         isShow: true
//     },
//     {
//         title: "PNAS",
//         image: "https://www.pnas.org/pb-assets/images/Logos/header-logo/logo-1624644560537.svg",
//         link: "https://www.pnas.org/",
//         isShow: true
//     }
// ], function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Tools 成功增加");
// });

/* GET Home page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: {
            ChenLab: "Welcome!"
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;