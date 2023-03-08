<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import Axios from "axios";

const isDark = ref(useDark());

const researches = ref()
Axios.get('/api/research')
  .then((res) => {
    console.log(res)
    if (res.status == 200) {
      researches.value = res.data.data.researches;
    }
  })
  .catch((err) => {
    console.log(err)
  })

// const researches = [
//   {
//     title: "Part 1",
//     image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//     subtitle: "This is the subtitle",
//     content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
//     papers: [
//       {
//         title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
//         doi: "https://doi.org/10.1093/nsr/nwad028"
//       },
//       {
//         title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
//         doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
//       }
//     ]
//   },
//   {
//     title: "Part 2",
//     image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//     subtitle: "This is the subtitle",
//     content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
//     papers: [
//       {
//         title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
//         doi: "https://doi.org/10.1093/nsr/nwad028"
//       },
//       {
//         title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
//         doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
//       },
//       {
//         title: "Peng Tao, Jifan Shi, Luonan Chen. Detecting dynamical causality by intersection cardinal concavity. Fundamental Research, https://doi.org/10.1016/j.fmre.2023.01.007, 2023.",
//         doi: "https://doi.org/10.1016/j.fmre.2023.01.007"
//       }
//     ]
//   },
//   {
//     title: "Part 3",
//     image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
//     subtitle: "This is the subtitle",
//     content: "We are mainly committed to the research of Biological Big Data and AI theory and methods, including bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and applications, etc.",
//     papers: [
//       {
//         title: "Shijie Tang, Yun Xue, Zhen Qin, Zhaoyuan Fang, Yihua Sun, Chongzhe Yuan, Yunjian Pan, Yue Zhao, Xinyuan Tong, Jian Zhang, Hsinyi Huang, Yuting Chen, Liang Hu, Dasong Huang, Ruiqi Wang, Weiguo Zou, Yuan Li, Roman K Thomas, Andrea Ventura, Kwok-Kin Wong, Haiquan Chen, Luonan Chen, Hongbin Ji. Counteracting lineage-specific transcription factor network finely tunes lung adeno-to-squamous transdifferentiation through remodeling tumor immune microenvironment. National Science Review, https://doi.org/10.1093/nsr/nwad028, 2023.",
//         doi: "https://doi.org/10.1093/nsr/nwad028"
//       }
//     ]
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
            <div class="wrapper-sketch-text-title">Research</div>
            <div class="wrapper-sketch-text-subtitle">Computational systems biology & Bioinformatics</div>
            <h1 class="wrapper-sketch-text-content">Go for Science and Seek for Progress</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 介绍 -->
  <el-row class="research-intro" :style="{ 'background-color': (!isDark ? '#e2e1e4' : '#22202e') }">
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
        <el-col class="research-intro-image" :span="12" :offset="2">
          <el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 内容 -->
  <div v-for="(research, index) in researches" :key="index">
    <!-- Part -->
    <el-row class="research-part" :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ research.title }}</h1>
        <el-row>
          <el-col :span="10">
            <el-image style="width: 60%;" fit="fill" :src="research.image" :zoom-rate="1.2"
              :preview-src-list="[research.image]" :initial-index="4" hide-on-click-modal="true"></el-image>
          </el-col>
          <el-col :span="10" :offset="4" class="research-part-text">
            <h2>{{ research.subtitle }}</h2>
            <span class="web-text">{{ research.content }}</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <!-- Papers -->
    <el-row class="research-paper" :style="{ 'background-color': (!isDark ? '#f1f0ed' : '#131824') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h2>Related Papers of {{ research.title }}</h2>
        <ol>
          <li class="web-text" v-for="(paper, index) in research.papers" :key="index">
            <span>{{ paper.citation }}</span>
            <el-link style="font-size: large;" :underline="false" target="_blank" type="primary"
              :href="'https://doi.org/' + paper.doi">
              <font-awesome-icon icon="arrow-up-right-from-square" />
            </el-link>
          </li>
        </ol>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.research-intro {
  padding: 100px 0;
  /* border: 1px solid red; */
}

.research-intro-image {
  display: flex;
  justify-content: right;
  align-items: center;
  /* border: 1px solid green; */
}

.research-part {
  padding: 50px 0 70px 0;
  /* border: 1px solid blue; */
}

.research-part-text {
  /* border: 1px solid red; */
  text-align: justify;
}

.research-paper {
  text-align: justify;
  padding: 40px 0 80px 0;
}

.research-paper ol {
  /* margin: 0; */
  padding: 0 0 0 20px;
}
</style>
