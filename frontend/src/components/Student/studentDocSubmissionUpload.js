import React, { useState, useEffect } from 'react';
import { studentDocSubmissionUpload } from '../../data/student/studentApi';
import "../../styles/student/studentReqSupervisor.css";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const StudentDocSubmissionUpload = (props) => {

    const [multipleFiles, setMultipleFiles] = useState('');
    const [topic, setTopic] = useState('');
    const [submitTo, setSubmitTo] = useState('');
    const [multipleProgress, setMultipleProgress] = useState(0);

    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
    }

    const multipleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }

    const UploadMultipleFile = async () => {
        const formData = new FormData();
        formData.append('topic', topic);
        formData.append('submitTo', submitTo);
        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);

        }

        await studentDocSubmissionUpload(formData, multipleFileOptions);
        props.getMultiple();



    }
    const resetinputs = async () => {
        props.reset();

    }

    const paperStyle = { marginLeft: 30, width: 1000, marginTop: -80 }

    return (
        <>
            <Paper elevation={10} style={paperStyle}>
                <Card sx={{ display: 'flex', marginTop: 15 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <h2 className=" font-weight-bold"
                                style={{
                                    textAlign: 'center'
                                }}> DOCUMENT SUBMISSIONS </h2>
                            {/* <div className=""> */}

                                {/* <div className=""> */}
                                    {/* <div className="col-6"> */}
                                        <h5><label style={{textAlign: 'center'}}>Title</label></h5>
                                        <input type="text" style={{width:304}} onChange={(e) => setTopic(e.target.value)} placeholder='Submission Topic' className='form-control form-control-lg' />
                                    {/* </div> */}

                                    {/* <div className="col-6"> */}
                                        <h5><label>Submit To</label></h5>
                                        <select style={{width:304}} onChange={(e) => setSubmitTo(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                            <option hidden >Select user role</option>
                                            <option value="supervisor">Supervisor</option>
                                            <option value="coSupervisor">Co-Supervisor</option>
                                            <option value="panelmember">panelmember</option>

                                        </select>
                                        {/* <input type="text" onChange={(e) => setSubmitTo(e.target.value)} placeholder='Enter user role..' className='form-control form-control-lg' /> */}
                                    {/* </div> */}

                                    {/* <div className="col-6"> */}
                                        {/* <div className='form-group'> */}
                                            <h5><label >Select Your Submission Document</label></h5>
                                            <input style={{width:304}} type="file" className='form-control form-control-lg' multiple onChange={(e) => MultipleFileChange(e)} />
                                        {/* </div> */}
                                    {/* </div> */}
                                {/* </div> */}

                                <div className="row mt-3">
                                    {/* <div className="col-6"> */}
                                        <button style={{width:200, marginLeft:55, backgroundColor:'darkblue', border:0}} type='button' className='btn btn-danger' onClick={() => UploadMultipleFile()}>UPLOAD</button>
                                    {/* </div> */}
                                    <div className="col-1">
                                        <CircularProgressbar
                                            value={multipleProgress}
                                            text={`${multipleProgress}%`}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                textSize: '40px',
                                                pathTransitionDuration: 0.5,
                                                pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                                strokeLinecap: 'butt'
                                            })} />
                                    </div>
                                </div>

                                {/* <div className="row"> */}
                                    {/* <div className="col-6"> */}
                                        <button style={{width:200, marginTop:10, marginLeft:43}} type='button' className='btn btn-danger' onClick={() => resetinputs()}>RESET INPUTS</button>
                                    {/* </div> */}
                                {/* </div> */}

                            {/* </div> */}
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 500 }}
                        marginLeft="0"
                        image="https://st2.depositphotos.com/1763191/12379/v/950/depositphotos_123793510-stock-illustration-lots-of-children-reading-and.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
            </Paper>
        </>
    );
}

export default StudentDocSubmissionUpload;