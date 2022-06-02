import React , {useState , useEffect} from 'react';
import {singleFileUpload, multipleFilesUpload } from '../../data/admin/adminApi';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'



const MarkingSchemeUpload = (props) => {

  const[singleFile , setSingleFile] = useState('');
  const[multipleFiles , setMultipleFiles] = useState('');
  const[title , setTitle] = useState('');
  const[submitTo , setSubmitTo] = useState('');
  const[submitFrom , setSubmitFrom] = useState('');
  const[singleProgress , setSingleProgress] = useState(0);
  const[multipleProgress , setMultipleProgress] = useState(0);
 
  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  }

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  }

  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const {loaded , total} = progressEvent;
      const percentage = Math.floor(((loaded/1000) * 100) / (total/1000));
      setSingleProgress(percentage);
    }
  }

  const multipleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const {loaded , total} = progressEvent;
      const percentage = Math.floor(((loaded/1000) * 100) / (total/1000));
      setMultipleProgress(percentage);
    }
  }

  const UploadSingleFile = async () => {
      const formData = new FormData();
      formData.append('file',singleFile );
      await singleFileUpload(formData, singleFileOptions);
      props.getSingle();
  }

  const UploadMultipleFile = async () => {
    const formData = new FormData();
    formData.append('title',title );
    formData.append('submitTo',submitTo );
    formData.append('submitFrom',submitFrom );
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files',multipleFiles[i] );
      
    }
   
    await multipleFilesUpload(formData ,multipleFileOptions);
    props.getMultiple();

   
    
  }
  const resetinputs = async () => {
    props.reset();
      
    }

 


    return (
        <>
        <h2 className=" font-weight-bold"
        style={{
          textAlign: 'center'
        }}> Create Marking Schemes</h2>
        
        
        <div className=" border border-light h-100 d-inline-block w-75 p-3">
              <div className="row mt-3">
                <div className="col-6">
                  <div className='form-group'>
                  <h5><label>Select Single File</label></h5>
                  <input type="file" className='form-control form-control-lg' onChange={(e) => SingleFileChange(e)}/>
                  </div>
                  </div>  
              </div>
              <div className="row mt-3">
                <div className="col-6">
                    <button type='button' className='btn btn-danger' onClick={() => UploadSingleFile()}>Upload</button>
                  </div>
                  <div className="col-1">
                    <CircularProgressbar
                    value={singleProgress}
                    text={`${singleProgress}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'butt',
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',


                    })} />
                  </div>
              </div>
             

            
              <div className="row mt-3 row-cols-2 gy-4">
                <div className="col-6">
                  <h5><label>Title</label></h5>
                  <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title....' className='form-control form-control-lg' />
                </div>
                <div className="col-6">
                  <h5><label>Submit To</label></h5>
                  <select onChange={(e) => setSubmitTo(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">            
                  <option hidden >Select user role</option>
                      <option value="student">Student</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="coSupervisor">Co-Supervisor</option>
                      <option value="panelmember">panelmember</option>
                      
                  </select>
                  {/* <input type="text" onChange={(e) => setSubmitTo(e.target.value)} placeholder='Enter user role..' className='form-control form-control-lg' /> */}
                </div>
                <div className="col-6">
                  <h5><label>Submit From</label></h5>
                  <select onChange={(e) => setSubmitFrom(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">            
                  <option hidden >Select user role</option>
                      <option value="student">Student</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="coSupervisor">Co-Supervisor</option>
                      <option value="panelmember">panelmember</option>
                      
                  </select>
                  {/* <input type="text" onChange={(e) => setSubmitFrom(e.target.value)} placeholder='Enter user role..' className='form-control form-control-lg' /> */}
                </div>
                <div className="col-6">
                    <div className='form-group'>
                    <h5><label >Select Multiple Files</label></h5>
                      <input type="file" className='form-control form-control-lg' multiple onChange={(e) => MultipleFileChange(e)}/>
                    </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                    <button type='button' className='btn btn-danger' onClick={() => UploadMultipleFile()}>Upload</button>
                  </div>
                  <div className="col-1">
                    <CircularProgressbar
                    value={multipleProgress}
                    text={`${multipleProgress}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'butt',
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',


                    })} />
                  </div>
              </div>

              <div className="row">
                <div className="col-6">
                    <button type='button' className='btn btn-danger' onClick={() => resetinputs()}>Reset Inputs</button>
                  </div>
              </div>

              </div>
              


        </>
      );
}

export default MarkingSchemeUpload;