<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
const isDark = ref(useDark());

const screenWidth = ref();
screenWidth.value = document.body.clientWidth;
// console.log("111111111", screenWidth);
window.onresize = () => {
  screenWidth.value = document.body.clientWidth;
  // console.log("222222222", screenWidth);
}

// onMounted(() => {
// })

</script>

<template>
  <!-- 首页背景图 -->
  <div class="home-background">
  </div>
  <!-- 首页导语 -->
  <el-row class="home-intro">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h1>Welcome!</h1>
      <h2>Computational Biology Lab</h2>
      <span>We are mainly committed to the research of Biological Big Data and AI theory and methods, including
        bioinformatics, computational systems biology, network biology, dynamic data science methods, deep learning and
        applications, etc.</span>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <!-- 首页内容 -->
  <div>
    <el-row :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <!-- 招兵买马 -->
        <div class="home-recruiting">
          <el-row>
            <!-- 8→24 -->
            <!-- <el-col :span="8"> -->
            <el-col :span="screenWidth > 1200 ? 8 : 24">
              <h1>Hot News</h1>
            </el-col>
            <!-- 14→24，2→0 -->
            <!-- <el-col :span="14" :offset="2"> -->
            <el-col :span="screenWidth > 1200 ? 14 : 24" :offset="screenWidth > 1200 ? 2 : 0">
              <!-- <h2>This is an Advertisement space</h2> -->
              <h2>第三届全国系统生物学大会
                <el-link target="_blank" type="primary" href="https://mp.weixin.qq.com/s/RxI1V1UQIzcVi7-m5khWfg"
                  style="font-size: 16px; font-weight: bold;"> 会议链接
                </el-link>
              </h2>
              <h4>时间：2023年9月22日至24日,（22日报到，25日离会）</h4>
              <h4>地点：山东省泰安市泰安宝胜大酒店（山东泰安泰山区，迎胜路367号）</h4>
              <p class="web-text">
                全国系统生物学大会是“中国生物化学与分子生物学会分子系统生物学专业分会”(分子系统生物学)、“中国运筹学会计算系统生物学分会”(计算系统生物学)、“中国生物工程学会系统生物医学专业委员会”(系统生物医学)
                三个组织共同发起的以系统生物学为研究领域的全国性学术大会。2019年9月，在上海交通大学举办了以“系统生物学：从基础研究到健康科学”为主题的第一届全国系统生物学大会；2021年12月，在上海中国科学院生物化学与细胞生物学研究所举办了第二届全国系统生物学大会，第二届全国系统生物学大会以“系统生物学：学科交叉
                会聚健康”为主题从分子系统生物学、计算系统生物学和系统生物医学等多个维度对系统生物学进行阐释；本届全国系统生物学大会拟以“复杂系统视角下的生命科学与智慧医疗”为主题，拟邀请数、理、化、生物、医学等相关领域的国内外科学家和青年学者，就系统生物学的理论、应用及国际研究现状和学科发展趋势进行交流，并探讨如何用分子、网络、系统生物学研究策略和人工智能方法来研究物质与生命、秩序与结构、相关性与思维反映等的复杂性问题，以期能够从系统和动态层面促进生物学研究，且与其他学科融合，实现跨学科、跨领域的学术交流与思想碰撞。
              </p>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
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
  color: white;
  /* border: 1px solid green; */
}

.home-intro h1 {
  font-size: 80px;
}

.home-intro h2 {
  font-size: 60px;
}

.home-intro span {
  font-size: 48px;
  line-height: 1.2;
}

.home-recruiting {
  padding: 50px 0 80px 0;
}


/* 判断屏幕宽度小于1080px后使用百分比 */
@media screen and (max-width: 1200px) {
  .home-intro {
    padding: 100px 0 200px 0;
  }

  .home-intro h1 {
    font-size: 64px;
  }

  .home-intro h2 {
    font-size: 46px;
  }

  .home-intro span {
    font-size: 32px;
  }
}

/* 判断屏幕宽度小于640px后使用百分比 */
@media screen and (max-width: 640px) {
  .home-intro {
    padding: 100px 0 180px 0;
  }

  .home-intro h1 {
    font-size: 52px;
  }

  .home-intro h2 {
    font-size: 36px;
  }

  .home-intro span {
    font-size: 28px;
  }
}
</style>
