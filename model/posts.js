const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
    title: String,
    author: String,
    post_date: {
        type: Date,
        default: Date.now
    },
    post_data: String
});

module.exports = model('posts', TaskSchema);