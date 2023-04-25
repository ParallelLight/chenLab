var express = require('express');
var router = express.Router();
// const Persons = require('../model/Persons');
const Positions = require('../model/Positions');
const Supports = require('../model/Supports');
const { mongoose } = require('mongoose');

/* Positions 增加记录 */
// Positions.insertMany([
//     {
//         p_id: 1,
//         title: "Professors",
//         content: "There are 6 professors currently！",
//         isShow: true,
//     },
//     {
//         p_id: 2,
//         title: "Postdocs",
//         content: "There are 6 professors currently！",
//         isShow: true,
//     },
//     {
//         p_id: 3,
//         title: "Visitors",
//         content: "There are Visitors！",
//         isShow: true,
//     },
//     {
//         p_id: 4,
//         title: "Current Students",
//         content: "There are Current Students！",
//         isShow: true,
//     },
//     {
//         p_id: 5,
//         title: "Staff",
//         content: "There are Staff！",
//         isShow: true,
//     },
//     {
//         p_id: 6,
//         title: "Alumnis",
//         content: "There are Alumnis！",
//         isShow: true,
//     },
// ], function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Positions 增加记录");
// });

/* Persons 增加记录 */
// Persons.insertMany([
//     {
//         lab_id: 0,  // 实验室ID，必须是Number格式，老师：工号；学生：入学年份+学号后五位
//         avatar: "/api/images/team/yourImage",   // 头像
//         name: "Name",   // 姓名
//         position: "Position",   // 职位，可具体描述
//         position_title: "Professors",   // 与Positions集合的关联项-大类 Professors Postdocs Visitors ‘Current Students’ Staff Alumnis
//         website: "/people/name",  // 个人博客链接 nginx 重定向 个人博客链接 https
//         commerce: [ // 社交账号（有的话上传）
//             {
//                 icon: ["fas", "envelope"],
//                 account: "Email",
//                 link: "mailto:your@mails"    // 邮箱 mailto:
//             },
//             {
//                 icon: ["fab", "google"],
//                 account: "Google Scholar",
//                 link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"   // 谷歌学术
//             },
//             {
//                 icon: ["fab", "github"],
//                 account: "Github",
//                 link: ""    // GitHub
//             },
//             {
//                 icon: ["fab", "twitter"],
//                 account: "Twitter",
//                 link: ""    // Twitter
//             },
//             {
//                 icon: ["fab", "linkedin"],
//                 account: "Linkedin",
//                 link: ""    // Linkedin
//             },
//             {
//                 icon: ["fab", "facebook"],
//                 account: "Facebook",
//                 link: ""    // Facebook
//             },
//             {
//                 icon: ["fab", "zhihu"],
//                 account: "Zhihu",
//                 link: ""    // Zhihu
//             },
//             {
//                 icon: ["fab", "weixin"],
//                 account: "WeChat",
//                 link: ""    // WeChat
//             },
//             {
//                 icon: ["fab", "qq"],
//                 account: "QQ",
//                 link: ""    // QQ
//             },
//             {
//                 icon: ["fas", "link"],
//                 account: "CV",
//                 link: ""    // CV简历链接
//             },
//         ],
//         interests: ["Bioinformatics", "interest2", "interest2"],    // 研究方向
//         biography: "Your biography Your biography Your biography Your biography Your biography Your biography Your biography Your biography Your biography",  // 个人简介
//         hometown: "XXX, XXX, XXX",   // 家乡
//         fact: "your fun fact your fun fact your fun fact your fun fact your fun fact your fun fact your fun fact your fun fact your fun fact ",    // Fun Fact
//         isShow: true
//     },
// ], function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Persons 增加记录");
// });

/* Supports 增加记录 */
// Supports.insertMany([
//     {
//         u_id: 1,
//         unit: "UCAS",
//         logo: "https://www.ucas.ac.cn/newStyle/images/lougou.png",
//         link: "https://www.ucas.ac.cn/",
//         isShow: true
//     },
//     {
//         u_id: 2,
//         unit: "CEMCS",
//         logo: "http://cemcs.cas.cn//images/shxbs_logo.png",
//         link: "http://cemcs.cas.cn/",
//         isShow: true
//     },
//     {
//         u_id: 3,
//         unit: "HIAS",
//         logo: "http://hias.ucas.ac.cn/images/t_logo.png",
//         link: "http://hias.ucas.ac.cn/",
//         isShow: true
//     },
// ], function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Supports 增加记录");
// });

/* Positions + Papers 聚合 Teams */
// Positions.aggregate([
//     {
//         // 过滤 positions 集合
//         $match: {
//             isShow: true
//         }
//     }, {
//         // 连接 persons 集合
//         $lookup: {
//             from: "persons",
//             localField: "title",
//             foreignField: "position_title",
//             // 过滤 persons 集合
//             pipeline: [
//                 {
//                     $match: {
//                         $expr: {
//                             $eq: ["$isShow", true]
//                         }
//                     }
//                 }, {
//                     $sort: {
//                         "lab_id": 1
//                     }
//                 }
//             ],
//             as: "people"
//         }
//     }, {
//         // 添加 count 统计 people 数量
//         $addFields: {
//             count: {
//                 "$size": "$people"
//             }
//         }
//     }, {
//         // 生成新的集合，重复运行会覆盖之前的内容
//         $out: "teams"
//     }
// ], (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Teams: 聚合完成', res);
// });

/* Teams 声明获取新的集合 */
const teamsSchema = new mongoose.Schema();
const Teams = mongoose.model("Team", teamsSchema);
// Teams.find({},
//     function (err, res) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(res);
//     });

/* GET Teams page. */
router.get('/', async (req, res, next) => {
    let teamsResults = await Teams.find().exec();
    let supportResults = await Supports.find({ isShow: true }).sort({ "u_id": -1 }).exec();
    var data = {
        code: 0,
        data: {
            team: teamsResults,
            supports: supportResults
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
