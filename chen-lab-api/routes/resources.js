var express = require('express');
var router = express.Router();
const Resources = require('../model/Resources');

/* Resources 增加一条记录 */
// Resources.create({
//     name: "Source Code 2",
//     desc: "We are mainly committed to the research of Biological Big Data and AI theory",
//     image: "",
//     link: "http://www.eccdna.org:2022/",
//     archive: "Source Code",   // Database, Source Code, Books
//     isShow: true,
// }, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
// });

/* Resources 聚合函数查询 */
// Resources.aggregate([
//     {
//         // 匹配过滤
//         $match: {
//             isShow: true
//         }
//     }, {
//         // 分组重整
//         $group: {
//             // 分组依据
//             _id: '$resource',
//             // 获取内容
//             tools: {
//                 $push: {
//                     name: "$name",
//                     desc: "$desc",
//                     image: "$image",
//                     link: "$link",
//                     links: "$links"
//                 }
//             }
//         }
//     }, {
//         // 排序
//         $sort: {
//             _id: -1
//         }
//     }
// ], (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('11111111111111111', res);
// })

/* 定义resources_dict字典 */
const resources_dict = {
    "Database": "Databases developed by the group",
    "Source Code": "Source code provided by the group",
    "Books": "Books written by the group"
}

/* GET Resources page. */
router.get('/', async (req, res, next) => {
    let resourcesResults = await Resources.aggregate([
        {
            // 匹配过滤
            $match: {
                isShow: true
            }
        }, {
            // 分组重整
            $group: {
                // 分组依据
                _id: '$archive',
                // 获取内容
                tools: {
                    $push: {
                        name: "$name",
                        desc: "$desc",
                        image: "$image",
                        link: "$link"
                    }
                }
            }
        }, {
            // 排序
            $sort: {
                _id: -1
            }
        }
    ]).exec();
    resourcesResults.forEach(element => {
        // console.log(element)
        element["subtitle"] = resources_dict[element._id]
    });
    // console.log(results)
    var data = {
        code: 0,
        data: {
            resources: resourcesResults
            // resources: [
            //     {
            //         title: "Database",
            //         subtitle: "Databases developed by the group",
            //         tools: [
            //             {
            //                 name: "TeCD",
            //                 desc: "We are mainly committed to the research of Biological Big Data and AI theory",
            //                 link: "http://www.eccdna.org:2022/"
            //             },
            //             {
            //                 name: "CASA",
            //                 desc: "Hello CASA",
            //                 link: "https://casadbtools.com/"
            //             }
            //         ]
            //     },
            //     {
            //         title: "Source Code",
            //         subtitle: "Source code provided by the group",
            //         tools: [
            //             {
            //                 name: "TeCD",
            //                 desc: "We are mainly committed to the research of Biological Big Data and AI theory",
            //                 link: "http://www.eccdna.org:2022/"
            //             },
            //             {
            //                 name: "CASA",
            //                 desc: "Hello CASA",
            //                 link: "https://casadbtools.com/"
            //             }
            //         ]
            //     },
            //     {
            //         title: "Books",
            //         subtitle: "Books written by the group",
            //         tools: [
            //             {
            //                 name: "TeCD",
            //                 desc: "We are mainly committed to the research of Biological Big Data and AI theory",
            //                 link: "http://www.eccdna.org:2022/"
            //             }
            //         ]
            //     },
            // ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
