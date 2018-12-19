const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    address: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Companies", CompanySchema);