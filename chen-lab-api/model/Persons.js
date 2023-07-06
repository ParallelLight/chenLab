// 获取 Mongoose
// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// 定义一个模式
const personsSchema = new mongoose.Schema({
    // _id: ObjectId,
    lab_id: Number,
    avatar: String,
    name: String,
    position: String,
    position_title: String,
    website: String,
    commerce: Array,
    interests: Array,
    biography: String,
    hometown: String,
    fact: String,
    timeline: String,
    isShow: Boolean,
    updated: { type: Date, default: Date.now }
})

// 使用模式"编译"模型
const Persons = mongoose.model("Persons", personsSchema);
// console.log("模型编译完成......")

module.exports = Persons;