const router = require('express').Router();
const { StudentResearchTopic } = require("../../models/student/studentResearchTopicRegister");
const bcrypt = require("bcrypt");

//register research topic
router.post("/", async (req, res) => {
    
    const groupId = req.body.groupId;
    const researchTopic = req.body.researchTopic;
    const topicRequestStatus = req.body.topicRequestStatus;

    const topic = await StudentResearchTopic.findOne({ groupId: req.body.groupId });
    if (topic)
        return res
            .status(409)
            .send({ message: "Your group already registered the research topic" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const newStudentResearchTopic = new StudentResearchTopic({
        groupId,
        researchTopic,
        topicRequestStatus
    });

    newStudentResearchTopic.save()
        .then(() => res.json('Your research topic has been registered successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;