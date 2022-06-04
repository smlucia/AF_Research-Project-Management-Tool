const router = require("express").Router();
const { StudentResearchTopic } = require("../models/student/studentResearchTopicRegister");
const {studentDocumentSubmission} = require("../models/student/studentdocumentsubmissions");
const bcrypt = require("bcrypt");

router.get("/research-topics", async (req, res) => {
    const researchTopics = await StudentResearchTopic.find();
    res.json(researchTopics);
}
);

// route to update the research topic
router.put("/research-topics/:id", async (req, res) => {
    // update the topicRequestStatus value in the database
    const researchTopic = await StudentResearchTopic.findByIdAndUpdate(
        req.params.id,
        {
            topicRequestStatus: req.body.topicRequestStatus,
        },
        { new: true }
    );

    if (!researchTopic)
        return res.status(404).send({ message: "Research Topic not found" });

    res.json(researchTopic);
});

// route to get all the submitted documents
router.get("/submitted-documents", async (req, res) => {
    const submittedDocuments = await studentDocumentSubmission.find();
    res.json(submittedDocuments);
});

// route to update the submitted documents
router.put("/submitted-documents/:id", async (req, res) => {
    // update the grade value in the database
    const submittedDocument = await studentDocumentSubmission.findByIdAndUpdate(
        req.params.id,
        {
            grade: req.body.grade,
        },
        { new: true }
    );

    if (!submittedDocument)
        return res.status(404).send({ message: "Submitted Document not found" });
        
    res.json(submittedDocument);
});

module.exports = router;