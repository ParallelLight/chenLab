<script lang="ts" setup>
import { ref } from 'vue'
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
  <el-row>
    <el-col :span="1"></el-col>
    <el-col :span="22">
      <h1 class="team-title-h1">This is our team</h1>
      <div>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(tissue, index) in persons" :key="index">
            <el-card class="team-person-card">
              <img :src="tissue.avatar" class="image" />
              <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
</template>

<style>
.team-title-h1 {
  font-size: 60px;
  font-family: ABC Maxi;
  font-weight: 400 !important;
}

.team-person-card {
  /* height: 66px; */
  cursor: pointer;
  margin-bottom: 20px;
}
</style>