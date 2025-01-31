import React from 'react'

function EducationalPreview({resumeInfo}) {
  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
      color:resumeInfo?.themeColor
    }}>Education</h2>
    <hr style={{borderColor:resumeInfo?.themeColor}}/>
    {resumeInfo?.Education.map((Education,index)=>(
      <div key={index} className='my-5'>
          <h2 className='text-sm font-bold'
          style={{color:resumeInfo?.themeColor}}>{Education?.universityName}</h2>
          <h2 className='text-xs flex justify-between'>{Education?.degree} in {Education?.major}</h2>
          <span>  {Education?.startDate}- {Education?.endDate}</span>
          <p className='text-xs my-2'>
            {Education?.description}
          </p>
      </div>
    ))}

    </div>
  )
}

export default EducationalPreview
