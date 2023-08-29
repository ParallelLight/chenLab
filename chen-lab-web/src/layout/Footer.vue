<script lang="ts" setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import ucasImage from "./../assets/imgs/footer/ucas.png";
const isDark = ref(useDark());
</script>

<template>
  <el-row :style="{ 'background-color': (!isDark ? '#f8f4ed' : '#0f1423') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-menu class="footer-wrap" mode="horizontal" :ellipsis="false"
        :background-color="!isDark ? '#f8f4ed' : '#0f1423'">
        <div>
          <a href="https://www.ucas.ac.cn/" target="_blank">
            <el-image class="footer-wrap-logo" :src="ucasImage">
              <div slot="placeholder">
                Loading<span class="dot">...</span>
              </div>
            </el-image>
          </a>
        </div>
        <div class="footer-wrap-flex-grow"></div>
        <div>
          <a class="map-small" href='https://clustrmaps.com/site/1bve7' title='Visit tracker'><img
              src='//clustrmaps.com/map_v2.png?cl=ffffff&w=100&t=tt&d=tn5kfLlfmc04L5tfIH3RXxlb4N3Hd7hZmmq0gAAnMZs' /></a>
        </div>
        <div class="footer-wrap-flex-grow"></div>
        <div class="footer-wrap-text">
          <div>© 2023 Computational Systems Biology Lab</div>
          <div>Powered by <a href="https://www.parallellight.com/" target="_blank" style="color: #409EFF;">Ze Zhang</a>,
            <a href="https://p.lvcs.top/" target="_blank" style="color: #409EFF;">Chengshang LYU</a>, <a
              href="https://zhangqib.github.io/about/" target="_blank" style="color: #409EFF;">Qibin Zhang</a>
          </div>
          <div>@ CSBL, <a href="http://hias.ucas.ac.cn/" target="_blank" style="color: #409EFF;">HIAS</a>, <a
              href="https://www.ucas.ac.cn/" target="_blank" style="color: #409EFF;">UCAS</a></div>
        </div>
      </el-menu>
      <div class="mobile-footer-wrap">
        <div>
          <a href="https://www.ucas.ac.cn/" target="_blank">
            <el-image class="footer-wrap-logo" :src="ucasImage">
              <div slot="placeholder">
                Loading<span class="dot">...</span>
              </div>
            </el-image>
          </a>
        </div>
        <div class="footer-wrap-flex-grow"></div>
        <div>
          <a class="map-small" href='https://clustrmaps.com/site/1bve7' title='Visit tracker'><img
              src='//clustrmaps.com/map_v2.png?cl=ffffff&w=100&t=tt&d=tn5kfLlfmc04L5tfIH3RXxlb4N3Hd7hZmmq0gAAnMZs' /></a>
        </div>
        <div class="mobile-footer-wrap-text">
          <div>© 2023 Computational Systems Biology Lab</div>
          <div>Powered by <a href="https://www.parallellight.com/" target="_blank" style="color: #409EFF;">Ze Zhang</a>,
            <a href="https://p.lvcs.top/" target="_blank" style="color: #409EFF;">Chengshang LYU</a>, <a
              href="https://zhangqib.github.io/about/" target="_blank" style="color: #409EFF;">Qibin Zhang</a>
          </div>
          <div>@ CSBL, <a href="http://hias.ucas.ac.cn/" target="_blank" style="color: #409EFF;">HIAS</a>, <a
              href="https://www.ucas.ac.cn/" target="_blank" style="color: #409EFF;">UCAS</a></div>
        </div>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style>
.footer-wrap {
  width: 100%;
  padding: 50px 0;
  border: none;
}

.footer-wrap-logo {
  height: 57px;
}

.footer-wrap-flex-grow {
  flex-grow: 1;
}

.footer-wrap-text {
  /* text-align: end; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.mobile-footer-wrap {
  padding: 50px 0;
  text-align: center;
}

.mobile-footer-wrap-text {
  margin: 25px 0 0 0;
}

/* 判断屏幕宽度小于680px后使用百分比 */
@media screen and (max-width: 680px) {
  .footer-wrap {
    display: none;
  }
}

@media screen and (min-width: 680px) {
  .mobile-footer-wrap {
    display: none;
  }
}
</style>
