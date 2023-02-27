<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import { Avatar, Collection, Link } from "@element-plus/icons-vue"

const isDark = ref(useDark());

const papers = [
  {
    date: '27 January 2023',
    journal: "BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5",
    title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
    authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
    links: {
      "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
      "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
      "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
    },
    abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
    keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
    figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
    citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
  },
  {
    date: '27 January 2023',
    journal: "BMC Genomics",
    title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
    authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
    links: {
      "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
      "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
      "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
    },
    abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
    keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
    figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
    citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
  },
  {
    date: '27 January 2023',
    journal: "BMC Genomics",
    title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
    authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
    links: {
      "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
      "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
      "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
    },
    abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
    keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
    figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
    citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
  }
]



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
  <el-row class="moments-content" :style="{ 'background-color': (!isDark ? 'white' : ' #1d3043') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-timeline class="publications-papers">
        <el-timeline-item v-for="(activity, index) in activities" :key="index"
          :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" :timestamp="activity.timestamp" placement="top">
          <el-card>
            <h4>{{ activity.timestamp }}</h4>
            <p>{{ activity.content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <el-timeline class="publications-papers">
        <el-timeline-item v-for="(paper, index) in papers" :key="index"
          :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" placement="top" type="success" size="large"
          hollow="true">
          <h3>{{ paper.date }}</h3>
          <el-card class="publications-papers-card">
            <el-row>
              <el-col :span="11">
                <!-- Figure -->
                <el-image style="width: 100%;" :src="paper.figure"></el-image>
                <!-- Tags -->
                <el-tag class="publications-papers-card-tags" v-for="(tag, index) in paper.keywords" :key="index">{{ tag
                }}</el-tag>
              </el-col>
              <el-col :span="12" :offset="1">
                <!-- Title -->
                <span class="publications-papers-card-title">{{ paper.title }}</span>
                <!-- Authors -->
                <div class="publications-papers-card-authors"><el-icon>
                    <Avatar />
                  </el-icon> {{ paper.authors }}</div>
                <!-- Journal -->
                <div class="publications-papers-card-journal"><el-icon>
                    <Collection />
                  </el-icon> {{ paper.journal }}</div>
                <!-- Abstract -->
                <p class="publications-papers-card-abstract">{{ paper.abstract }}</p>
                <!-- Links -->
                <el-link class="publications-papers-card-links" :underline="false" target="_blank" type="primary"
                  v-for="(value, key, index) in paper.links" :key="index" :href="value"><el-icon>
                    <Link />
                  </el-icon>{{ key }}</el-link>
                <h4>Citation the article</h4>
                <span>{{ paper.citation }}</span>
              </el-col>
            </el-row>
          </el-card>
        </el-timeline-item>
      </el-timeline>

    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<style scoped>
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



.publications-papers {
  padding: 100px 0;
}

.publications-papers-card-tags {
  margin: 20px 10px 0 0;
}

.publications-papers-card-title {
  font-size: 24px;
  font-weight: bold;
}

.publications-papers-card-authors {
  margin: 15px 0 5px 0;
  font-size: 16px;
  font-weight: bold;
}

.publications-papers-card-journal {
  font-size: 16px;
  font-weight: bold;
}

.publications-papers-card-abstract {
  line-height: 1.5;
}

.publications-papers-card-links {
  font-size: medium;
  margin: 0 20px 0 0;
}
</style>