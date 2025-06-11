// import Header from '@/components/custom/Header'
// import { UserButton } from '@clerk/clerk-react'
// import { AtomIcon, Edit, Share2 } from 'lucide-react'
// import React from 'react'

// function Home() {
//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-violet-200 min-h-screen flex flex-col">
//       <Header />
//       <section className="flex flex-col justify-center items-center py-16 px-6 mx-auto max-w-screen-xl text-center bg-transparent">
//         <a href="#" className="inline-flex justify-between items-center py-2 px-3 pr-5 mb-7 text-sm text-gray-700 bg-white bg-opacity-70 rounded-full shadow-lg hover:bg-blue-300 hover:text-gray-800">
//           <span className="text-xs bg-blue-500 text-white font-semibold px-3 py-1.5 rounded-full">New</span>
//           <span className="text-sm font-medium">Discover Our Latest Features!</span>
//           <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
//           </svg>
//         </a>
//         <h1 className="mb-8 text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
//           Create Your Dream Resume <span className="text-violet-600">With AI</span>
//         </h1>
//         <p className="mb-10 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
//           Build a standout resume effortlessly using our intuitive AI-powered platform designed to make the process faster and simpler.
//         </p>
//         <div className="flex flex-wrap justify-center gap-6 mb-10">
//           <a href="/dashboard" className="inline-flex items-center py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-blue-300 rounded-xl shadow-xl transition-all transform hover:scale-105">
//             Get Started
//             <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
//             </svg>
//           </a>
//           <a href="https://youtu.be/" className="inline-flex items-center py-3 px-6 text-lg font-semibold text-violet-700 border border-violet-500 rounded-xl hover:bg-violet-100 focus:ring-4 focus:ring-violet-300 transition-all transform hover:scale-105">
//             <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
//             </svg>
//             Watch Video
//           </a>
//         </div>
//         <div className="px-4 mx-auto text-center max-w-screen-md lg:max-w-screen-lg">
//           <span className="font-semibold text-gray-400 uppercase tracking-wide">Featured In</span>
//           <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
//             {/* Logos can be added here */}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home;

import Header from '@/components/custom/Header';
import { LayoutGrid } from 'lucide-react';
import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-violet-200 min-h-screen flex flex-col">
      <Header />

      <section className="flex flex-col justify-center items-center py-20 px-6 mx-auto max-w-screen-xl text-center bg-transparent">
        
        {/* New Tag */}
        <a href="#"
          className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-gray-700 bg-white bg-opacity-70 border border-gray-300 rounded-full shadow-md hover:bg-blue-100 transition">
          <span className="bg-blue-500 text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full">New</span>
          Discover Our Latest Features!
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>

        {/* Heading */}
        <h1 className="mb-6 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 leading-tight">
          Create Your Dream Resume <br /> <span className="text-violet-600">With AI</span>
        </h1>

        {/* Subheading */}
        <p className="mb-10 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Build a standout resume effortlessly using our intuitive AI-powered platform designed to make the process faster and simpler.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
          >
            Get Started
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>

          <a
            href="https://youtu.be/"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-violet-700 border border-violet-500 rounded-xl hover:bg-violet-100 hover:text-violet-800 transition-transform hover:scale-105"
          >
            <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            Watch Video
          </a>
        </div>

        {/* Featured Section */}
        <div className="max-w-screen-md mx-auto text-center">
          <span className="uppercase text-sm tracking-wide text-gray-400 font-semibold">Featured In</span>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-6 text-gray-400">
            {/* Placeholders for logos */}
            <img src="/logo1.svg" alt="Logo1" className="h-6 opacity-70" />
            <img src="/logo2.svg" alt="Logo2" className="h-6 opacity-70" />
            <img src="/logo3.svg" alt="Logo3" className="h-6 opacity-70" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

