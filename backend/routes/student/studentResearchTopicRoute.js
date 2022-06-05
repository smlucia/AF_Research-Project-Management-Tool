const router = require('express').Router();
const { StudentResearchTopic } = require("../../models/student/studentResearchTopicRegister");
const { StudentGroup } = require("../../models/student/studentGroupRegister");
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

    const checkGroup = await StudentGroup.findOne({ groupId: req.body.groupId });
    if (!checkGroup)
        return res
            .status(409)
            .send({ message: "Your group is not registered! Please register your group and try again!" });

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

//get all research topics
router.get("/getAllResearchTopics", async (req, res) => {
    try {
        const data = await StudentResearchTopic.find();
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

//get specific research topic 
router.get("/getResearchTopic", async (req, res) => {
    try {
        const query = {};
        if (req.query.groupId) {
            query.groupId = req.query.groupId;
        }
        const data = await StudentResearchTopic.find(query);
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(error.message);
    }

});

//get one research topic
router.get("/getOneResearchTopic/:id", async (req, res) => {
    try {
        const data = await StudentResearchTopic.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//Update by one research topic
router.put('/updateOneResearchTopic/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await StudentResearchTopic.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//Delete by one research topic
router.delete('/deleteOneResearchTopic/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await StudentResearchTopic.findByIdAndDelete(id)
        res.send(`Research topic request from ${data.groupId} has been deleted!`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;