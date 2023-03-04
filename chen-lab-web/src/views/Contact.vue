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
  <el-row :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="contact-recruiting">
        <el-row>
          <!-- 8→24 -->
          <el-col :span="8">
            <h1>Contact us</h1>
            <p class="web-text">Professor: Xiaoping Liu</p>
            <p class="web-text">Hangzhou Institute for Advanced Study (HIAS)</p>
            <p class="web-text">University of Chinese Academy of Sciences (UCAS)</p>
            <p class="web-text">No.1 Xiangshan Branch, Hangzhou 310004, Zhejiang Province, China</p>
            <p class="web-text">TEL : +86-571-86080306</p>
            <p class="web-text">E-mail : xpliu@ucas.ac.cn</p>
          </el-col>
          <!-- 14→24，2→0 -->
          <el-col :span="14" :offset="2">
            <iframe style="width: 100%; height: 100%;" src="/static/Map.html" frameborder="0"></iframe>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>
<style scoped>
.contact-recruiting {
  padding: 50px 0 80px 0;
}
</style>