const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const panelSchema = new Schema({
    panelId: {
        type: String,
        required: true
    },
    panelName: {
        type: String,
        required: true
    },
    panelMembers: [
        {
            name: String,
            email: String
        }
    ],
   
}, {timestamps: true});

const panel = mongoose.model("panelMembersGroups", panelSchema);

module.exports = {panel};