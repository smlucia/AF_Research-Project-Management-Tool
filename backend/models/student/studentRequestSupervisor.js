const mongoose = require("mongoose");

const studentRequestSupervisorSchema = new mongoose.Schema({
	groupId: { 
        type: String, 
        required: true 
    },
	leaderEmail: { 
        type: String, 
        required: true 
    },
	supervisorType: { 
        type: String, 
        enum: ['Supervisor', 'Co-Supervisor'],
        default: 'Supervisor',
        required: true 
    },
    supervisorName: { 
        type: String, 
        required: true 
    },
    requestStatus: {
        type: Boolean,
        required: true,
        default: 0
    }
});

const StudentRequestSupervisor = mongoose.model("studentRequestSupervisor", studentRequestSupervisorSchema);

module.exports = { StudentRequestSupervisor};
