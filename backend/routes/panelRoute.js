const router = require('express').Router();
const { StudentGroup } = require("../models/panelGroupRegister");
const bcrypt = require("bcrypt");

//add student group
router.post("/addPanel", async (req, res) => {
    const panelId = req.body.panelId;
    const panelName = req.body.panelName;
    const panelMembers = req.body.panelMembers;
    

    const regPanel = await StudentGroup.findOne({ panelId: req.body.groupId });
    if (regPanel)
        return res
            .status(409)
            .send({ message: "Panel has been registered already!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const newStudentGroup = new StudentGroup({
        panelId,
        panelName,
        panelMembers

    });

    newStudentGroup.save()
        .then(() => res.json('New panel group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;