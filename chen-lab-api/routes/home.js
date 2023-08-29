var express = require('express');
var router = express.Router();
const News = require('../model/News');

/* News 增加一条记录 */
// News.create({
//     title: "第三届全国系统生物学大会（第二轮通知）",
//     link: "https://mp.weixin.qq.com/s/DA-VmFvMYkGUdo8uNblw1A",
//     datetime: "时间：2023年9月22日至24日,（22日报到，25日离会）",
//     address: "地点：山东省泰安市泰安宝胜大酒店（山东泰安泰山区，迎胜路367号）",
//     introduction: "全国系统生物学大会是“中国生物化学与分子生物学会分子系统生物学专业分会”(分子系统生物学)、“中国运筹学会计算系统生物学分会”(计算系统生物学)、“中国生物工程学会系统生物医学专业委员会”(系统生物医学) 三个组织共同发起的以系统生物学为研究领域的全国性学术大会。本届全国系统生物学大会拟以“复杂系统视角下的生命科学与智慧医疗”为主题，拟邀请数、理、化、生物、医学等相关领域的国内外科学家和青年学者，就系统生物学的理论、应用及国际研究现状和学科发展趋势进行交流，并探讨如何用分子、网络、系统生物学研究策略和人工智能方法来研究物质与生命、秩序与结构、相关性与思维反映等的复杂性问题，以期能够从系统和动态层面促进生物学研究。从基础研究到应用研究，学科融合、跨学科、跨领域是本次会议的特色。",
//     isShow: true
// }, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("News 成功增加一条记录");
// });

/* News 增加多条记录 */
// News.insertMany([
//     {
//         title: "第一届全国系统生物学大会",
//         link: "https://mp.weixin.qq.com/s/he-Vi-n8iG7Md7Lm6SW8jg",
//         datetime: "时间：2019年9月20日-22日（20日报到，21-22日会议）",
//         address: "地点：上海交通大学闵行校区（闵行区东川路800号）",
//         introduction: "系统生物学：从基础研究到健康科学",
//         isShow: true
//     },
//     {
//         title: "第二届全国系统生物学大会",
//         link: "https://mp.weixin.qq.com/s/TPSbBTdMcnufcvUp7IZ75Q",
//         datetime: "时间：2021年12月18日至19日",
//         address: "地点：上海岳阳路320号中科院生物化学与细胞生物学研究所报告厅",
//         introduction: "系统生物学目前已成为国际生命科学领域的主流热门学科，发展系统生物学是时代的需要，也是科学进步的需要。2019年9月在上海交通大学举办了以“系统生物学：从基础研究到健康科学”为主题的第一届全国系统生物学大会。第二届全国系统生物学大会将从分子系统生物学、计算系统生物学和系统生物医学等多个维度对系统生物学进行阐释，实现跨学科跨领域的学术交流与思想碰撞。",
//         isShow: true
//     },
//     {
//         title: "第三届全国系统生物学大会（第一轮通知）",
//         link: "https://mp.weixin.qq.com/s/RxI1V1UQIzcVi7-m5khWfg",
//         datetime: "时间：2023年9月22日至24日,（22日报到，25日离会）",
//         address: "地点：山东省泰安市泰安宝胜大酒店（山东泰安泰山区，迎胜路367号）",
//         introduction: "全国系统生物学大会是“中国生物化学与分子生物学会分子系统生物学专业分会”(分子系统生物学)、“中国运筹学会计算系统生物学分会”(计算系统生物学)、“中国生物工程学会系统生物医学专业委员会”(系统生物医学) 三个组织共同发起的以系统生物学为研究领域的全国性学术大会。本届全国系统生物学大会拟以“复杂系统视角下的生命科学与智慧医疗”为主题，拟邀请数、理、化、生物、医学等相关领域的国内外科学家和青年学者，就系统生物学的理论、应用及国际研究现状和学科发展趋势进行交流，并探讨如何用分子、网络、系统生物学研究策略和人工智能方法来研究物质与生命、秩序与结构、相关性与思维反映等的复杂性问题，以期能够从系统和动态层面促进生物学研究。从基础研究到应用研究，学科融合、跨学科、跨领域是本次会议的特色。",
//         isShow: false
//     },
//     {
//         title: "第三届全国系统生物学大会（第一轮通知）",
//         link: "https://mp.weixin.qq.com/s/RxI1V1UQIzcVi7-m5khWfg",
//         datetime: "",
//         address: "",
//         introduction: "",
//         isShow: true
//     },
//     {
//         title: "第三届全国系统生物学大会（第二轮通知）",
//         link: "https://mp.weixin.qq.com/s/DA-VmFvMYkGUdo8uNblw1A",
//         datetime: "时间：2023年9月22日至24日,（22日报到，25日离会）",
//         address: "地点：山东省泰安市泰安宝胜大酒店（山东泰安泰山区，迎胜路367号）",
//         introduction: "全国系统生物学大会是“中国生物化学与分子生物学会分子系统生物学专业分会”(分子系统生物学)、“中国运筹学会计算系统生物学分会”(计算系统生物学)、“中国生物工程学会系统生物医学专业委员会”(系统生物医学) 三个组织共同发起的以系统生物学为研究领域的全国性学术大会。本届全国系统生物学大会拟以“复杂系统视角下的生命科学与智慧医疗”为主题，拟邀请数、理、化、生物、医学等相关领域的国内外科学家和青年学者，就系统生物学的理论、应用及国际研究现状和学科发展趋势进行交流，并探讨如何用分子、网络、系统生物学研究策略和人工智能方法来研究物质与生命、秩序与结构、相关性与思维反映等的复杂性问题，以期能够从系统和动态层面促进生物学研究。从基础研究到应用研究，学科融合、跨学科、跨领域是本次会议的特色。",
//         isShow: true
//     }
// ], function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("News 成功增加");
// });

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
// router.get('/', function (req, res, next) {
// var data = {
//     code: 0,
//     data: {
//         ChenLab: "Welcome!"
//     },
//     isSuccess: true,
//     msg: "success"
// }
// res.json(data);
router.get('/', async (req, res, next) => {
    let newsResults = await News.find({ isShow: true }).sort({ "updated": -1 }).exec();
    // let toolsResults = await Tool
    const data = {
        code: 0,
        data: { news: newsResults },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;