const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentDocumentSubmissionSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    submitTo: {
        type: String,
        required: true
    },
    files: [Object]
   
}, {timestamps: true});

module.exports = mongoose.model('studentDocumentSubmission', studentDocumentSubmissionSchema);