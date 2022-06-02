const MarkingschemeSinglefile = require('../models/singlefile');
const MarkingschemeMultipleFiles = require('../models/multiplefiles');
const TemplateMultipleFiles = require('../models/multipletemplatefiles');
const path = require("path");

//single marking scheme upload
const singleFileUpload = async(req , res , next) => {
    try{
        const file = new MarkingschemeSinglefile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFomatter(req.file.size , 2) //0.00

        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');

    }catch(error){
        res.status(400).send(error.message);
    }
};


//multiple marking schemes upload
const multipleFileUpload = async(req , res, next) =>{

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
        const multipleFiles = new MarkingschemeMultipleFiles({
            title: req.body.title,
            submitTo: req.body.submitTo,
            submitFrom: req.body.submitFrom,
            files: filesArray
        });
        await multipleFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

//get all single marking schemes
const getallSingleFiles = async(req , res, next) => {
    try{
        const files = await MarkingschemeSinglefile.find();
        res.status(200).send(files);

    }catch(error){
        res.status(400).send(error.message);
    }
}

//get all multiple marking schemes
const getallMultipleFiles = async(req , res, next) => {
    try{
        const files = await MarkingschemeMultipleFiles.find();
        res.status(200).send(files);

    }catch(error){
        res.status(400).send(error.message);
    }
}


//multiple template files upload
const multipleTemplateFileUpload = async(req , res, next) =>{

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
        const multipleTemplateFiles = new TemplateMultipleFiles({
            title: req.body.title,
            files: filesArray
        });
        await multipleTemplateFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

//get all multiple marking schemes
const getallTemplateMultipleFiles = async(req , res, next) => {
    try{
        const files = await TemplateMultipleFiles.find();
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


// Router.get('/download/:id', async (req, res) => {
//     try {
//       const file = await File.findById(req.params.id);
//       res.set({
//         'Content-Type': file.file_mimetype
//       });
//       res.sendFile(path.join(__dirname, '..', file.file_path));
//     } catch (error) {
//       res.status(400).send('Error while downloading file. Try again later.');
//     }
//   });


module.exports = {
    singleFileUpload,
    multipleFileUpload,
    getallSingleFiles,
    getallMultipleFiles,
    multipleTemplateFileUpload,
    getallTemplateMultipleFiles,
    singleMarkingSchemeDownload
}