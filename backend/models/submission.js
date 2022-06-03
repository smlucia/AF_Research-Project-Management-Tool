const mongoose = require("mongoose");


const submissionSchema = new mongoose.Schema({
	title: { 
        type: String, 
        required: true 
    },
	deadline: { 
        type: Date, 
        required: true,
        trim: true
    },
	type: { 
        type: String, 
        required: true 
    },
	submitTo: { 
        type: String, 
        required: true 
    },
	submitFrom: { 
        type: String, 
        required: true 
    },
}, {timestamps: true});



module.exports = mongoose.model("submission", submissionSchema);



