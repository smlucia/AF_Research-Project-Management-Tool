const router = require("express").Router();
const { StudentResearchTopic } = require("../models/student/studentResearchTopicRegister");
const bcrypt = require("bcrypt");

router.get("/research-topics", async (req, res) => {
    const researchTopics = await StudentResearchTopic.find();
    res.json(researchTopics);
}
);

module.exports = router;