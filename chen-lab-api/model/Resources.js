// 获取 Mongoose
// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// 定义一个模式
const resourcesSchema = new mongoose.Schema({
    // _id: ObjectId,
    name: String,
    desc: String,
    image: String,
    link: String,
    archive: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const Resources = mongoose.model("Resources", resourcesSchema);
// console.log("模型编译完成......")
module.exports = Resources;