// 获取 Mongoose
// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// 定义一个模式
const positionsSchema = new mongoose.Schema({
    // _id: ObjectId,
    p_id: Number,
    title: String,
    content: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const Positions = mongoose.model("Positions", positionsSchema);
// console.log("模型编译完成......")
module.exports = Positions;