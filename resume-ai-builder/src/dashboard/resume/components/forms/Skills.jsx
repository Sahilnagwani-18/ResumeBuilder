import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
function Skills() {
  const [skillsList,setSkillsList]=useState([{
    name:'',
    rating:0
  }]);
  const {resumeid}=useParams();

  const [loading ,setLoading]=useState(false);
   const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);

   useEffect(()=>{
       resumeInfo&&setSkillsList(resumeInfo?.Skills)
     },[])


  const handleChange=(index,name,value)=>{
       const newEntries=skillsList.slice();
       newEntries[index][name]=value;
  }

  const AddNewSkills=()=>{
    setSkillsList([...skillsList,{
        name:'',
        rating:0
    }])
  }
  const RemoveSkills=()=>{
    setSkillsList(skillsList=>skillsList.slice(0,-1));

  }

  const onSave=()=>{
    setLoading(true);
    const data={
        data:{
            Skills:skillsList.map(({id,...rest})=>rest)
        }
    }

    GlobalApi.UpdateResumeDetail(resumeid,data).then(resp=>{
        console.log(resp);
        setLoading(false);
        toast('details updated!!');
    },(error)=>{
        setLoading(false);
        toast('Internal Server Error');
    });
  }

  useEffect(()=>{
    setResumeInfo({
        ...resumeInfo,
        skills:skillsList
    })
  },[skillsList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
    <h2 className="font-bold textx-lg"> Skills</h2>
    <p>Add Your top professional key Skills</p>
    
    <div>
        {skillsList.map((item,index)=>(
            <div className='flex justify-between border rounded-lg p-3 py-2 mb-2'>
                <div>
                    <label className='text-xs'>Name</label>
                    <Input className="w-full" onChange={(e)=>handleChange(index,'name',e.target.value)} defaultValue={item.name} />
                </div>
                <Rating style={{maxWidth:120}} value={item.rating} onChange={(v)=>handleChange(index,'rating',v)} />

            </div>
        ))}
    </div>
    <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Button variant="outline" onClick={AddNewSkills} className="text-primary">+ADD More Skills</Button>
          <Button variant="outline" onClick={RemoveSkills} className="text-primary">- Remove</Button>

        </div>
       
        <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
        </Button>
      </div>

    </div>
  )
}

export default Skills
