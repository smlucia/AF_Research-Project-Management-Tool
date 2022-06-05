const mongoose = require('mongoose');
const Joi = require(`joi`);
const Schema = mongoose.Schema;

const panelSchema = new Schema({
    panelId: {
        type: String,
        required: true,
        minLength: 3, 
        maxLength: 5
    },
    panelName: {
        type: String,
        required: true,
        
    },
    panelMembers: [
        {
            name: String,
            email:String    
        }
    ],
   
}, {timestamps: true});

const validatePanel =(body) => {
    const schema = Joi.object({
      panelId: Joi.string().min(3).required(),
      panelName: Joi.string().required(),
      panelMembers: Joi.required(),
    });
    return schema.validate(body);
  }

const panel = mongoose.model("panelMembersGroups", panelSchema);

module.exports = {panel , validatePanel };