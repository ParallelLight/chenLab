// 获取 Mongoose
// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// 定义一个模式
const momentsSchema = new mongoose.Schema({
    // _id: ObjectId,
    date: String,
    title: String,
    image: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const Moments = mongoose.model("Moments", momentsSchema);
// console.log("模型编译完成......")
module.exports = Moments;
