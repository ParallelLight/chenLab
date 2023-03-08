var express = require('express');
var router = express.Router();
// const Interests = require('../model/Interests');
const { mongoose } = require('mongoose');

/* Interests 增加记录 */
// Interests.insertMany([
//     {
//         title: "Part 2",
//         image: "https://www.pnas.org/pb-assets/images/Logos/header-logo/logo-1624644560537.svg",
//         subtitle: "This is the subtitle",
//         content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
//         isShow: true,
//     },
//     {
//         title: "Part 3",
//         image: "https://www.pnas.org/pb-assets/images/Logos/header-logo/logo-1624644560537.svg",
//         subtitle: "This is the subtitle",
//         content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
//         isShow: true,
//     },
//     {
//         title: "Part 4",
//         image: "https://www.pnas.org/pb-assets/images/Logos/header-logo/logo-1624644560537.svg",
//         subtitle: "This is the subtitle",
//         content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
//         isShow: true,
//     }
// ], function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Interests 增加记录");
// });

/* Interests + Papers 聚合 researches */
// Interests.aggregate([
//     {
//         // 过滤 researches 集合
//         $match: {
//             isShow: true
//         }
//     }, {
//         // 连接 papers 集合
//         $lookup: {
//             from: "papers",
//             localField: "title",
//             foreignField: "archive",
//             // 过滤 papers 集合
//             pipeline: [
//                 {
//                     $match: {
//                         $expr: {
//                             $eq: ["$isShow", true]
//                         }
//                     }
//                 }, {
//                     $sort: {
//                         "date": -1
//                     }
//                 }
//             ],
//             as: "papers"
//         }
//     }, {
//         // 生成新的集合，重复运行会覆盖之前的内容
//         $out: "researches"
//     }
// ], (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("researches 聚合完成");
// });

/* Researches 声明获取新的集合 */
const researchesSchema = new mongoose.Schema();
const Researches = mongoose.model("Researches", researchesSchema);
// Researches.find({},
//     function (err, res) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(res);
//     });


/* GET Research page. */
router.get('/', async (req, res, next) => {
    let researchesResults = await Researches.find().exec();
    var data = {
        code: 0,
        data: {
            researches: researchesResults
            // researches: [
            //     {
            //         title: "Part 1",
            //         image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //         subtitle: "This is the subtitle",
            //         content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
            //         papers: [
            //             {
            //                 title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
            //                 doi: "https://doi.org/10.1093/nsr/nwad028"
            //             },
            //             {
            //                 title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
            //                 doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
            //             }
            //         ]
            //     },
            //     {
            //         title: "Part 2",
            //         image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //         subtitle: "This is the subtitle",
            //         content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
            //         papers: [
            //             {
            //                 title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
            //                 doi: "https://doi.org/10.1093/nsr/nwad028"
            //             },
            //             {
            //                 title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
            //                 doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
            //             },
            //             {
            //                 title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
            //                 doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
            //             }
            //         ]
            //     },
            //     {
            //         title: "Part 3",
            //         image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //         subtitle: "This is the subtitle",
            //         content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
            //         papers: [
            //             {
            //                 title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
            //                 doi: "https://doi.org/10.1093/nsr/nwad028"
            //             }
            //         ]
            //     }
            // ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
