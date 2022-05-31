const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const markingSchemeMultipleFilesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object]
   
}, {timestamps: true});

module.exports = mongoose.model('MarkingschemeMultipleFiles', markingSchemeMultipleFilesSchema);