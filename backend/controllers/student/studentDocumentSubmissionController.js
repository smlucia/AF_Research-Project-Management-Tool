const StudentDocumentSubmission = require("../../models/student/studentDocumentSubmission");
const path = require("path");

//student document upload
const studentDocumentSubmissionUpload = async(req , res, next) =>{

    try{
        let filesArray = [];
        req.files.forEach(element => {
            const file ={
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFomatter(element.size , 2) //0.00
            }
            filesArray.push(file);
            
        });
        const studentDocuments = new StudentDocumentSubmission({
            topic: req.body.topic,
            submitTo: req.body.submitTo,
            grade: req.body.grade,
            feedback: req.body.feedback,
            files: filesArray
        });
        await studentDocuments.save();
        res.status(201).send('Your Document Submitted Successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

//get all uploaded submission documents
const getallStudentSubmissionDocuments = async(req , res, next) => {
    try{
        const files = await StudentDocumentSubmission.find();
        res.status(200).send(files);

    }catch(error){
        res.status(400).send(error.message);
    }
}

const fileSizeFomatter = (bytes , decimal) => {
    if(bytes == 0){
        return '0 Bytes';
    }
    const dm  = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000), index).toFixed(dm)) + ' ' + sizes[index];

}

const singleMarkingSchemeDownload = async (req , res) => {
    try{
        const file = await MarkingschemeSinglefile.findById(req.params._id);
        res.set({
            'Content-Type': file.file.mimetype
          });
          res.status(200).sendFile(path.join(__dirname, '..', file.file.path));
       //res.status(200).send(file);

    }catch(error){
        //res.status(400).send(error.message);
        res.status(400).send('Error while downloading file. Try again later.');
    }

}

module.exports = {
    studentDocumentSubmissionUpload,
    getallStudentSubmissionDocuments,
    singleMarkingSchemeDownload
}