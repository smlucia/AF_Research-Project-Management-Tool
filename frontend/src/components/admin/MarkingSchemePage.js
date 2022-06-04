import React , {useState , useEffect} from 'react';
import {  getMultipleFiles} from '../../data/admin/adminApi';
import MarkingSchemeUpload from './MarkingSchemeUpload';
//import Navbar from './PageNavBar';
import { useNavigate} from "react-router-dom";



const MarkingSchemePage = () => {

 
  //const[singleFiles , setSingleFiles] = useState([]);
  const[multiplefiles , setmultiplefiles] = useState([]);

 
  // const getSingleFilesList = async () => {
  //   try{
  //     const filelist = await getSingleFiles();
  //     setSingleFiles(filelist);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  const getMultipleFilesList = async () => {
    try{
      const filelist = await getMultipleFiles();
      setmultiplefiles(filelist);
    }catch(error){
      console.log(error);
    }
  }

  const restInputs =  () => {
    setmultiplefiles([]);
  }

  const navigate = useNavigate();

 const navigateToAddSub = () => {
    // 👇️ navigate to /contacts
    navigate('/adhome');
  };
  

  useEffect(() => {
    //getSingleFilesList();
    getMultipleFilesList();
  } , []);

    return (
        <>
        <div style={{
            backgroundImage: 
        "url('https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg')",
            height: "auto",
            position: "absolute",
            left: "0",
            width: "100%",
            overflow: "hidden"
            
        }}> 
          <div style={{
    
            margin:"80px 100px",
            
            
        }}>
            <button  className="btn btn-primary"
                    style={{
                        color:"white",
                        fontSize: "20px",
                        padding: "6px 10px",
                        //backgroundColor: "#0074B7",
                        
                    }}
                    onClick={navigateToAddSub}> Back to Home</button>
            
            <MarkingSchemeUpload  getMultiple= {() => getMultipleFilesList()} reset= {() => restInputs()}/>
       


              <div className='container-fluid mt-5'>
                <div className='row'>
                  {/* <div className='col-6'>
                      <h4 className='text-success font-weight-bold'>Single Files List</h4>
                      <div className='row'>
                            {singleFiles.map((file , index) => 
                              <div className='col-6'>
                                <div className='card mb-2 border-0 p-0'>
                               
                                {/* <div class="embed-responsive">
                                  <iframe class="embed-responsive-item" src={`http://localhost:5005/${file.filePath }`} width="200"  height="200"></iframe>
                                </div> */}

                            {/* <object data={`http://localhost:6005/${file.filePath }`} type="application/pdf" width="200" height="200"/>
                                  
                                </div>
                              </div>
                            )}
                      </div>
                  </div> */} 
                  <div className='col-6'>
                    <h4 className='text-success font-weight-bold'>Multiple Files List</h4>
                    {multiplefiles.map((element , index) => 
                              <div key={element._id}>
                                  <h5 className='text-danger font-weight-bold'>{element.title}</h5>
                                  
                                  <div className='row'>
                                     {element.files.map((file , index) => 
                                        <div className='col-6'>
                                            <div className='card mb-2 border-0 p-0'>
                               
                                            {/* <div class="embed-responsive ">
                                                <iframe class="embed-responsive-item" src={`http://localhost:5005/${file.filePath }`} width="200"  height="200"></iframe>
                                            </div> */}
                                           
                                                <iframe class="embed-responsive-item" src={`http://localhost:6005/${file.filePath }`} width="200"  height="200"></iframe>
                                            
                                                
                                            </div>
                                            
                                        </div>
                                        )}
                                    </div>
                                </div>  
                     )}
                       
                  </div>

                </div>

              </div>
        
              </div>  

              </div>

         

        </>
      );
}

export default MarkingSchemePage;