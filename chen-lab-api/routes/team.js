var express = require('express');
var router = express.Router();
// const Persons = require('../model/Persons');
// const Positions = require('../model/Positions');
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
//         lab_id: 2,  // 实验室ID，必须是Number格式，老师：工号；学生：入学年份+学号后五位
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",   // 头像
//         name: "Name",   // 姓名
//         position: "Position",   // 职位，可具体描述
//         position_title: "Professors",   // 与Positions集合的关联项-大类 Professors Postdocs Visitors ‘Current Students’ Staff Alumnis
//         website: "/people/name",  // 个人博客链接 nginx 重定向 个人博客链接 https
//         commerce: [ // 社交账号（有的话上传）
//             {
//                 icon: ["fas", "envelope"],
//                 account: "Email",
//                 link: "mailto:lnchen@sibs.ac.cn"    // 邮箱 mailto:
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
//     }
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
//                         "lab_id": -1
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
            // statistics: [
            //     {
            //         title: "Professors",
            //         value: "6",
            //         content: "There are 6 professors currently！"
            //     },
            //     {
            //         title: "Postdocs",
            //         value: "1",
            //         content: "There are 6 professors currently！"
            //     },
            //     {
            //         title: "Visitors",
            //         value: "0",
            //         content: "There are 6 professors currently！"
            //     },
            //     {
            //         title: "Current Students",
            //         value: "20",
            //         content: "There are 6 professors currently！"
            //     },
            //     {
            //         title: "Staff",
            //         value: "1",
            //         content: "There are 6 professors currently！"
            //     },
            //     {
            //         title: "Alumnis",
            //         value: "XX",
            //         content: "There are"
            //     }
            // ],
            // team: [
            //     {
            //         type: "Professors",
            //         people: [
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Luonan Chen",
            //                 position: "Chief Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             },
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Xiaoping Liu",
            //                 position: "Professor",
            //                 website: "https://people.ucas.ac.cn/~liuxp",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:xpliu@ucas.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             }
            //         ]
            //     },
            //     {
            //         type: "Postdocs",
            //         people: [
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Luonan Chen",
            //                 position: "Chief Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             }
            //         ]
            //     },
            //     {
            //         type: "Visitors",
            //         people: [
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Luonan Chen",
            //                 position: "Chief Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             }
            //         ]
            //     },
            //     {
            //         type: "Current Students",
            //         people: [
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Luonan Chen",
            //                 position: "Chief Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             },
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Xiaoping Liu",
            //                 position: "Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             },
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Xiaoping Liu",
            //                 position: "Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             },
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Xiaoping Liu",
            //                 position: "Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             },
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Xiaoping Liu",
            //                 position: "Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             },
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Xiaoping Liu",
            //                 position: "Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             },
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Xiaoping Liu",
            //                 position: "Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             }
            //         ]
            //     },
            //     {
            //         type: "Staff",
            //         people: [
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "Luonan Chen",
            //                 position: "Chief Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             }
            //         ]
            //     },
            //     {
            //         type: "Alumnis",
            //         people: [
            //             {
            //                 avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            //                 name: "张三",
            //                 position: "Chief Professor",
            //                 website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
            //                 commerce: [
            //                     {
            //                         icon: ["fas", "envelope"],
            //                         account: "Email",
            //                         link: "mailto:lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "google"],
            //                         account: "Google Scholar",
            //                         link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
            //                     },
            //                     {
            //                         icon: ["fab", "github"],
            //                         account: "Github",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "twitter"],
            //                         account: "Twitter",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "linkedin"],
            //                         account: "Linkedin",
            //                         link: "lnchen@sibs.ac.cn"
            //                     },
            //                     {
            //                         icon: ["fab", "facebook"],
            //                         account: "Facebook",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "zhihu"],
            //                         account: "Zhihu",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "weixin"],
            //                         account: "WeChat",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fab", "qq"],
            //                         account: "QQ",
            //                         link: ""
            //                     },
            //                     {
            //                         icon: ["fas", "link"],
            //                         account: "CV",
            //                         link: ""
            //                     },
            //                 ],
            //                 interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
            //                 biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
            //                 hometown: "XXXX",
            //                 fact: "He always makes some bad jokes but everyone laughs too."
            //             }
            //         ]
            //     },
            // ],
            // supports: [
            //     {
            //         unit: "CAS",
            //         logo: "https://www.zkszl.net/zhongke/userfiles/1/images/zk-logo.png",
            //         link: "https://www.cas.cn/"
            //     },
            //     {
            //         unit: "UCAS",
            //         logo: "https://www.ucas.ac.cn/newStyle/images/lougou.png",
            //         link: "https://www.ucas.ac.cn/"
            //     },
            //     {
            //         unit: "CEMCS",
            //         logo: "http://cemcs.cas.cn//images/shxbs_logo.png",
            //         link: "http://cemcs.cas.cn/"
            //     },
            //     {
            //         unit: "HIAS",
            //         logo: "http://hias.ucas.ac.cn/images/t_logo.png",
            //         link: "http://hias.ucas.ac.cn/"
            //     }
            // ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
