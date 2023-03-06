var express = require('express');
var router = express.Router();

/* GET Publications page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: {
            publications: [
                {
                    year: "2023",
                    papers: [
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
                        }
                    ]
                },
                {
                    year: "2022",
                    papers: [
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
                },
                {
                    year: "2021",
                    papers: [
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
                }
            ]
        },
        isSuccess: true,
        msg: "success"
    }
    res.json(data);
});

module.exports = router;
