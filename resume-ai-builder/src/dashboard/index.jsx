
// import React, { useEffect, useState } from 'react';
// import AddResume from './components/AddResume';
// import { useUser } from '@clerk/clerk-react';
// import GlobalApi from "./../../service/GlobalApi";
// import ResumeCardItem from './components/ResumeCardItem';

// function Dashboard() {
//   const { user } = useUser();
  
//   const [resumeList, setResumeList] = useState([]);

//   useEffect(() => {
//     GetResumeList();
//   }, [user]);

//   // Used to get user's resume list
//   const GetResumeList = () => {
//     GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp => {
//       console.log(resp.data.data);
//       setResumeList(resp.data.data);
//     });
//   };

//   return (
//     <div className="p-10 md:px-20 lg:px-32 bg-gradient-to-br from-blue-50 to-violet-50 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="font-bold text-4xl text-blue-700">My Resume</h2>
//         <p className="mt-2 text-lg text-gray-600">Start creating AI-driven resumes tailored to your job role</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6">
//           <AddResume />

//           {resumeList.length > 0 ? resumeList.map((resume, index) => (
//             <ResumeCardItem
//               resume={resume}
//               key={index}
//               refreshData={GetResumeList}
//               className="transition transform hover:scale-105 hover:shadow-lg duration-300"
//             />
//           )) : (
//             [1, 2, 3, 4].map((item, index) => (
//               <div className="h-[280px] rounded-lg bg-slate-200 animate-pulse" key={index}></div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from './components/ResumeCardItem';
import { motion } from 'framer-motion';

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    GetResumeList();
  }, [user]);

  const GetResumeList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp => {
      console.log(resp.data.data);
      setResumeList(resp.data.data);
    });
  };

  return (
    <div className="p-6 md:px-20 lg:px-32 bg-gradient-to-br from-[#e0f2fe] to-[#ede9fe] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-extrabold text-4xl text-blue-800 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Resumes
        </motion.h2>
        <p className="text-gray-700 text-lg mb-8">Start creating AI-driven resumes tailored to your job role</p>

        <div className="bg-white shadow-xl rounded-xl p-6 transition-all duration-500 hover:shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AddResume />

            {resumeList.length > 0 ? (
              resumeList.map((resume, index) => (
                <ResumeCardItem
                  resume={resume}
                  key={index}
                  refreshData={GetResumeList}
                  className="transition transform hover:scale-105 hover:shadow-md duration-300"
                />
              ))
            ) : (
              Array(4).fill().map((_, index) => (
                <div
                  key={index}
                  className="h-[280px] rounded-xl bg-gray-200 animate-pulse shadow-inner"
                ></div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

