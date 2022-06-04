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
    panelId: {
        type: String,
        required: true,
        minLength: 3, 
        maxLength: 5
    }
    
   
}, {timestamps: true});

const StudentGroup = mongoose.model("StudentGroups", studentGroupsSchema);

module.exports = {StudentGroup};