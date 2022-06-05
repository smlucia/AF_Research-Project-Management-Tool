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
    grade: {
        type: String,
        required: true,
        default: 'Not graded'
    },
    feedback: {
        type: String,
        required: true,
        default: 'Pending'
    },
    files: [Object]
   
}, {timestamps: true});

module.exports = mongoose.model('studentdocumentSubmission', studentDocumentSubmissionSchema);