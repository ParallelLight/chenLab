<script lang="ts" setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import { Warning } from '@element-plus/icons-vue';
const isDark = ref(useDark());
const fill = ref(true)
const statistics = [
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
]
const team = [
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
]
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
  <el-row class="team-statistic" :style="{ 'background-color': (!isDark ? 'white' : '#161B22') }">
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
  <el-row class="team-people" :style="{ 'background-color': (!isDark ? 'white' : '#0D1117') }"
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
            <div class="team-people-person-box-info">
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
              <el-link class="team-people-person-card-commerce" :underline="false" target="_blank" type="primary"
                v-for="(sns, index) in person.commerce" :key="index" :href="sns.link">
                <el-tooltip :content="sns.account">
                  <font-awesome-icon :icon="sns.icon" />
                </el-tooltip>
              </el-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 合作 -->
  <el-row class="team-statistic" :style="{ 'background-color': (!isDark ? 'white' : '#161B22') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-row>
        <!-- 左侧文本 -->
        <el-col :span="10">
          <span class="web-text">We are mainly committed to the research of Biological Big Data and AI
            theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data
            science methods, deep learning and applications, etc.
            We are mainly committed to the research of Biological Big Data and AI theory and methods, including
            bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning
            and applications, etc.
          </span>
        </el-col>
        <!-- 右侧图片 -->
        <el-col class="team-statistic-image" :span="12" :offset="2">
          <el-image style="width: 800px; height: 400px;"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
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
  background: rgba(0, 0, 0, 0.6);
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
</style>