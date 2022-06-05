import axios from 'axios';

const apiURL = 'http://localhost:6005/api/';

//upload multiple marking scheme files
export const studentDocSubmissionUpload = async (data ,options) => {
    try{
        await axios.post(apiURL + 'uploadStudentSubmissionDoc', data , options);
    }catch(error){
        throw error;
    }
}

//get all multiple marking scheme files
export const getstudentDocSubmission = async (data) => {
    try{
        const {data} = await axios.get(apiURL + 'getStudentSubmissionDoc');
        return data;
    }catch(error){
        throw error;
    }
}
