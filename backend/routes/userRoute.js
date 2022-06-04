const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
//const {getAllUsers} = require("../controllers/userController");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//get all users
router.get("/getAllUsers", async (req, res) => {
	try{
        const data = await User.find();
        res.status(200).send(data);

    }catch(error){
        res.status(400).send(error.message);
    }
});


//get specific user type
router.get("/getUsers", async (req, res) => {
	try{
		const query ={};
		if(req.query.userType){
			query.userType=req.query.userType;
		}
        const data = await User.find(query);
        res.status(200).send(data);

    }catch(error){
        res.status(400).send(error.message);
    }

});


//get one user
router.get("/getOneUser/:id", async (req, res) => {
	try{
        const data = await User.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
	
});

//Update by one user
router.put('/updateOneUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//Delete by one user
router.delete('/deleteOneUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.firstName} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;
