<script lang="ts" setup>
import { ref, toRefs } from "vue";
import { useRoute } from 'vue-router'; // 引入路由
import { useDark } from "@vueuse/core";  // 引入暗黑模式
import { Sunny, Moon } from "@element-plus/icons-vue"
import logoImage from "./../assets/logo.png";

const route = useRoute();
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
// @select="handleSelect"

const isDark = ref(useDark());

</script>


<template>
  <el-row :style="{ 'background-color': (!isDark ? 'white' : 'black') }">
    <el-col :span="1"></el-col>
    <el-col :span="22">
      <el-menu :default-active="route.path" router class="header-menu" mode="horizontal" :ellipsis="false"
        :background-color="!isDark ? 'white' : 'black'">
        <!-- <div class="header-menu-logo header-menu-item-flex"><a href="/">Computational Bioinformatics Group</a></div> -->
        <div class="header-menu-logo-warp header-menu-item-flex">
          <a href="/">
            <el-image class="header-menu-logo-wrap-image" :src="logoImage">
              <div slot="placeholder">
                Loading<span class="dot">...</span>
              </div>
            </el-image>
          </a>
        </div>
        <div class="flex-grow"></div>
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/research">Research</el-menu-item>
        <el-menu-item index="/team">Team</el-menu-item>
        <el-menu-item index="/publications">Publications</el-menu-item>
        <el-menu-item index="/resources">Resources</el-menu-item>
        <el-menu-item index="/news">News</el-menu-item>
        <el-menu-item index="/contact">Contact</el-menu-item>
        <div class="header-menu-item-flex">
          <el-switch v-model="isDark" inline-prompt :active-icon="Moon" :inactive-icon="Sunny" active-color="#303030"
            inactive-color="#909399" border-color="#D4D7DE" />
        </div>
      </el-menu>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
</template>

<style>
.header-menu {
  border: none;
  padding: 40px 0px;
}

.header-menu-logo-warp {
  font-size: large;
  font-style: italic;
  font-weight: bolder;
}

.header-menu-item-flex {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.header-menu-logo-wrap-image {
  height: 40px;
}

.flex-grow {
  flex-grow: 1;
}

/* 导航栏每个item的样式 */
.el-menu--horizontal>.el-menu-item {
  font-size: 17px;
  /* font-family: neue-haas-grotesk-display, Arial, Helvetica, sans-serif; */
  background-color: transparent !important;
  border: none;
}

/* 选中导航item后的样式 */
.el-menu--horizontal>.el-menu-item.is-active {
  border: none;
  /* 设置背景颜色 */
  background-color: transparent !important;
}
</style>