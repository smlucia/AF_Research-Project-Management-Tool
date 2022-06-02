'use strict';

const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination: (req , file , cb) => {
        cb(null , 'uploads');
    },
    filename: (req , file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g,'-') + '-' + file.originalname)
    }
});

const filefilter = (req , file , cb) => {
    if(file.mimetype == 'application/msword' || file.mimetype == 'application/pdf' || file.mimetype == 'application/vnd.ms-powerpoint' || file.mimetype == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
        cb(null , true)
    }else{
        cb(new Error("Not match to the format!!"), false)
    }
}

const upload = multer({storage: storage, fileFilter: filefilter});

module.exports = {upload}

