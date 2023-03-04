<script lang="ts" setup>
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

const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
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
    <div class="demo-image__preview">
        <el-image style="width: 100px; height: 100px" :src="url" :zoom-rate="1.2" :preview-src-list="srcList"
            :initial-index="4" fit="cover" />
    </div>



    <div class="box">
        <a href="#">
            <div class="img"><img src="图片路径"></div>
            <div class="text">
                <h3>提示文字</h3>
            </div>
        </a>
    </div>

    <el-timeline class="timeline">
        <!-- 循环判断索引的奇偶区分开左右 -->
        <el-timeline-item v-for="(activity, index) in activities" :key="index"
            :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" :timestamp="activity.timestamp" placement="top">
            <el-card>
                <h4>{{ activity.timestamp }}</h4>
                <p>{{ activity.content }}</p>
            </el-card>
        </el-timeline-item>
    </el-timeline>
</template>

<style scoped>
.demo-image__error .image-slot {
    font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
    font-size: 30px;
}

.demo-image__error .el-image {
    width: 100%;
    height: 200px;
}


/* `el-timeline`的容器`padding` */
.timeline {
    padding: 50px;
}

/* 右侧`el-timeline-item`的样式，将原始时间轴组件整体移动到右半侧 */
.timeline-right {
    left: 50%;
    width: 50%;
}

/* 左侧`el-timeline-item`的样式，同上，仅是为了方便下面的CSS样式修改 */
.timeline-left {
    left: 50%;
    width: 50%;
}

/* 针对左侧内容修改样式，注意这里使用的scss */
.timeline-left :deep(.el-timeline-item__wrapper) {
    right: 100%;
    padding: 0 19px 0 0;
    text-align: right;
}





.box {
    position: relative;
    width: 350px;
    height: 350px;
}

.box .img img {
    position: relative;
    width: 350px;
    height: 350px;
    max-width: 100%;
}

.box .text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
}

.box a:hover .text {
    opacity: 1;
}
</style>