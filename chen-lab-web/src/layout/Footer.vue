<script lang="ts" setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
const isDark = ref(useDark());
</script>

<template>
  <el-row :style="{ 'background-color': (!isDark ? '#f8f4ed' : '#0f1423') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-menu class="footer-wrap" mode="horizontal" :ellipsis="false" :background-color="!isDark ? '#f8f4ed' : '#0f1423'">
        <div>
          <a href="https://www.ucas.ac.cn/" target="_blank">
            <el-image class="footer-wrap-logo" src="https://www.ucas.ac.cn/newStyle/images/lougou.png">
              <div slot="placeholder">
                Loading<span class="dot">...</span>
              </div>
            </el-image>
          </a>
        </div>
        <div class="footer-wrap-flex-grow"></div>
        <div class="footer-wrap-text">
          <!-- <div>Powered by Ze Zhang @ ABC Group, HIAS, UCAS</div> -->
          <div>© 2023 Chen luonan Chief Proffessor Studio</div>
        </div>
      </el-menu>
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
  height: 45px;
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
</style>
