// 获取 Mongoose
// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// 定义一个模式
const supportsSchema = new mongoose.Schema({
    // _id: ObjectId,
    u_id: Number,
    unit: String,
    logo: String,
    link: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const Supports = mongoose.model("Supports", supportsSchema);
// console.log("模型编译完成......")
module.exports = Supports;