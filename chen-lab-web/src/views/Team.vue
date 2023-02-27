<script lang="ts" setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import { ChatLineRound, Male } from '@element-plus/icons-vue'
const isDark = ref(useDark());
const currentDate = ref(new Date())
const size = ref('default')
const fill = ref(true)
const persons = [
  {
    name: "张三",
    avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  },
  {
    name: "张三",
    avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  },
  {
    name: "张三",
    avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
  },
  {
    name: "张三",
    avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
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
            <div class="wrapper-sketch-text-title">Team</div>
            <div class="wrapper-sketch-text-subtitle">A Happy Family</div>
            <h1 class="wrapper-sketch-text-content">Come from all over the world to meet</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 统计 -->
  <el-row class="team-statistic" :style="{ 'background-color': (!isDark ? 'white' : '#161B22') }">
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
          <el-row>
            <el-col :span="6">
              <el-statistic title="Daily active users" :value="268500" />
            </el-col>
            <el-col :span="6">
              <el-statistic :value="138">
                <template #title>
                  <div style="display: inline-flex; align-items: center">
                    Ratio of men to women
                    <el-icon style="margin-left: 4px" :size="12">
                      <Male />
                    </el-icon>
                  </div>
                </template>
                <template #suffix>/100</template>
              </el-statistic>
            </el-col>
            <el-col :span="6">
              <el-statistic title="Total Transactions" :value="172000" />
            </el-col>
            <el-col :span="6">
              <el-statistic title="Feedback number" :value="562">
                <template #suffix>
                  <el-icon style="vertical-align: -0.125em">
                    <ChatLineRound />
                  </el-icon>
                </template>
              </el-statistic>
            </el-col>
          </el-row>
        </el-col>
        <!-- 右侧图片 -->
        <el-col class="team-statistic-image" :span="12" :offset="2">
          <el-image style="width: 800px; height: 400px;"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 人像 -->
  <el-row class="team-people" :style="{ 'background-color': (!isDark ? 'white' : '#0D1117') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>Proffessor</h1>
      <el-row :gutter="70">
        <el-col class="team-people-card" :span="8" v-for="(tissue, index) in persons" :key="index">
          <el-image class="team-people-card-image" style="width: 100%;" :src="tissue.avatar" :fit="fill"></el-image>
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-col>
      </el-row>
      <h1>Postdocs</h1>
      <el-row :gutter="70">
        <el-col class="team-people-card" :span="8" v-for="(tissue, index) in persons" :key="index">
          <el-image class="team-people-card-image" style="width: 100%;" :src="tissue.avatar" :fit="fill"></el-image>
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 合作 -->
  <el-row class="team-statistic" :style="{ 'background-color': (!isDark ? 'white' : '#161B22') }">
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
        <el-col class="team-statistic-image" :span="12" :offset="2">
          <el-image style="width: 800px; height: 400px;"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style>
.team-statistic {
  padding: 100px 0;
  /* border: 1px solid red; */
}

.team-statistic-image {
  display: flex;
  justify-content: right;
  align-items: center;
}

.team-people {
  padding: 15px 0;
}

.team-people h1 {
  font-size: 60px;
  font-family: ABC Maxi;
  font-weight: 400 !important;
}

.team-people-card {
  margin-bottom: 40px;
  /* border: 1px solid red; */
}

.team-people-card-image {
  cursor: pointer;

}
</style>