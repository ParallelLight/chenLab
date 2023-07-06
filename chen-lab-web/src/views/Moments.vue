<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import Axios from "axios";

const isDark = ref(useDark());
const moments = ref()
Axios.get('/api/moments')
  .then((res) => {
    // console.log(res)
    if (res.status == 200) {
      moments.value = res.data.data.moments
    }
  })
  .catch((err) => {
    console.log(err)
  })

const screenWidth = ref();
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  }
})
// const moments = [
//   {
//     date: "2018-04-15",
//     title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important event",
//     image: ""
//   },
//   {
//     date: "2018-04-15",
//     title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important event",
//     image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
//   },
//   {
//     date: "2018-04-15",
//     title: "An important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important eventAn important event",
//     image: ""
//   },
//   {
//     date: "2018-04-15",
//     title: "An important eventAn important eventAn important eventAn important event",
//     image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
//   },
//   {
//     date: "2018-04-15",
//     title: "An important event",
//     image: ""
//   },
//   {
//     date: "2018-04-15",
//     title: "An important event",
//     image: ""
//   },
//   {
//     date: "2018-04-15",
//     title: "An important event",
//     image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
//   },
//   {
//     date: "2018-04-15",
//     title: "An important event",
//     image: ""
//   }
// ]

</script>

<template>
  <!-- 简述 -->
  <div class="wrapper-background"></div>
  <div class="wrapper-sketch">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-row>
          <el-col class="wrapper-sketch-text" :span="screenWidth > 1200 ? 14 : 24">
            <div class="wrapper-sketch-text-title">Moments</div>
            <div class="wrapper-sketch-text-subtitle">Highlight Moment of Lab</div>
            <h1 class="wrapper-sketch-text-content">Browse laboratory happy moments</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 时间轴 -->
  <el-row :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
    <el-col :span="2"></el-col>
    <el-col class="timeline" :span="20">
      <el-timeline class="moments-timeline">
        <el-timeline-item v-for="(moment, index) in moments" :key="index"
          :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" :timestamp="moment.date" placement="top"
          type="success" size="large" hollow="true">
          <el-card>
            <span class="web-text">{{ moment.title }}</span>
            <p>
              <el-image style="width: 100%;" :src="moment.image" :zoom-rate="1.2" :preview-src-list="[moment.image]"
                :initial-index="4" hide-on-click-modal="true"></el-image>
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <!-- Mobile Timeline -->
    <el-col class="mobile-timeline" :span="screenWidth > 700 ? 15 : 20">
      <el-timeline class="moments-timeline">
        <el-timeline-item v-for="(moment, index) in moments" :key="index" :timestamp="moment.date" placement="top"
          type="success" size="large" hollow="true">
          <el-card>
            <span class="web-text">{{ moment.title }}</span>
            <p>
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

/* 判断屏幕宽度小于1080px后使用百分比 */
@media screen and (max-width: 1200px) {
  .timeline {
    display: none;
  }
}

@media screen and (min-width: 1200px) {
  .mobile-timeline {
    display: none;
  }
}
</style>