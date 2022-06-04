const router = require("express").Router();
const { StudentResearchTopic } = require("../models/student/studentResearchTopicRegister");

const bcrypt = require("bcrypt");

router.get("/topicSubmissions", async(req, res) => {
    const researchTopics = await StudentResearchTopic.find();
    res.json(researchTopics);
});

// route to update the research topic
router.put("/topicSubmissions/:id", async(req, res) => {
    // update the topicRequestStatus value in the database
    const researchTopic = await StudentResearchTopic.findByIdAndUpdate(
        req.params.id, {
            topicRequestStatus: req.body.topicRequestStatus,
        }, { new: true }
    );

    if (!researchTopic)
        return res.status(404).send({ message: "Research Topic not found" });

    res.json(researchTopic);
});

module.exports = router;