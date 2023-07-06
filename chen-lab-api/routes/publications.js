var express = require('express');
var router = express.Router();
const Papers = require('../model/Papers');
const { mongoose } = require('mongoose');

/* Papers 增加记录 */
// Papers.insertMany([
//     {
//         doi: "10.1103/PhysRevE.102.032403",
//         year: 2020,
//         date: "2020.09.08",
//         journal: "PHYSICAL REVIEW E",
//         title: "Molecular dynamics study of ways of RNA base-pair formation",
//         authors: [
//             {
//                 name: "Qiangqiang Duan",
//                 link: "",
//             },
//             {
//                 name: "Peng Tao",
//                 link: "https://scholar.google.com/citations?user=DR3eCisAAAAJ",
//             },
//             {
//                 name: "Jun Wang",
//                 link: "",
//             },
//             {
//                 name: "Yi Xiao",
//                 link: "https://scholar.google.com/citations?user=nX5yzcsAAAAJ",
//             },
//         ],
//         links: {
//             "DOI: 10.1103/PhysRevE.102.032403": "https://doi.org/10.1103/PhysRevE.102.032403",
//             "PMID: 33076020": "https://pubmed.ncbi.nlm.nih.gov/33076020/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Molecular+dynamics+study+of+ways+of+RNA+base-pair+formation&btnG="
//         },
//         abstract: "Base pairing is a fundamental phenomenon in RNA structure and function. However, although there have been considerable recent advances, some important aspects of base-pair formation are still unknown, including the ways of base-pair formation and detailed roles of metal ions. Here we show that base pairs can form through four different ways: stabilizing, bridging, rotating, and shifting. Among them the stabilizing and bridging ways involve direct binding of metal ions while the rotating and shifting ways do not in most cases. Furthermore, we find that the formations of base pairs in different positions of the hairpin stem may adopt different ways.",
//         keywords: ["RNA structure", "Biological Physics"],
//         figure: "https://journals.aps.org/pre/article/10.1103/PhysRevE.102.032403/figures/1/medium",
//         citation: "Duan, Q., Tao, P., Wang, J., & Xiao, Y. (2020). Molecular dynamics study of ways of RNA base-pair formation. Physical review. E, 102(3-1), 032403. https://doi.org/10.1103/PhysRevE.102.032403",
//         archive: "",
//         isShow: true
//     },
//     {
//         doi: "10.1103/PhysRevE.105.024402",
//         year: 2022,
//         date: "2022.02.03",
//         journal: "PHYSICAL REVIEW E",
//         title: "Role of cotranslational folding for β-sheet-enriched proteins: A perspective from molecular dynamics simulations",
//         authors: [
//             {
//                 name: "Peng Tao",
//                 link: "https://scholar.google.com/citations?user=DR3eCisAAAAJ",
//             },
//             {
//                 name: "Yi Xiao",
//                 link: "https://scholar.google.com/citations?user=nX5yzcsAAAAJ",
//             },
//         ],
//         links: {
//             "DOI: 10.1103/PhysRevE.105.024402": "https://doi.org/10.1103/PhysRevE.105.024402",
//             "PMID: 35291071": "https://pubmed.ncbi.nlm.nih.gov/35291071/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Role+of+cotranslational+folding+for+%CE%B2-sheet-enriched+proteins%3A+A+perspective+from+molecular+dynamics+simulations&btnG="
//         },
//         abstract: "The formations of correct three-dimensional structures of proteins are essential to their functions. Cotranslational folding is vital for proteins to form correct structures in vivo. Although some experiments have shown that cotranslational folding can improve the efficiency of folding, its microscopic mechanism is not yet clear. Previously, we built a model of the ribosomal exit tunnel and investigated the cotranslational folding of a three-helix protein by using all-atom molecular dynamics simulations. Here we study the cotranslational folding of three β-sheet-enriched proteins using the same method. The results show that cotranslational folding can enhance the helical population in most cases and reduce non-native long-range contacts before emerging from the ribosomal exit tunnel. After exiting the tunnel, all proteins fall into local minimal states and the structural ensembles of cotranslational folding show more helical conformations than those of free folding. In particular, for one of the three proteins, the GTT WW domain, we find that one local minimum state of the cotranslational folding is the known folding intermediate, which is not found in free folding. This result suggests that the cotranslational folding may increase the folding efficiency by accelerating the sampling more than by avoiding the misfolded state, which is presently a mainstream viewpoint.",
//         keywords: ["Protein folding pathways", "Biological Physics"],
//         figure: "https://journals.aps.org/pre/article/10.1103/PhysRevE.102.032403/figures/1/medium",
//         citation: "Tao, P., & Xiao, Y. (2022). Role of cotranslational folding for β-sheet-enriched proteins: A perspective from molecular dynamics simulations. Physical review. E, 105(2-1), 024402. https://doi.org/10.1103/PhysRevE.105.024402",
//         archive: "",
//         isShow: true
//     },
//     {
//         doi: "10.1016/j.neunet.2022.08.004",
//         year: 2022,
//         date: "2022.08.10",
//         journal: "Neural Networks",
//         title: "Brain-inspired chaotic backpropagation for MLP",
//         authors: [
//             {
//                 name: "Peng Tao",
//                 link: "https://scholar.google.com/citations?user=DR3eCisAAAAJ",
//             },
//             {
//                 name: "Jie Cheng",
//                 link: "https://scholar.google.com/citations?user=2u88ffsAAAAJ",
//             },
//             {
//                 name: "Luonan Chen",
//                 link: "https://scholar.google.com/citations?user=nX5yzcsAAAAJ",
//             },
//         ],
//         links: {
//             "DOI: 10.1016/j.neunet.2022.08.004": "https://doi.org/10.1016/j.neunet.2022.08.004",
//             "PMID: 36027661": "https://pubmed.ncbi.nlm.nih.gov/36027661/",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Brain-inspired+chaotic+backpropagation+for+MLP&btnG="
//         },
//         abstract: "Backpropagation (BP) algorithm is one of the most basic learning algorithms in deep learning. Although BP has been widely used, it still suffers from the problem of easily falling into the local minima due to its gradient dynamics. Inspired by the fact that the learning of real brains may exploit chaotic dynamics, we propose the chaotic backpropagation (CBP) algorithm by integrating the intrinsic chaos of real neurons into BP. By validating on multiple datasets (e.g. cifar10), we show that, for multilayer perception (MLP), CBP has significantly better abilities than those of BP and its variants in terms of optimization and generalization from both computational and theoretical viewpoints. Actually, CBP can be regarded as a general form of BP with global searching ability inspired by the chaotic learning process in the brain. Therefore, CBP not only has the potential of complementing or replacing BP in deep learning practice, but also provides a new way for understanding the learning process of the real brain.",
//         keywords: ["Chaotic neural network", "Error backpropagation", "Global optimization", "Multilayer perception"],
//         figure: "https://ars.els-cdn.com/content/image/1-s2.0-S0893608022003045-gr1.jpg",
//         citation: "Tao, P., Cheng, J., & Chen, L. (2022). Brain-inspired chaotic backpropagation for MLP. Neural networks : the official journal of the International Neural Network Society, 155, 1–13. https://doi.org/10.1016/j.neunet.2022.08.004",
//         archive: "",
//         isShow: true
//     },
//     {
//         doi: "10.1016/j.ins.2022.11.159",
//         year: 2022,
//         date: "2022.12.05",
//         journal: "Information Sciences",
//         title: "Predicting time series by data-driven spatiotemporal information transformation",
//         authors: [
//             {
//                 name: "Peng Tao",
//                 link: "https://scholar.google.com/citations?user=DR3eCisAAAAJ",
//             },
//             {
//                 name: "Xiaohu Hao",
//                 link: "",
//             },
//             {
//                 name: "Jie Cheng",
//                 link: "https://scholar.google.com/citations?user=2u88ffsAAAAJ",
//             },
//             {
//                 name: "Luonan Chen",
//                 link: "https://scholar.google.com/citations?user=nX5yzcsAAAAJ",
//             },
//         ],
//         links: {
//             "DOI: 10.1016/j.ins.2022.11.159": "https://doi.org/10.1016/j.ins.2022.11.159",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Predicting+time+series+by+data-driven+spatiotemporal+information+transformation&btnG="
//         },
//         abstract: "Making an accurate prediction of an unknown system only from a short-term time series is difficult due to the lack of sufficient information, especially in a multistep-ahead manner. However, a high-dimensional short-term time series still contains rich dynamical information and is increasingly available in many fields. In this work, we exploit a spatiotemporal information (STI) scheme that transforms high-dimensional/spatial information into temporal information and develop a new method called multitask Gaussian process regression machine (MT-GPRM) to achieve accurate predictions from short-term time series. We first construct a specific multitask GPR comprising multiple linked STI mappings to transform high-dimensional/spatial information into temporal/dynamical information of any given target variable and then make multistep-ahead predictions of the target variable by solving those STI mappings. The multistep-ahead prediction results on various synthetic and real-world datasets show that MT-GPRM outperforms other existing approaches.",
//         keywords: ["Gaussian process regression", "Multitask learning", "Spatiotemporal information transformation", "Time-series prediction"],
//         figure: "https://ars.els-cdn.com/content/image/1-s2.0-S0020025522014827-gr1.jpg",
//         citation: "Tao, P., Hao, X., Cheng, J., & Chen, L. (2023). Predicting time series by data-driven spatiotemporal information transformation. Information Sciences, 622, 859-872.",
//         archive: "4.STI",
//         isShow: true
//     },
//     {
//         doi: "10.1016/j.fmre.2023.01.007",
//         year: 2023,
//         date: "2023.01.06",
//         journal: "Fundamental Research",
//         title: "Detecting dynamical causality by intersection cardinal concavity",
//         authors: [
//             {
//                 name: "Peng Tao",
//                 link: "https://scholar.google.com/citations?user=DR3eCisAAAAJ",
//             },
//             {
//                 name: "Qifan Wang",
//                 link: "",
//             },
//             {
//                 name: "Jifan Shi",
//                 link: "",
//             },
//             {
//                 name: "Xiaohu Hao",
//                 link: "",
//             },
//             {
//                 name: "Xiaoping Liu",
//                 link: "",
//             },
//             {
//                 name: "Bin Min",
//                 link: "",
//             },
//             {
//                 name: "Yiheng Zhang",
//                 link: "",
//             },
//             {
//                 name: "Chenyang Li",
//                 link: "",
//             },
//             {
//                 name: "He Cui",
//                 link: "",
//             },
//             {
//                 name: "Luonan Chen",
//                 link: "https://scholar.google.com/citations?user=nX5yzcsAAAAJ",
//             },
//         ],
//         links: {
//             "DOI: 10.1016/j.fmre.2023.01.007": "https://doi.org/10.1016/j.fmre.2023.01.007",
//             "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=Detecting+dynamical+causality+by+intersection+cardinal+concavity&btnG="
//         },
//         abstract: "Discovering causality from observed time series data is of great importance in various disciplines but also a challenging task. In recent years, cross-mapping methods have been developed to solve the non-separability or false-negative problem that traditional methods, e.g., Granger causality or transfer entropy, cannot handle. However, these cross-mapping methods suffer still from nonlinearity and robustness problems on the noisy data. Here, we propose cross-mapping cardinality (CMC), which detects direct causality in a robust and nonlinear manner by quantifying the intersectional cardinality (IC) from the neighbors of the cause variable to the cross-mapping neighbors of the effect variable in the delay embedding space. We theoretically and computationally show the new causal concept “IC concavity”, i.e. concave IC curve against the neighbor size implies causality in the sense of dynamical causality, in contrast to the non-causality of linear IC curve. Thus, the causal strength is measured reliably by the IC curve, which exploits both IC continuity and information transfer of the cross-mapping function from effect to cause variables. Through verification on various simulated and real-world datasets, the accuracy and robustness of CMC are demonstrated significantly better than existing methods. In particular, we validated CMC with the pulse data from motor cortex neurons by training a rhesus monkey to conduct a flexible manual interception experiment. CMC effectively identified the causal relations between neurons while the traditional methods failed. In summary, our approach with the new concept of IC concavity provides a powerful data-driven tool for detecting dynamical causality in complex systems.",
//         keywords: ["Causal inference", "Dynamical causality", "Nonlinear causality", "Cross mapping", "Non-separability problem", "False-negative problem"],
//         figure: "https://ars.els-cdn.com/content/image/1-s2.0-S2667325823000122-ga1_lrg.jpg",
//         citation: "Tao, P., Wang, Q., Shi, J., Hao, X., Liu, X., Min, B., ... & Chen, L. (2023). Detecting dynamical causality by intersection cardinal concavity. Fundamental Research.",
//         archive: "3.Causal Inference",
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
    let publicationsResults = await Publications.find().sort({ "year": -1 }).exec();
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
