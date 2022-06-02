import React , {useState , useEffect} from 'react';
import {multipleTemplateFilesUpload } from '../../data/admin/adminApi';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'



const TemplateUpload = (props) => {

  const[multipleFiles , setMultipleFiles] = useState('');
  const[title , setTitle] = useState('');
  const[multipleProgress , setMultipleProgress] = useState(0);
 


  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  }



  const multipleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const {loaded , total} = progressEvent;
      const percentage = Math.floor(((loaded/1000) * 100) / (total/1000));
      setMultipleProgress(percentage);
    }
  }



  const UploadMultipleFile = async () => {
    const formData = new FormData();
    formData.append('title',title );
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files',multipleFiles[i] );
      
    }
   
    await multipleTemplateFilesUpload(formData ,multipleFileOptions);
    props.getMultiple();
    
  }

    return (
        <>
        <h2 className=" font-weight-bold"
        style={{
          textAlign: 'center'
        }}> Upload Templates</h2>
        
        
        <div className=" border border-light h-100 d-inline-block w-75 p-3">
              
            
              <div className="row mt-3">
                <div className="col-6">
                  <h5><label>Title</label></h5>
                  <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title....' className='form-control form-control-lg' />
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

              </div>
              


        </>
      );
}

export default TemplateUpload;