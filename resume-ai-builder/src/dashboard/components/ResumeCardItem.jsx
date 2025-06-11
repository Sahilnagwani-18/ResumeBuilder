// import { Loader2Icon, MoreVertical, Notebook } from 'lucide-react'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import GlobalApi from './../../../service/GlobalApi'
// import { toast } from 'sonner'

// function ResumeCardItem({resume,refreshData}) {

//   const navigation=useNavigate();
//   const [openAlert,setOpenAlert]=useState(false);
//   const [loading,setLoading]=useState(false);
//   // const onMenuClick=(url)=>{
//   //   navigation(url)
//   // }


//   const onDelete=()=>{
//     setLoading(true);
//     GlobalApi.DeleteResumeById(resume.documentId).then(resp=>{
//       console.log(resp);
//       toast('Resume Deleted!');
//       refreshData()
//       setLoading(false);
//       setOpenAlert(false);
//     },(error)=>{
//       setLoading(false);
//     })
//   }
//   return (
    
//        <div className=''>
//           <Link to={'/dashboard/resume/'+resume.documentId+"/edit"}>
//         <div className='p-14  bg-gradient-to-b
//           from-pink-100 via-purple-200 to-blue-200
//         h-[280px] 
//           rounded-t-lg border-t-4
//         '
//         style={{
//           borderColor:resume?.themeColor
//         }}
//         >
//               <div className='flex 
//         items-center justify-center h-[180px] '>
//                 {/* <Notebook/> */}
//                 <img src="/cv.png" width={80} height={80} />
//               </div>
//         </div>
//         </Link>
//         <div className='border p-3 flex justify-between  text-black rounded-b-lg shadow-lg'
//          style={{
//           background:resume?.themeColor
//         }}>
//           <h2 className='text-sm'>{resume.title}</h2>
         
//           <DropdownMenu >
//           <DropdownMenuTrigger style={{
//           background:resume?.themeColor+1
//         }}>
//           <MoreVertical className='h-4 w-4 cursor-pointer'/>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
           
//             <DropdownMenuItem  onClick={()=>navigation('/dashboard/resume/'+resume.documentId+"/edit")}>Edit</DropdownMenuItem>
//             <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume.documentId+"/view")}>View</DropdownMenuItem>
//             <DropdownMenuItem onClick={()=>navigation('/my-resume/'+resume.documentId+"/view")}>Download</DropdownMenuItem>
//             <DropdownMenuItem onClick={()=>setOpenAlert(true)}>Delete</DropdownMenuItem>
            
//           </DropdownMenuContent>
//         </DropdownMenu>

//         <AlertDialog open={openAlert}>
        
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//             <AlertDialogDescription>
//               This action cannot be undone. This will permanently delete your account
//               and remove your data from our servers.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={onDelete} 
//             disabled={loading}>
//               {loading? <Loader2Icon className='animate-spin'/>:'Delete'}
//               </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>

//         </div>
//         </div>

//   )
// }

// export default ResumeCardItem


import { Loader2Icon, MoreVertical } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GlobalApi from './../../../service/GlobalApi';
import { toast } from 'sonner';

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      resp => {
        toast('Resume Deleted!');
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      error => setLoading(false)
    );
  };

  return (
    <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
        <div
          className="p-10 bg-gradient-to-br from-pink-100 via-purple-200 to-blue-200 h-[280px] rounded-t-2xl border-t-4 shadow-md flex items-center justify-center backdrop-blur-md"
          style={{
            borderColor: resume?.themeColor,
            backgroundImage: `linear-gradient(135deg, ${resume?.themeColor}30 0%, #ffffff10 100%)`,
          }}
        >
          <img src="/cv.png" width={80} height={80} alt="Resume" />
        </div>
      </Link>

      <div
        className="border border-t-0 p-4 flex items-center justify-between text-white rounded-b-2xl"
        style={{
          background: resume?.themeColor,
        }}
      >
        <h2 className="text-sm font-semibold truncate">{resume.title}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full hover:bg-white/20 transition">
              <MoreVertical className="h-5 w-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-50 bg-white shadow-lg rounded-lg text-sm">
            <DropdownMenuItem onClick={() => navigation(`/dashboard/resume/${resume.documentId}/edit`)}>
              ✏️ Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation(`/my-resume/${resume.documentId}/view`)}>
              👁️ View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigation(`/my-resume/${resume.documentId}/view`)}>
              ⬇️ Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>
              🗑️ Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your resume and cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="hover:bg-gray-100">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin h-4 w-4" /> : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCardItem;
