<script lang="ts" setup>
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
            <div class="wrapper-sketch-text-title">Resources</div>
            <div class="wrapper-sketch-text-subtitle">The show of our work</div>
            <h1 class="wrapper-sketch-text-content">There are some our resources</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 内容 -->
  <div>
    <el-row class="resources-wrap" :style="{ 'background-color': (!isDark ? 'white' : '#0D1117') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <!-- 核心内容 -->
        <el-row>
          <!-- 8→24 -->
          <el-col :span="8">
            <h1>Database</h1>
          </el-col>
          <!-- 14→24，2→0 -->
          <el-col :span="14" :offset="2">
            <h2>This is an Advertisement space</h2>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
          </el-col>
          <el-divider border-style="dashed" class="resources-wrap-divider" />
        </el-row>
        <!-- 核心内容 -->
        <el-row>
          <!-- 8→24 -->
          <el-col :span="8">
            <h1>Database</h1>
          </el-col>
          <!-- 14→24，2→0 -->
          <el-col :span="14" :offset="2">
            <h2>This is an Advertisement space</h2>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
          </el-col>
          <el-divider border-style="dashed" class="resources-wrap-divider" />
        </el-row>
        <!-- 核心内容 -->
        <el-row>
          <!-- 8→24 -->
          <el-col :span="8">
            <h1>Database</h1>
          </el-col>
          <!-- 14→24，2→0 -->
          <el-col :span="14" :offset="2">
            <h2>This is an Advertisement space</h2>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
            <div class="web-text">We are mainly committed to the research of Biological Big Data and AI theory and
              methods, including.</div>
          </el-col>
          <el-divider border-style="dashed" class="resources-wrap-divider" />
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.resources-wrap {
  padding: 50px 0 100px 0;
}

.resources-wrap-divider {
  margin: 50px 0;
}
</style>