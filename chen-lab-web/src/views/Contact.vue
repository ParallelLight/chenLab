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
            <div class="wrapper-sketch-text-title">Contact</div>
            <div class="wrapper-sketch-text-subtitle">You can contact us</div>
            <h1 class="wrapper-sketch-text-content">coverage</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 内容 -->
  <!-- 首页内容 -->
  <el-row :style="{ 'background-color': (!isDark ? 'white' : '#121212') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <!-- 招兵买马 -->
      <div class="home-recruiting">
        <el-row>
          <!-- 8→24 -->
          <el-col :span="8">
            <h1>Recruiting</h1>
          </el-col>
          <!-- 14→24，2→0 -->
          <el-col :span="14" :offset="2">
            <h2>This is an Advertisement space</h2>
            <span class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory
              and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory
              and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory
              and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory
              and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory
              and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.</span>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>
<style scoped>
.home-recruiting {
  padding: 50px 0 80px 0;
}
</style>