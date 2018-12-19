const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: false
    },
    review: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    user_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Reviews", ReviewSchema);