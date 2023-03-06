var express = require('express');
var router = express.Router();

/* GET Research page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: {
            researches: [
                {
                    title: "Part 1",
                    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    subtitle: "This is the subtitle",
                    content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
                    papers: [
                        {
                            title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
                            doi: "https://doi.org/10.1093/nsr/nwad028"
                        },
                        {
                            title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
                            doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
                        }
                    ]
                },
                {
                    title: "Part 2",
                    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    subtitle: "This is the subtitle",
                    content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
                    papers: [
                        {
                            title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
                            doi: "https://doi.org/10.1093/nsr/nwad028"
                        },
                        {
                            title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
                            doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
                        },
                        {
                            title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
                            doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
                        }
                    ]
                },
                {
                    title: "Part 3",
                    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                    subtitle: "This is the subtitle",
                    content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
                    papers: [
                        {
                            title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
                            doi: "https://doi.org/10.1093/nsr/nwad028"
                        }
                    ]
                }
            ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
