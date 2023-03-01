<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import { Avatar, Collection, Link } from "@element-plus/icons-vue"

const isDark = ref(useDark());

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
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
            <div class="wrapper-sketch-text-title">Moments</div>
            <div class="wrapper-sketch-text-subtitle">The show of our work</div>
            <h1 class="wrapper-sketch-text-content">Happy Moments</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 时间轴 -->
  <el-row class="moments-content" :style="{ 'background-color': (!isDark ? 'white' : ' #1d3043') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-timeline class="publications-papers">
        <el-timeline-item v-for="(activity, index) in activities" :key="index"
          :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" :timestamp="activity.timestamp" placement="top">
          <el-card>
            <h4>{{ activity.timestamp }}</h4>
            <p>{{ activity.content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
.timeline-right {
  left: 50%;
  width: 50%;
  /* right: 0; */
  /* border: 1px solid blue; */
}

.timeline-left {
  left: 50%;
  width: 50%;
  /* border: 1px solid green; */
}

.timeline-left :deep(.el-timeline-item__wrapper) {
  right: 100%;
  padding: 0 19px 0 0;
  text-align: right;
}
</style>