
const router = require('express').Router();
const { StudentGroup } = require("../models/student/studentGroupRegister");

//add student group
router.route('/add').post((req, res) => {
    const groupName = req.body.groupName;
    const leaderName = req.body.leaderName;
    const membersArray = req.body.members;

    const newStudentGroup = new StudentGroup({
        groupName,
        leaderName,
        membersArray
    });

    newStudentGroup.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;