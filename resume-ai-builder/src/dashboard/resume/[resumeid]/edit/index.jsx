import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import GlobalApi from './../../../../../service/GlobalApi';

function EditResume() {
    const {resumeid}=useParams();
    const [resumeInfo,setResumeInfo]=useState();
    useEffect(() => {
      GetResumeInfo(); // Properly call the function
  }, []);
    const GetResumeInfo=()=>{
        GlobalApi.getResumeById(resumeid).then(resp=>{
          console.log(resp.data.data);
          console.log("API Response:", JSON.stringify(resp.data, null, 2));
          setResumeInfo(resp.data.data);
          
        })
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
       {/*  Form Section */}
       <FormSection/>

       {/*  Preview Section */}
       <ResumePreview/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume
