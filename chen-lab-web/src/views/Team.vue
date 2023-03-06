<script lang="ts" setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import { Warning } from '@element-plus/icons-vue';
import Axios from "axios";

const fill = ref(true)
const isDark = ref(useDark());
const statistics = ref()
const team = ref()
const supports = ref()
Axios.get('/api/team')
  .then((res) => {
    console.log(res)
    if (res.status == 200) {
      statistics.value = res.data.data.statistics;
      team.value = res.data.data.team;
      supports.value = res.data.data.supports;
    }
  })
  .catch((err) => {
    console.log(err)
  })


// const statistics = [
//   {
//     title: "Professors",
//     value: "6",
//     content: "There are 6 professors currently！"
//   },
//   {
//     title: "Postdocs",
//     value: "1",
//     content: "There are 6 professors currently！"
//   },
//   {
//     title: "Visitors",
//     value: "0",
//     content: "There are 6 professors currently！"
//   },
//   {
//     title: "Current Students",
//     value: "20",
//     content: "There are 6 professors currently！"
//   },
//   {
//     title: "Staff",
//     value: "1",
//     content: "There are 6 professors currently！"
//   },
//   {
//     title: "Alumnis",
//     value: "XX",
//     content: "There are"
//   }
// ]
// const team = [
//   {
//     type: "Professors",
//     people: [
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Luonan Chen",
//         position: "Chief Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: ""
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: ""
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: ""
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       },
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Xiaoping Liu",
//         position: "Professor",
//         website: "https://people.ucas.ac.cn/~liuxp",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:xpliu@ucas.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: ""
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       }
//     ]
//   },
//   {
//     type: "Postdocs",
//     people: [
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Luonan Chen",
//         position: "Chief Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       }
//     ]
//   },
//   {
//     type: "Visitors",
//     people: [
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Luonan Chen",
//         position: "Chief Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       }
//     ]
//   },
//   {
//     type: "Current Students",
//     people: [
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Luonan Chen",
//         position: "Chief Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       },
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Xiaoping Liu",
//         position: "Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       },
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Xiaoping Liu",
//         position: "Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       },
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Xiaoping Liu",
//         position: "Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       },
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Xiaoping Liu",
//         position: "Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       },
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Xiaoping Liu",
//         position: "Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       },
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Xiaoping Liu",
//         position: "Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       }
//     ]
//   },
//   {
//     type: "Staff",
//     people: [
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "Luonan Chen",
//         position: "Chief Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       }
//     ]
//   },
//   {
//     type: "Alumnis",
//     people: [
//       {
//         avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//         name: "张三",
//         position: "Chief Professor",
//         website: "http://cemcs.cas.cn/sourcedb_cemcs_cas/zw/pi/202008/t20200823_5670080.html",
//         commerce: [
//           {
//             icon: ['fas', 'envelope'],
//             account: "Email",
//             link: "mailto:lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'google'],
//             account: "Google Scholar",
//             link: "https://scholar.google.com/citations?user=Uoqv8rkAAAAJ&hl=zh-CN&oi=ao"
//           },
//           {
//             icon: ['fab', 'github'],
//             account: "Github",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'twitter'],
//             account: "Twitter",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'linkedin'],
//             account: "Linkedin",
//             link: "lnchen@sibs.ac.cn"
//           },
//           {
//             icon: ['fab', 'facebook'],
//             account: "Facebook",
//             link: ""
//           },
//           {
//             icon: ['fab', 'zhihu'],
//             account: "Zhihu",
//             link: ""
//           },
//           {
//             icon: ['fab', 'weixin'],
//             account: "WeChat",
//             link: ""
//           },
//           {
//             icon: ['fab', 'qq'],
//             account: "QQ",
//             link: ""
//           },
//           {
//             icon: ['fas', 'link'],
//             account: "CV",
//             link: ""
//           },
//         ],
//         interests: ["生物信息学", "计算系统生物学", "生物大数据及人工智能"],
//         biography: "陈洛南2009年10月起任中科院系统生物学重点实验室执行主任，研究员，博士生导师，研究组组长。",
//         hometown: "XXXX",
//         fact: "He always makes some bad jokes but everyone laughs too."
//       }
//     ]
//   },
// ]
// const supports = [
//   {
//     unit: "CAS",
//     logo: "https://www.zkszl.net/zhongke/userfiles/1/images/zk-logo.png",
//     link: "https://www.cas.cn/"
//   },
//   {
//     unit: "UCAS",
//     logo: "https://www.ucas.ac.cn/newStyle/images/lougou.png",
//     link: "https://www.ucas.ac.cn/"
//   },
//   {
//     unit: "CEMCS",
//     logo: "http://cemcs.cas.cn//images/shxbs_logo.png",
//     link: "http://cemcs.cas.cn/"
//   },
//   {
//     unit: "HIAS",
//     logo: "http://hias.ucas.ac.cn/images/t_logo.png",
//     link: "http://hias.ucas.ac.cn/"
//   }
// ]
</script>


