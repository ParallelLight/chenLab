// 获取 Mongoose
const mongoose = require('mongoose');
// const { ObjectId } = require('mongodb');

// 定义一个模式
const papersSchema = new mongoose.Schema({
    // _id: ObjectId,
    doi: String,
    year: Number,
    date: String,
    journal: String,
    title: String,
    authors: [{
        name: String,
        link: String,
    }],
    links: Object,
    abstract: String,
    keywords: Array,
    figure: String,
    citation: String,
    archive: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const Papers = mongoose.model("Papers", papersSchema);
// console.log("模型编译完成......")
module.exports = Papers;