<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式

const isDark = ref(useDark());

const moments = [
  {
    date: "2018-04-15",
    title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important event",
    image: ""
  },
  {
    date: "2018-04-15",
    title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important event",
    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  },
  {
    date: "2018-04-15",
    title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important event",
    image: ""
  },
  {
    date: "2018-04-15",
    title: "An important eventAn important eventAn important eventAn important event",
    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  },
  {
    date: "2018-04-15",
    title: "An important event",
    image: ""
  },
  {
    date: "2018-04-15",
    title: "An important event",
    image: ""
  },
  {
    date: "2018-04-15",
    title: "An important event",
    image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  },
  {
    date: "2018-04-15",
    title: "An important event",
    image: ""
  }
]

const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
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
  <el-row :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-timeline class="moments-timeline">
        <el-timeline-item v-for="(moment, index) in moments" :key="index"
          :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" :timestamp="moment.date" placement="top"
          type="success" size="large" hollow="true">
          <el-card>
            <span class="web-text">{{ moment.title }}</span>
            <p v-if="moment.image" class="demo-image__preview">
              <el-image style="width: 100%;" :src="moment.image" :zoom-rate="1.2" :preview-src-list="[moment.image]"
                :initial-index="4" hide-on-click-modal="true"></el-image>
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
.moments-timeline {
  padding: 50px 0 100px 0;
}

.moments-timeline :deep(.el-timeline-item__timestamp) {
  margin: 0 0 20px 0;
  font-size: x-large;
  font-weight: bold;
}

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