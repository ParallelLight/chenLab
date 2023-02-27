<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
const isDark = ref(useDark());
</script>

<template>
  <div class="home-background">
  </div>
  <!-- 首页导语 -->
  <el-row class="home-intro">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>Welcome to ABC Group</h1>
      <h2>Academic Bioinformatics and Computing Group</h2>
      <span>We are mainly committed to the research of Biological Big Data and AI theory and methods, including
        bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and
        applications, etc.</span>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
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
            <span class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory
              and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory
              and methods, including
              bioinformatics, computational systems biology, network biology, dynamic data science methods, deep
              learning and applications, etc.We are mainly committed to the research of Biological Big Data and AI theory and methods, including
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
.home-background {
  width: 100%;
  min-height: 100%;
  background: url("./../assets/home-test.png") center center no-repeat;
  background-size: 100% 100%;
  position: fixed;
  z-index: -1;
  overflow: auto;
}

.home-intro {
  padding: 100px 0 220px 0;
  /* border: 1px solid green; */
}

.home-intro {
  color: white;
}

.home-intro h1 {
  font-size: 80px;
}

.home-intro h2 {
  font-size: 60px;
}

.home-intro span {
  font-size: 48px;
}

.home-recruiting {
  padding: 50px 0 80px 0;
}
</style>
