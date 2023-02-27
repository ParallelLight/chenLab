<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
const isDark = ref(useDark());
</script>

<template>
  <!-- 简述 -->
  <div class="wrapper-background"></div>
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
  <el-row class="research-intro" :style="{ 'background-color': (!isDark ? 'white' : '#161B22') }">
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
          <el-image style="width: 400px; height: 200px;"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 内容 -->
  <div>
    <!-- Part1 -->
    <el-row class="research-part" :style="{ 'background-color': (!isDark ? 'white' : '#0D1117') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>Part 1</h1>
        <el-row>
          <el-col :span="10">
            <el-image style="width: 100%; height: 400px;" fit="fill"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
          </el-col>
          <el-col :span="10" :offset="4" class="research-part-text">
            <h2>This is an Advertisement space</h2>
            <span class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and
              applications, etc.</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <!-- Papers -->
    <el-row class="research-paper" :style="{ 'background-color': (!isDark ? 'white' : '#363739') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h2>Related Papers of Part 1</h2>
        <div class="web-text">
          <div>1. We are mainly committed to the research of Biological Big Data and AI theory and methods</div>
          <div>2. including bioinformatics, computational systems biology</div>
          <div>3. network biology, dynamic data science methods, deep learning and applications, etc.</div>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <div>
    <!-- Part1 -->
    <el-row class="research-part" :style="{ 'background-color': (!isDark ? 'white' : '#0D1117') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>Part 1</h1>
        <el-row>
          <el-col :span="10">
            <el-image style="width: 100%; height: 400px;" fit="fill"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
          </el-col>
          <el-col :span="10" :offset="4" class="research-part-text">
            <h2>This is an Advertisement space</h2>
            <span class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and
              applications, etc.</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <!-- Papers -->
    <el-row class="research-paper" :style="{ 'background-color': (!isDark ? 'white' : '#363739') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h2>Related Papers of Part 1</h2>
        <div class="web-text">
          <div>1. We are mainly committed to the research of Biological Big Data and AI theory and methods</div>
          <div>2. including bioinformatics, computational systems biology</div>
          <div>3. network biology, dynamic data science methods, deep learning and applications, etc.</div>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <div>
    <!-- Part1 -->
    <el-row class="research-part" :style="{ 'background-color': (!isDark ? 'white' : '#0D1117') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>Part 1</h1>
        <el-row>
          <el-col :span="10">
            <el-image style="width: 100%; height: 400px;" fit="fill"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
          </el-col>
          <el-col :span="10" :offset="4" class="research-part-text">
            <h2>This is an Advertisement space</h2>
            <span class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and
              applications, etc.</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <!-- Papers -->
    <el-row class="research-paper" :style="{ 'background-color': (!isDark ? 'white' : '#363739') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h2>Related Papers of Part 1</h2>
        <div class="web-text">
          <div>1. We are mainly committed to the research of Biological Big Data and AI theory and methods</div>
          <div>2. including bioinformatics, computational systems biology</div>
          <div>3. network biology, dynamic data science methods, deep learning and applications, etc.</div>
        </div>
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
  border: 1px solid red;
  text-align: justify;
}

.research-paper {
  padding: 40px 0 70px 0;
}
</style>
