const router = require('express').Router();
const { panel , validatePanel } = require("../models/panelGroupRegister");
const bcrypt = require("bcrypt");

//add student group
router.post("/addPanel", async (req, res) => {
    const panelId = req.body.panelId;
    const panelName = req.body.panelName;
    const panelMembers = req.body.panelMembers;
    const { error } = validatePanel(req.body);
  if (error)
    //   400 Bad request
    return res.status(400).send(error.details[0].message);

    const newPanel = new panel({
        panelId,
        panelName,
        panelMembers
        
    });

    newPanel.save()
        .then(() => res.json('New panel created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/getAllPanels", async (req, res) => {
    try{
        const data = await panel.find();
        res.status(200).send(data);
    }catch(error){
      res.status(400).send(error.message);
    }

});

module.exports = router;