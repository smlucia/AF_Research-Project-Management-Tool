
const router = require('express').Router();
const { StudentGroup } = require("../../models/student/studentGroupRegister");
const bcrypt = require("bcrypt");

//add student group
router.post("/", async (req, res) => {
    const groupId = req.body.groupId;
    const groupName = req.body.groupName;
    const leaderName = req.body.leaderName;
    const leaderEmail = req.body.leaderEmail;
    const otherMembers = req.body.otherMembers;
  

    const regStudentGroup = await StudentGroup.findOne({ groupId: req.body.groupId });
    if (regStudentGroup)
        return res
            .status(409)
            .send({ message: "Your group has been registered already!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const newStudentGroup = new StudentGroup({
        groupId,
        groupName,
        leaderName,
        leaderEmail,
        otherMembers,
    
    });

    newStudentGroup.save()
        .then(() => res.json('New student group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/getAllStudentGroups", async (req, res) => {

    try{

        const data = await StudentGroup.find();

        res.status(200).send(data);



    }catch(error){

        res.status(400).send(error.message);

    }

});

router.put('/updateStudentGroups/:groupId', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await StudentGroup.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;