import React , {useState , useEffect} from 'react';
import { getMultipleTemplateFiles} from '../../data/admin/adminApi';
import MarkingSchemeUpload from './TemplateUpload';
import Navbar from './PageNavBar';



const TemplatePage = () => {

 
  const[multiplefiles , setmultiplefiles] = useState([]);

 


  const getMultipleFilesList = async () => {
    try{
      const filelist = await getMultipleTemplateFiles();
      setmultiplefiles(filelist);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    
    getMultipleFilesList();
  } , []);

    return (
        <>
            <Navbar / >
            <div className='main' style={{
               marginLeft: "170px", /* Same as the width of the sidebar */
               padding: "20px 10px"
            }}>
            <MarkingSchemeUpload getMultiple= {() => getMultipleFilesList()}/>
       


              <div className='container-fluid mt-5'>
                <div className='row'>
                 
                  <div className='col-6'>
                    <h4 className='text-success font-weight-bold'>Multiple Files List</h4>
                    {multiplefiles.map((element , index) => 
                              <div key={element._id}>
                                  <h5 className='text-danger font-weight-bold'>{element.title}</h5>
                                  <div className='row'>
                                     {element.files.map((file , index) => 
                                        <div className='col-6'>
                                            <div className='card mb-2 border-0 p-0'>
                               
                                            <div class="embed-responsive ">
                                                <iframe  className="doc" src={`https://docs.google.com/gview?url=${`http://localhost:6005/${file.filePath }`}%20embedded=true`} width="200"  height="200"></iframe>
                                                
                                            </div>
                                           
                                                {/* <iframe class="embed-responsive-item" src={`http://localhost:5005/${file.filePath }`} width="200"  height="200"></iframe> */}
                                            
                                                
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

          



        </>
      );
}

export default TemplatePage;