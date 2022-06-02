const router = require('express').Router();
const { StudentRequestSupervisor } = require("../../models/student/studentRequestSupervisor");
const bcrypt = require("bcrypt");

//request supervisor
router.post("/", async (req, res) => {
    const groupId = req.body.groupId;
    const academicYear = req.body.academicYear;
    const leaderEmail = req.body.leaderEmail;
    const supervisorType = req.body.supervisorType;
    const supervisorName = req.body.supervisorName;
    const requestStatus = req.body.requestStatus;

    const reqSupervisor = await StudentRequestSupervisor.findOne({ groupId: req.body.groupId });
    if (reqSupervisor)
        return res
            .status(409)
            .send({ message: "Your group already requested a supervisor!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const newStudentRequestSupervisor = new StudentRequestSupervisor({
        groupId,
        academicYear,
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