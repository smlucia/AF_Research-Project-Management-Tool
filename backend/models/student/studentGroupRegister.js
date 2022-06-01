const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentGroupsSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    leaderName: {
        type: String,
        required: true
    },
    members: [Object]
   
}, {timestamps: true});

const StudentGroup = mongoose.model("StudentGroups", studentGroupsSchema);

module.exports = {StudentGroup};