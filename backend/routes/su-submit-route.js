const router = require("express").Router();
const Submission = require("../models/submission");

const bcrypt = require("bcrypt");

router.get("/researchSubmissions", async(req, res) => {
    const StudentresearchTopics = await Submission.find();
    res.json(StudentresearchTopics);
});

// route to update the research topic
router.put("/researchSubmissions/:id", async(req, res) => {
    // update the topicRequestStatus value in the database
    const researchTopic = await Submission.findByIdAndUpdate(
        req.params.id, {
            topicRequestStatus: req.body.topicRequestStatus,
        }, { new: true }
    );

    if (!researchTopic)
        return res.status(404).send({ message: "Research Topic not found" });

    res.json(researchTopic);
});

module.exports = router;