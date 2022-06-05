const router = require('express').Router();
const { StudentRequestSupervisor } = require("../../models/student/studentRequestSupervisor");
const { StudentGroup } = require("../../models/student/studentGroupRegister");
const bcrypt = require("bcrypt");

//request supervisor
router.post("/", async (req, res) => {
    const groupId = req.body.groupId;
    const leaderEmail = req.body.leaderEmail;
    const supervisorType = req.body.supervisorType;
    const supervisorName = req.body.supervisorName;
    const requestStatus = req.body.requestStatus;

    const reqSupervisor = await StudentRequestSupervisor.findOne({ groupId: req.body.groupId });
    if (reqSupervisor)
        return res
            .status(409)
            .send({ message: "Your group already requested a supervisor!" });

    const checkGroup = await StudentGroup.findOne({ groupId: req.body.groupId });
    if (!checkGroup)
        return res
            .status(409)
            .send({ message: "Your group is not registered! Please register your group and try again!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const newStudentRequestSupervisor = new StudentRequestSupervisor({
        groupId,
        leaderEmail,
        supervisorType,
        supervisorName,
        requestStatus
    });

    newStudentRequestSupervisor.save()
        .then(() => res.json('Your request has been sent'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;