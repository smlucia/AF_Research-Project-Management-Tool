const MarkingschemeSinglefile = require('../models/singlefile');
const MarkingschemeMultipleFiles = require('../models/multiplefiles');


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


//to upload multiple files
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
            files: filesArray
        });
        await multipleFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getallSingleFiles = async(req , res, next) => {
    try{
        const files = await MarkingschemeSinglefile.find();
        res.status(200).send(files);

    }catch(error){
        res.status(400).send(error.message);
    }
}

const getallMultipleFiles = async(req , res, next) => {
    try{
        const files = await MarkingschemeMultipleFiles.find();
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

module.exports = {
    singleFileUpload,
    multipleFileUpload,
    getallSingleFiles,
    getallMultipleFiles
}