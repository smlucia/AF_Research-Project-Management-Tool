const router = require("express").Router();
const subModel = require("../models/submission");

router.post('/addSub', async (req, res) => {
        const data = new subModel({
            title: req.body.title,
            deadline: req.body.deadline,
            type: req.body.type,
            submitTo: req.body.submitTo,
            submitFrom: req.body.submitFrom
        })
    
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }

});

//Get all Method
router.get('/getAllSub', async (req, res) => {
    try{
        const data = await subModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOneSub/:id', async (req, res) => {
    try{
        const data = await subModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.put('/updateSub/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await subModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/deleteSub/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await subModel.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;