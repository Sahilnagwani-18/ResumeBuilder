import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
      style={{
        color:resumeInfo?.themeColor
      }}>Professional Experience</h2>
      <hr style={{borderColor:resumeInfo?.themeColor}}/>

      {resumeInfo?.Experience?.map((Experience,index)=>(
         <div key={index} className='my-5'>
            <h2 className='text-sm font-bold' style={{color:resumeInfo?.themeColor}}>{Experience?.title}</h2>
            <h2 className='text-xs flex justify-between'>{Experience?.companyName}
                ,{Experience?.city},
                 {Experience?.state}
                 <span>{Experience?.startDate} To {Experience?.currentlyWorking?'present':Experience.endDate}</span> 
            </h2>
            {/* <p className='text-xs my-2'>
                {experience?.workSummery}
            </p> */}
            <div dangerouslySetInnerHTML={{__html:Experience?.workSummery}}>

            </div>

         </div>
      ))}
    </div>
  )
}

export default ExperiencePreview
