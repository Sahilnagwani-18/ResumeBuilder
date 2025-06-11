// import { Loader2, PlusSquare } from "lucide-react";
// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { v4 as uuidv4 } from "uuid";
// import { useUser } from "@clerk/clerk-react";
// import GlobalApi from "./../../../service/GlobalApi";
// import { useNavigate } from "react-router-dom";

// function AddResume() {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [resumeTitle, setResumeTitle] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { user } = useUser();
//   const navigation=useNavigate();

//   const onCreate = () => {
//     setLoading(true);
//     const uuid = uuidv4();
//     const data = {
//       data: {
//         title: resumeTitle,
//         resumeid: uuid,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         username: user?.fullName,
//       },
//     };
//     GlobalApi.CreateNewResume(data)
//       .then((resp) => {
//         console.log(resp.data.data.documentId);
//         if (resp) {
//           setLoading(false);
//           setOpenDialog(false);
//           navigation('/dashboard/resume/'+resp.data.data.documentId+"/edit")
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <div
//         className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed"
//         onClick={() => setOpenDialog(true)}
//       >
//         <PlusSquare />
//       </div>
//       <Dialog open={openDialog} onOpenChange={(isOpen) => setOpenDialog(isOpen)}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Create New Resume</DialogTitle>
//             <DialogDescription>
//               <p>Add Title for Your New Resume</p>
//               <Input
//                 className="my-2"
//                 placeholder="Full Stack Resume"
//                 onChange={(e) => setResumeTitle(e.target.value)}
//               />
//             </DialogDescription>
//             <div className="flex justify-end gap-5">
//               <Button onClick={() => setOpenDialog(false)} variant="ghost">
//                 Cancel
//               </Button>
//               <Button
//                 disabled={!resumeTitle || loading}
//                 onClick={onCreate}
//               >
//                 {loading ? <Loader2 className="animate-spin" /> : "Create"}
//               </Button>
//             </div>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default AddResume;


import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "./../../../service/GlobalApi";
import { useNavigate } from "react-router-dom";

function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const navigation = useNavigate();

  const onCreate = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeid: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
      },
    };
    GlobalApi.CreateNewResume(data)
      .then((resp) => {
        if (resp) {
          setLoading(false);
          setOpenDialog(false);
          navigation(`/dashboard/resume/${resp.data.data.documentId}/edit`);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div>
      {/* Resume Create Card */}
      <div
        onClick={() => setOpenDialog(true)}
        className="group relative flex flex-col items-center justify-center p-14 py-24 h-[280px] rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-violet-100 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer"
      >
        <PlusSquare className="h-10 w-10 text-gray-600 group-hover:scale-125 group-hover:text-blue-500 transition-transform duration-300" />
        <p className="mt-2 text-gray-500 text-sm group-hover:text-blue-600 font-medium">Create New Resume</p>
      </div>

      {/* Dialog Box */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-white rounded-xl shadow-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800">🎯 Create a New Resume</DialogTitle>
            <DialogDescription className="text-sm text-gray-500 mt-2 mb-4">
              Add a title for your new resume below.
            </DialogDescription>

            <Input
              className="mb-4"
              placeholder="e.g. Full Stack Developer Resume"
              value={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-4">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={onCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
