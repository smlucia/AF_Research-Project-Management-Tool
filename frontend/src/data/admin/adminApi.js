import axios from 'axios';

const apiURL = 'http://localhost:5005/api/';

//upload single marking scheme files
export const singleFileUpload = async (data , options) => {
    try{
        await axios.post(apiURL + 'singleFile', data , options);
    }catch(error){
        throw error;
    }
}

//get all single marking scheme files
export const getSingleFiles = async (data) => {
    try{
        const {data} = await axios.get(apiURL + 'getSingleFiles');
        return data;
    }catch(error){
        throw error;
    }
}

//upload multiple marking scheme files
export const multipleFilesUpload = async (data ,options) => {
    try{
        await axios.post(apiURL + 'multipleFiles', data , options);
    }catch(error){
        throw error;
    }
}

//get all multiple marking scheme files
export const getMultipleFiles = async (data) => {
    try{
        const {data} = await axios.get(apiURL + 'getMultipleFiles');
        return data;
    }catch(error){
        throw error;
    }
}

//upload multiple template files
export const multipleTemplateFilesUpload = async (data ,options) => {
    try{
        await axios.post(apiURL + 'multipleTempFiles', data , options);
    }catch(error){
        throw error;
    }
}

//get all multiple marking scheme files
export const getMultipleTemplateFiles = async (data) => {
    try{
        const {data} = await axios.get(apiURL + 'getMultipleTempFiles');
        return data;
    }catch(error){
        throw error;
    }
}