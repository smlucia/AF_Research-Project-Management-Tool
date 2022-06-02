const mongoose = require("mongoose");

const studentResearchTopicRegisterSchema = new mongoose.Schema({
	groupId: { 
        type: String, 
        required: true 
    },
	leaderEmail: { 
        type: String, 
        required: true 
    },
	researchTopic: { 
        type: String, 
        required: true 
    },
	academicYear: { 
        type: Number, 
        required: true 
    },
    topicRequestStatus: {
        type: Boolean,
        required: true,
        default: 0
    }
});

const StudentResearchTopic = mongoose.model("studentResearchTopic", studentResearchTopicRegisterSchema);

module.exports = { StudentResearchTopic};
