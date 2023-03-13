var express = require('express');
var router = express.Router();
const Papers = require('../model/Papers');
const { mongoose } = require('mongoose');

/* Papers 增加记录 */
// Papers.insertMany([
//     {
//         doi: "10.1186/s12864-023-09135-5",
//         year: 2020,
//         date: "2020.03.03",
//         journal: "journal journal journal journal journal journal journal journal ",
//         title: "title title title title title title title title title title title title title ",
//         authors: [
//             {
//                 name: "name",
//                 link: "",
//             },
//             {
//                 name: "name",
//                 link: "https://scholar.google.com/citations?user=_yiMcX8AAAAJ&hl=zh-CN",
//             },
//         ],
//         links: {
//             "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//             "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. ",
//         keywords: ["keywords", "keywords", "keywords"],
//         figure: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         citation: "citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation ",
//         archive: "Part1",
//         isShow: true
//     },
//     {
//         doi: "10.1186/s12864-023-09135-5",
//         year: 2021,
//         date: "2021.05.05",
//         journal: "journal journal journal journal journal journal journal journal ",
//         title: "title title title title title title title title title title title title title ",
//         authors: [
//             {
//                 name: "name",
//                 link: "",
//             },
//             {
//                 name: "name",
//                 link: "https://scholar.google.com/citations?user=_yiMcX8AAAAJ&hl=zh-CN",
//             },
//         ],
//         links: {
//             "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//             "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. ",
//         keywords: ["keywords", "keywords", "keywords"],
//         figure: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         citation: "citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation ",
//         archive: "Part1",
//         isShow: true
//     },
//     {
//         doi: "10.1186/s12864-023-09135-5",
//         year: 2021,
//         date: "2021.08.01",
//         journal: "journal journal journal journal journal journal journal journal ",
//         title: "title title title title title title title title title title title title title ",
//         authors: [
//             {
//                 name: "name",
//                 link: "",
//             },
//             {
//                 name: "name",
//                 link: "https://scholar.google.com/citations?user=_yiMcX8AAAAJ&hl=zh-CN",
//             },
//         ],
//         links: {
//             "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//             "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. ",
//         keywords: ["keywords", "keywords", "keywords"],
//         figure: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         citation: "citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation ",
//         archive: "Part1",
//         isShow: true
//     },
//     {
//         doi: "10.1186/s12864-023-09135-5",
//         year: 2022,
//         date: "2022.10.10",
//         journal: "journal journal journal journal journal journal journal journal ",
//         title: "title title title title title title title title title title title title title ",
//         authors: [
//             {
//                 name: "name",
//                 link: "",
//             },
//             {
//                 name: "name",
//                 link: "https://scholar.google.com/citations?user=_yiMcX8AAAAJ&hl=zh-CN",
//             },
//         ],
//         links: {
//             "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//             "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. abstract. ",
//         keywords: ["keywords", "keywords", "keywords"],
//         figure: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         citation: "citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation citation ",
//         archive: "Part1",
//         isShow: true
//     },
//     {
//         doi: "10.1186/s12864-023-09135-5",
//         year: 2023,
//         date: "2023.01.27",
//         journal: "BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: [
//             {
//                 name: "Jing Guo✝",
//                 link: "",
//             },
//             {
//                 name: "Ze Zhang✝",
//                 link: "https://www.parallellight.com/",
//             },
//             {
//                 name: "Qingcui Li",
//                 link: "",
//             },
//             {
//                 name: "Xiao Chang",
//                 link: "",
//             },
//             {
//                 name: "Xiaoping Liu",
//                 link: "https://scholar.google.com/citations?user=_yiMcX8AAAAJ&hl=zh-CN",
//             },
//         ],
//         links: {
//             "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//             "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5",
//         archive: "Database",
//         isShow: true
//     }
// ], function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
//     console.log("Papers 增加记录");
// });

/* Papers 聚合 publications */
// Papers.aggregate([
//     {
//         // 匹配过滤
//         $match: {
//             isShow: true
//         }
//     }, {
//         $sort: {
//             date: -1
//         }
//     }, {
//         // 根据年份分组重整
//         $group: {
//             // 分组依据
//             _id: '$year',
//             // 获取内容
//             papers: {
//                 $push: {
//                     date: "$date",
//                     journal: "$journal",
//                     title: "$title",
//                     authors: "$authors",
//                     links: "$links",
//                     abstract: "$abstract",
//                     keywords: "$keywords",
//                     figure: "$figure",
//                     citation: "$citation"
//                 }
//             },
//             // 统计数量
//             count: {
//                 $sum: 1
//             }
//         }
//     }, {
//         // 按照分组后的年份 _id 排序
//         $sort: {
//             _id: -1
//         }
//     }, {
//         // 添加 year
//         $addFields: {
//             year: "$_id"
//         }
//     }, {
//         // 生成新的集合，重复运行会覆盖之前的内容
//         $out: "publications"
//     }
// ], (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("publications 聚合完成")
// })

/* Publications 声明获取新的集合 */
const publicationsSchema = new mongoose.Schema();
const Publications = mongoose.model("Publications", publicationsSchema);
// Publications.find({},
//     function (err, res) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(res);
//     });

/* GET Publications page. */
router.get('/', async (req, res, next) => {
    // console.log("数据库检索中......");
    let publicationsResults = await Publications.find().exec();
    var data = {
        code: 0,
        data: {
            publications: publicationsResults
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
