const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let CompanySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
})

const Comp = module.exports = mongoose.model('Company', CompanySchema);

module.exports.getCompanyById = function (id, callback) {
    const query = ({_id: id});
    Comp.find(query, callback);
};

module.exports.getCompanyByCompanyName = function (name, callback) {
    const query = ({name: name});
    Comp.findOne(query, callback);
};

module.exports.addCompany = function (newCompany, callback) {
    newCompany.save(callback);
};

module.exports.removeCompany = function (id, callback) {
    const query = ({_id: id});
    Comp.deleteOne(query, callback);
}