<template>
  <!-- 背景 -->
  <div class="wrapper-background"></div>
  <!-- 简述 -->
  <div class="wrapper-sketch">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-row>
          <el-col class="wrapper-sketch-text" :span="14">
            <div class="wrapper-sketch-text-title">Team</div>
            <div class="wrapper-sketch-text-subtitle">A Happy Family</div>
            <h1 class="wrapper-sketch-text-content">Come from all over the world to meet</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 统计 -->
  <el-row class="team-statistic" :style="{ 'background-color': (!isDark ? '#e2e1e4' : '#22202e') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-row>
        <!-- 左侧内容 -->
        <el-col :span="10">
          <!-- 统计数量 -->
          <el-row :gutter="15">
            <el-col :span="8" v-for="(statistic, index) in statistics" :key="index">
              <el-card class="team-statistic-card">
                <el-statistic :value="statistic.value">
                  <template #title>
                    <div style="display: inline-flex; align-items: center">
                      {{ statistic.title }}
                      <el-tooltip effect="dark" :content="statistic.content" placement="top">
                        <el-icon style="margin-left: 4px" :size="12">
                          <Warning />
                        </el-icon>
                      </el-tooltip>
                    </div>
                  </template>
                </el-statistic>
              </el-card>
            </el-col>
          </el-row>
          <!-- 左侧文本 -->
          <span class="web-text">There is the composition of our group family and the family photo.
          </span>
        </el-col>
        <!-- 右侧图片 -->
        <el-col class="team-statistic-image" :span="12" :offset="2">
          <el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 人像 -->
  <el-row class="team-people" :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }"
    v-for="(identify, index) in team" :key="index">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>{{ identify.type }}</h1>
      <el-row :gutter="70">
        <el-col class="team-people-person" :span="8" v-for="(person, index) in identify.people" :key="index">
          <!-- Image + Info -->
          <div class="team-people-person-box">
            <el-image class="team-people-person-box-image" style="width: 100%;" :src="person.avatar"
              :fit="fill"></el-image>
            <!-- Info -->
            <div class="team-people-person-box-info"
              :style="{ 'background': (!isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)') }">
              <!-- Biography -->
              <p>{{ person.biography }}</p>
              <!-- Hometown -->
              <p v-if="person.hometown">Hometown: {{ person.hometown }}</p>
              <!-- Fun Fact -->
              <p>Fun Fact: {{ person.fact }}</p>
            </div>
          </div>
          <div class="team-people-person-card">
            <!-- Name + Position -->
            <div class="team-people-person-card-basic">
              <!-- Name -->
              <el-link class="team-people-person-card-basic-name" :underline="false" target="_blank"
                :href="person.website">
                {{ person.name }}
              </el-link>
              <!-- Position -->
              <el-tag class="team-people-person-card-basic-position" size="large" effect="plain">{{ person.position
              }}</el-tag>
            </div>
            <!-- Interests -->
            <el-tag class="team-people-person-card-interests" v-for="(interest, index) in person.interests"
              :key="index"><font-awesome-icon :icon="['fas', 'tag']" /> {{ interest }}</el-tag>
            <!-- Commerce -->
            <div>
              <span v-for="(sns, index) in person.commerce" :key="index">
                <el-link v-if="sns.link" class="team-people-person-card-commerce" :underline="false" target="_blank"
                  type="primary" :href="sns.link">
                  <el-tooltip :content="sns.account">
                    <font-awesome-icon :icon="sns.icon" />
                  </el-tooltip>
                </el-link>
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 合作 -->
  <el-row class="team-support" :style="{ 'background-color': (!isDark ? '#f1f0ed' : '#131824') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>CURRENT AND PREVIOUS SUPPORT</h1>
      <el-row class="team-support-wrap">
        <el-col :span="12">
          <el-carousel :interval="1000" type="card" height="150px" indicator-position="outside">
            <el-carousel-item class="team-support-wrap-card" v-for="(support, index) in supports" :key="index">
              <el-link :underline="false" :href="support.link" target="_blank">
                <el-image :src="support.logo" />
              </el-link>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8" :offset="4">
          <span class="web-text">There is the composition of our group family and the family photo.There is the
            composition of our group family and the family photo.
          </span>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style>
.team-statistic {
  padding: 100px 0;
  /* border: 1px solid red; */
}

.team-statistic-card {
  margin: 0 0 15px 0;
  /* border: 1px solid green; */
}

.team-statistic-image {
  display: flex;
  justify-content: right;
  align-items: center;
}

.team-people {
  padding: 15px 0 0 0;
  /* border: 1px solid green; */
}

.team-people h1 {
  font-size: 60px;
  font-family: ABC Maxi;
  font-weight: 400 !important;
}

.team-people-person {
  margin-bottom: 30px;
  /* border: 1px solid red; */
}

.team-people-person-box {
  position: relative;
}

.team-people-person-box-info {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  font-size: large;
  text-align: justify;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* background: rgba(0, 0, 0, 0.6); */
  opacity: 0;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.team-people-person-box:hover .team-people-person-box-info {
  opacity: 1;
}

.team-people-person-card {
  padding: 12px 0 60px 0;
}

.team-people-person-card-basic {
  display: flex;
  justify-content: left;
  align-items: center;
}

.team-people-person-card-basic-name {
  font-size: 40px;
  margin-right: 10px;
}

.team-people-person-card-basic-position {
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
}

.team-people-person-card-interests {
  margin: 12px 12px 16px 0;
}

.team-people-person-card-commerce {
  /* border: 1px solid green; */
  font-size: 18px;
  margin: 0px 12px 0 0;
}

.team-support {
  padding: 30px 0 100px 0;
}

.team-support-wrap {
  padding: 30px 0;
  display: flex;
  justify-content: left;
  align-items: center;
  /* border: 1px solid green; */
}

.team-support-wrap-card {
  padding: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>