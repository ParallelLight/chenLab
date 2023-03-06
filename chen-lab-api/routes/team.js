var express = require('express');
var router = express.Router();

/* GET Teams page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: {
            statistics: [
                {
                    title: "Professors",
                    value: "6",
                    content: "There are 6 professors currently！"
                },
                {
                    title: "Postdocs",
                    value: "1",
                    content: "There are 6 professors currently！"
                },
                {
                    title: "Visitors",
                    value: "0",
                    content: "There are 6 professors currently！"
                },
                {
                    title: "Current Students",
                    value: "20",
                    content: "There are 6 professors currently！"
                },
                {
                    title: "Staff",
                    value: "1",
                    content: "There are 6 professors currently！"
                },
                {
                    title: "Alumnis",
                    value: "XX",
                    content: "There are"
                }
            ],
            team: [
                {
                    type: "Professors",
                    people: [
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Luonan Chen",
                            position: "Chief Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        },
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Xiaoping Liu",
                            position: "Professor",
                            website: "https://people.ucas.ac.cn/~liuxp",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:xpliu@ucas.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        }
                    ]
                },
                {
                    type: "Postdocs",
                    people: [
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Luonan Chen",
                            position: "Chief Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        }
                    ]
                },
                {
                    type: "Visitors",
                    people: [
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Luonan Chen",
                            position: "Chief Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        }
                    ]
                },
                {
                    type: "Current Students",
                    people: [
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Luonan Chen",
                            position: "Chief Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        },
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Xiaoping Liu",
                            position: "Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        },
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Xiaoping Liu",
                            position: "Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        },
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Xiaoping Liu",
                            position: "Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        },
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Xiaoping Liu",
                            position: "Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        },
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Xiaoping Liu",
                            position: "Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        },
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Xiaoping Liu",
                            position: "Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        }
                    ]
                },
                {
                    type: "Staff",
                    people: [
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "Luonan Chen",
                            position: "Chief Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        }
                    ]
                },
                {
                    type: "Alumnis",
                    people: [
                        {
                            avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                            name: "张三",
                            position: "Chief Professor",
                            website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
                            commerce: [
                                {
                                    icon: ['fas', 'envelope'],
                                    account: "Email",
                                    link: "mailto:lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'google'],
                                    account: "Google Scholar",
                                    link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
                                },
                                {
                                    icon: ['fab', 'github'],
                                    account: "Github",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'twitter'],
                                    account: "Twitter",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'linkedin'],
                                    account: "Linkedin",
                                    link: "lnchen@sibs.ac.cn"
                                },
                                {
                                    icon: ['fab', 'facebook'],
                                    account: "Facebook",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'zhihu'],
                                    account: "Zhihu",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'weixin'],
                                    account: "WeChat",
                                    link: ""
                                },
                                {
                                    icon: ['fab', 'qq'],
                                    account: "QQ",
                                    link: ""
                                },
                                {
                                    icon: ['fas', 'link'],
                                    account: "CV",
                                    link: ""
                                },
                            ],
                            interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
                            biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
                            hometown: "XXXX",
                            fact: "He always makes some bad jokes but everyone laughs too."
                        }
                    ]
                },
            ],
            supports: [
                {
                    unit: "CAS",
                    logo: "https://www.zkszl.net/zhongke/userfiles/1/images/zk-logo.png",
                    link: "https://www.cas.cn/"
                },
                {
                    unit: "UCAS",
                    logo: "https://www.ucas.ac.cn/newStyle/images/lougou.png",
                    link: "https://www.ucas.ac.cn/"
                },
                {
                    unit: "CEMCS",
                    logo: "http://cemcs.cas.cn//images/shxbs_logo.png",
                    link: "http://cemcs.cas.cn/"
                },
                {
                    unit: "HIAS",
                    logo: "http://hias.ucas.ac.cn/images/t_logo.png",
                    link: "http://hias.ucas.ac.cn/"
                }
            ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
