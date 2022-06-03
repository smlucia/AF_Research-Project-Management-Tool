const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentGroupsSchema = new Schema({
    groupId: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    leaderName: {
        type: String,
        required: true
    },
    leaderEmail: {
        type: String,
        required: true
    },
    otherMembers: [
        {
            name: String,
            email: String
        }
    ],
    academicYear: {
        type: Number,
        required: true
    },
   
}, {timestamps: true});

const StudentGroup = mongoose.model("StudentGroups", studentGroupsSchema);

module.exports = {StudentGroup};