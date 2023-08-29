// 获取 Mongoose
// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// 定义一个模式
const newsSchema = new mongoose.Schema({
    // _id: ObjectId,
    title: String,
    link: String,
    datetime: String,
    address: String,
    introduction: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const News = mongoose.model("News", newsSchema);
// console.log("模型编译完成......")
module.exports = News;