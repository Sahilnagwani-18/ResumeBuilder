// import React, { useEffect, useState } from 'react'
// import AddResume from './components/AddResume';
// import { useUser } from '@clerk/clerk-react';
// import GlobalApi from "./../../service/GlobalApi"
// import ResumeCardItem from './components/ResumeCardItem';


// function Dashboard() {
//   const {user}=useUser();
  
//   const [resumeList,setResumeList]=useState([]);

//   useEffect(()=>{
//     GetResumeList()
//    },[user]);

//   //  used to get users resume 

//    const GetResumeList=()=>{
//     GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp=>{
//       console.log(resp.data.data);
//       setResumeList(resp.data.data);
//     })
//    };
   

//   return (
//     <div className='p-10 md:px-20 lg:px-32'>
//       <h2 className='font-bold text-3xl'>My Resume</h2>
//       <p>Start Creating AI resume to your Job role</p>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
//       mt-10 gap-5'>
//         <AddResume/>
//         {
//           resumeList.length > 0?  resumeList.map((resume, index) => (
//             <ResumeCardItem resume={resume} key={index} refreshData={GetResumeList} />
//           )):[1,2,3,4].map((item,index)=>(
//             <div className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>

//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const { user } = useUser();
  
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    GetResumeList();
  }, [user]);

  // Used to get user's resume list
  const GetResumeList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp => {
      console.log(resp.data.data);
      setResumeList(resp.data.data);
    });
  };

  return (
    <div className="p-10 md:px-20 lg:px-32 bg-gradient-to-br from-blue-50 to-violet-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl text-blue-700">My Resume</h2>
        <p className="mt-2 text-lg text-gray-600">Start creating AI-driven resumes tailored to your job role</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6">
          <AddResume />

          {resumeList.length > 0 ? resumeList.map((resume, index) => (
            <ResumeCardItem
              resume={resume}
              key={index}
              refreshData={GetResumeList}
              className="transition transform hover:scale-105 hover:shadow-lg duration-300"
            />
          )) : (
            [1, 2, 3, 4].map((item, index) => (
              <div className="h-[280px] rounded-lg bg-slate-200 animate-pulse" key={index}></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
