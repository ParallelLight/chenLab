<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import Axios from "axios";

const isDark = ref(useDark());
const resources = ref()
Axios.get('/api/resources')
  .then((res) => {
    // console.log(res)
    if (res.status == 200) {
      resources.value = res.data.data.resources
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
// const resources = [
//   {
//     title: "Database",
//     subtitle: "Databases developed by the group",
//     tools: [
//       {
//         name: "TeCD",
//         desc: "We are mainly committed to the research of Biological Big Data and AI theory",
//         link: "http://www.eccdna.org:2022/"
//       },
//       {
//         name: "CASA",
//         desc: "Hello CASA",
//         link: "https://casadbtools.com/"
//       }
//     ]
//   },
//   {
//     title: "Source Code",
//     subtitle: "Source code provided by the group",
//     tools: [
//       {
//         name: "TeCD",
//         desc: "We are mainly committed to the research of Biological Big Data and AI theory",
//         link: "http://www.eccdna.org:2022/"
//       },
//       {
//         name: "CASA",
//         desc: "Hello CASA",
//         link: "https://casadbtools.com/"
//       }
//     ]
//   },
//   {
//     title: "Books",
//     subtitle: "Books written by the group",
//     tools: [
//       {
//         name: "TeCD",
//         desc: "We are mainly committed to the research of Biological Big Data and AI theory",
//         link: "http://www.eccdna.org:2022/"
//       }
//     ]
//   },
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
            <div class="wrapper-sketch-text-title">Resources</div>
            <div class="wrapper-sketch-text-subtitle">The resources of our work</div>
            <h1 class="wrapper-sketch-text-content">There are some our resources</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 内容 -->
  <div>
    <el-row class="resources-wrap" :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
      <el-col :span="2"></el-col>
      <el-col :span="20" v-if="resources">
        <!-- 核心内容 -->
        <el-row v-for="(resource, index) in resources" :key="index">
          <!-- 8→24 -->
          <el-col :span="screenWidth > 1200 ? 8 : 24">
            <h1>{{ resource._id }}</h1>
          </el-col>
          <!-- 14→24，2→0 -->
          <el-col :span="screenWidth > 1200 ? 14 : 24" :offset="screenWidth > 1200 ? 2 : 0">
            <h2>{{ resource.subtitle }}</h2>
            <ul>
              <li class="web-text" v-for="(tool, index) in resource.tools" :key="index">
                <span>{{ tool.name }}: {{ tool.desc }}</span>
                <el-link style="font-size: large;" :underline="false" target="_blank" type="primary" :href="tool.link">
                  <font-awesome-icon icon="arrow-up-right-from-square" />
                </el-link>
              </li>
            </ul>
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
  padding: 50px 0;
}

.resources-wrap-divider {
  margin: 50px 0;
}
</style>