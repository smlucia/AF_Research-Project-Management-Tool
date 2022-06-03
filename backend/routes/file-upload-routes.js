'use strict';

const express = require("express");
const {upload} = require("../helpers/filehelper");
const {singleFileUpload , multipleFileUpload, getallSingleFiles , getallMultipleFiles , multipleTemplateFileUpload, getallTemplateMultipleFiles , singleMarkingSchemeDownload} = require("../controllers/fileuploaderController");
const router = express.Router();

//upload single file
router.post('/singleFile', upload.single('file'),singleFileUpload);
//upload multiple files
router.post('/multipleFiles', upload.array('files'),multipleFileUpload);
//get all single files
router.get('/getSingleFiles',getallSingleFiles);
//get all multiple files
router.get('/getMultipleFiles',getallMultipleFiles);
//upload multiple files
router.post('/multipleTempFiles', upload.array('files'),multipleTemplateFileUpload);
//get all multiple files
router.get('/getMultipleTempFiles',getallTemplateMultipleFiles);
//download all multiple files
router.get('/downloadSingleMarkingFiles/:_id',singleMarkingSchemeDownload);


module.exports = {
    routes : router
}

