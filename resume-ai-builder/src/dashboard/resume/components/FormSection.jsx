import React, { useState } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import PersonalDetails from './forms/PersonalDetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Summery from './forms/Summery'
import Expeience from './forms/Expeience'
import Education from './forms/Education'
import Skills from './forms/Skills'
import { Link, Navigate, useParams } from 'react-router-dom'
import ViewResume from '@/my-resume/[resumeid]/view'
import ThemeColor from './ThemeColor'

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(false);
  const {resumeid}=useParams();
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <Link to={'/dashboard'}>
          <Button><Home/></Button>
          </Link>
          <ThemeColor/>
        </div>
        <div className='flex gap-2'>
          {activeFormIndex>1 && <Button size="sm"
             onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}

          <Button disabled={!enableNext} className="flex gap-2" size="sm"
          onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/> </Button>
        </div>
      </div>
      {/* Personal Details Form  */}
      {activeFormIndex===1?<PersonalDetails enableNext={(v)=>setEnableNext(v)}/>:
       activeFormIndex===2?<Summery enableNext={(v)=>setEnableNext(v)}/>
       :activeFormIndex===3?<Expeience  enableNext={(v)=>setEnableNext(v)}/>
       :activeFormIndex===4?<Education enableNext={(v)=>setEnableNext(v)}/>:
       activeFormIndex===5?<Skills/>:
       activeFormIndex===6?<Navigate to={'/my-resume/'+resumeid+'/view'}/>:null }
      
      {/* Summery */}
      {/* Experience */}
      {/* Educational Details */}
      {/* skills */}
    </div>
  )
}

export default FormSection
