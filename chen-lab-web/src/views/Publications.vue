<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core"; // 引入暗黑模式
import Axios from "axios";

const isDark = ref(useDark());
const publications = ref()
Axios.get('/api/publications')
  .then((res) => {
    console.log(res)
    if (res.status == 200) {
      publications.value = res.data.data.publications
    }
  })
  .catch((err) => {
    console.log(err)
  })

// 点击按钮平滑过渡到对应的ID元素位置
function scrollToView(value: string): void {
  console.log(value)
  const targetElement: HTMLElement | null = document.getElementById(value);
  console.log(targetElement)
  if (targetElement) {
    targetElement.scrollIntoView({
      block: 'start', // 上边框与视窗顶部平齐
      behavior: 'smooth'  // 平滑过渡
    });
  }
}

const screenWidth = ref();
onMounted(() => {
  screenWidth.value = document.body.clientWidth;
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth;
  }
})
// const publications = [
//   {
//     year: "2023",
//     papers: [
//       {
//         date: '27 January 2023',
//         journal: "BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
//         links: {
//           "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//           "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//           "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
//       }
//     ]
//   },
//   {
//     year: "2022",
//     papers: [
//       {
//         date: '27 January 2023',
//         journal: "BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
//         links: {
//           "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//           "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//           "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
//       },
//       {
//         date: '27 January 2023',
//         journal: "BMC Genomics",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
//         links: {
//           "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//           "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//           "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
//       },
//       {
//         date: '27 January 2023',
//         journal: "BMC Genomics",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
//         links: {
//           "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//           "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//           "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
//       }
//     ]
//   },
//   {
//     year: "2021",
//     papers: [
//       {
//         date: '27 January 2023',
//         journal: "BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
//         links: {
//           "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//           "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//           "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
//       },
//       {
//         date: '27 January 2023',
//         journal: "BMC Genomics",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
//         links: {
//           "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//           "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//           "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
//       },
//       {
//         date: '27 January 2023',
//         journal: "BMC Genomics",
//         title: "TeCD: The eccDNA Collection Database for extrachromosomal circular DNA",
//         authors: "Jing Guo✝, Ze Zhang✝, Qingcui Li, Xiao Chang & Xiaoping Liu ",
//         links: {
//           "DOI: 10.1186/s12864-023-09135-5": "https://doi.org/10.1186/s12864-023-09135-5",
//           "PMID: 36707765": "https://pubmed.ncbi.nlm.nih.gov/36707765/",
//           "Google Scholar": "https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C5&q=TeCD%3A+The+eccDNA+Collection+Database+for+extrachromosomal+circular+DNA&btnG="
//         },
//         abstract: "Background: Extrachromosomal circular DNA (eccDNA) is a kind of DNA that widely exists in eukaryotic cells. Studies in recent years have shown that eccDNA is often enriched during tumors and aging, and participates in the development of cell physiological activities in a special way, so people have paid more and more attention to the eccDNA, and it has also become a critical new topic in modern biological research. Description: We built a database to collect eccDNA, including animals, plants and fungi, and provide researchers with an eccDNA retrieval platform. The collected eccDNAs were processed in a uniform format and classified according to the species to which it belongs and the chromosome of the source. Each eccDNA record contained sequence length, start and end sites on the corresponding chromosome, order of the bases, genomic elements such as genes and transposons, and other information in the respective sequencing experiment. All the data were stored into the TeCD (The eccDNA Collection Database) and the BLAST (Basic Local Alignment Search Tool) sequence alignment function was also added into the database for analyzing the potential eccDNA sequences. Conclusion: We built TeCD, a platform for users to search and obtain eccDNA data, and analyzed the possible potential functions of eccDNA. These findings may provide a basis and direction for researchers to further explore the biological significance of eccDNA in the future.",
//         keywords: ["Circular DNA", "Extrachromosomal DNA", "eccDNA"],
//         figure: "https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12864-023-09135-5/MediaObjects/12864_2023_9135_Fig1_HTML.png?as=webp",
//         citation: "Guo, J., Zhang, Z., Li, Q., Chang, X., & Liu, X. (2023). TeCD: The eccDNA Collection Database for extrachromosomal circular DNA. BMC genomics, 24(1), 47. https://doi.org/10.1186/s12864-023-09135-5"
//       }
//     ]
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
            <div class="wrapper-sketch-text-title">Publications</div>
            <div class="wrapper-sketch-text-subtitle">The show of our work</div>
            <h1 class="wrapper-sketch-text-content">Access the lab's published research and news media coverage</h1>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
  <!-- 添加一个可视化统计分析 -->
  <!-- 论文 -->
  <el-row class="publications-wrap" :style="{ 'background-color': (!isDark ? '#cdd1d3' : '#131124') }">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <h2>Click to jump the year</h2>
      <el-check-tag class="publications-wrap-years" size="large" effect="plain"
        v-for="(publication, index) in publications" :key="index" checked @click="scrollToView(publication.year)">{{
          publication.year
        }}</el-check-tag>
      <el-timeline :id="publication.year" class="publications-papers" v-for="(publication, index) in publications"
        :key="index">
        <!-- Year -->
        <el-timeline-item type="success" size="large" hollow="true">
          <h1>{{ publication.year }} ({{ publication.count }} total)</h1>
        </el-timeline-item>
        <!-- Papers -->
        <el-timeline-item v-for="(paper, index) in publication.papers" :key="index" :timestamp="paper.date"
          placement="top" type="success" size="large" hollow="true">
          <!-- <h3>{{ paper.date }}</h3> -->
          <el-card class="publications-papers-card">
            <el-row>
              <el-col :span="screenWidth > 1600 ? 11 : 24">
                <!-- Figure -->
                <el-image v-if="paper.figure" style="width: 100%; margin-bottom: 20px;" :src="paper.figure"
                  :zoom-rate="1.2" :preview-src-list="[paper.figure]" :initial-index="4"
                  hide-on-click-modal="true"></el-image>
                <!-- Tags -->
                <el-tag class="publications-papers-card-tags" v-for="(tag, index) in paper.keywords" :key="index">
                  <font-awesome-icon :icon="['fas', 'tag']" /> {{ tag }}</el-tag>
              </el-col>
              <el-col :span="screenWidth > 1600 ? 12 : 24" :offset="screenWidth > 1600 ? 1 : 0">
                <!-- Title -->
                <span class="publications-papers-card-title">{{ paper.title }}</span>
                <!-- Authors -->
                <div class="publications-papers-card-authors">
                  <font-awesome-icon icon="people-group" />
                  <span v-for="(author, index) in paper.authors" :key="index"><el-link v-if="author.link" target="_blank"
                      type="primary" :href="author.link" style="font-size: 16px; font-weight: bold;"> {{ author.name }}.
                    </el-link>
                    <span v-else>{{ author.name }}. </span>
                  </span>
                </div>
                <!-- Journal -->
                <div class="publications-papers-card-journal"><font-awesome-icon icon="book" /> {{ paper.journal }}</div>
                <!-- Abstract -->
                <p class="publications-papers-card-abstract">{{ paper.abstract }}</p>
                <!-- Links -->
                <el-link class="publications-papers-card-links" :underline="false" target="_blank" type="primary"
                  v-for="(value, key, index) in paper.links" :key="index" :href="value">
                  <font-awesome-icon :icon="['fas', 'link']" />{{ key }}</el-link>
                <div><font-awesome-icon icon="quote-left" /> {{ paper.citation }}</div>
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
.publications-intro {
  padding: 100px 0;
  /* border: 1px solid red; */
}

.publications-wrap {
  padding: 50px 0 100px 0;
}

.publications-wrap-years {
  margin: 0 8px 8px 0;
}

.publications-papers {
  padding: 150px 0 0 0;
}

.publications-papers :deep(.el-timeline-item__timestamp) {
  margin: 0 0 20px 0;
  font-size: x-large;
  font-weight: bold;
}

.publications-papers-card-tags {
  margin: 0 12px 10px 0;
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
  margin: 0 20px 10px 0;
}
</style>