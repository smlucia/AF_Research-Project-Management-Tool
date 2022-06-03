const StudentGroupRegister = require("../models/student/studentGroupRegister");

//add student group
const registerStudentGroup = async(req , res, next) =>{
    try{
        let studentGroupArray = [];
        req.members.forEach(element => {
            const member ={
                name: element.name,
                email: element.email,
            }
            studentGroupArray.push(member);
            
        });
        const groupMembers = new StudentGroupRegister({
            groupName: req.body.groupName,
            leaderName: req.body.leaderName,
            members: studentGroupArray
        });
        await groupMembers.save();
        res.status(201).send('Group created successfully!');
    }catch(error){
        res.status(400).send(error.message);
    }
}

//get all student groups
// const getStudentGroups = async(req , res, next) => {
//     try{
//         const members = await StudentGroupRegister.find();
//         res.status(200).send(members);

//     }catch(error){
//         res.status(400).send(error.message);
//     }
// }

module.exports = {
    registerStudentGroup,
    //getStudentGroups
}