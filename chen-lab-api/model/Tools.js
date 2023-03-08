// 获取 Mongoose
// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// 定义一个模式
const toolsSchema = new mongoose.Schema({
    // _id: ObjectId,
    title: String,
    image: String,
    link: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const Tools = mongoose.model("Tools", toolsSchema);
// console.log("模型编译完成......")
module.exports = Tools;