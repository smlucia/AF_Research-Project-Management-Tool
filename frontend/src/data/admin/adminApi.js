import axios from 'axios';

const apiURL = 'http://localhost:5005/api/';

export const singleFileUpload = async (data , options) => {
    try{
        await axios.post(apiURL + 'singleFile', data , options);
    }catch(error){
        throw error;
    }
}

export const getSingleFiles = async (data) => {
    try{
        const {data} = await axios.get(apiURL + 'getSingleFiles');
        return data;
    }catch(error){
        throw error;
    }
}

export const multipleFilesUpload = async (data ,options) => {
    try{
        await axios.post(apiURL + 'multipleFiles', data , options);
    }catch(error){
        throw error;
    }
}

export const getMultipleFiles = async (data) => {
    try{
        const {data} = await axios.get(apiURL + 'getMultipleFiles');
        return data;
    }catch(error){
        throw error;
    }
}