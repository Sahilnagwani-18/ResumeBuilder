// import React, { useContext, useState } from 'react'
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//   } from "@/components/ui/popover"
// import { Button } from '@/components/ui/button'
// import { LayoutGrid } from 'lucide-react'
// import { ResumeInfoContext } from '@/context/ResumeInfoContext'
// import GlobalApi from './../../../../service/GlobalApi'
// import { useParams } from 'react-router-dom'
// import { toast } from 'sonner'

// function ThemeColor() {
//     const colors=[
//         "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
//         "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
//         "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
//         "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
//     ]

//     const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
//     const [selectedColor,setSelectedColor]=useState();
//     const {resumeid}=useParams();
//     const onColorSelect=(color)=>{
//         setSelectedColor(color)
//         setResumeInfo({
//             ...resumeInfo,
//             themeColor:color
//         });
//         const data={
//             data:{
//                 themeColor:color
//             }
//         }
//         GlobalApi.UpdateResumeDetail(resumeid,data).then(resp=>{
//             console.log(resp);
//             toast('Theme Color Updated')
//         })
//     }

//   return (
//     <Popover>
//   <PopoverTrigger asChild>
//   <Button variant="outline" size="sm" 
//           className="flex gap-2" > <LayoutGrid/> Theme</Button>
//   </PopoverTrigger>
//   <PopoverContent>
//     <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>
//     <div className='grid grid-cols-5 gap-3'>
//         {colors.map((item,index)=>(
//             <div 
//             onClick={()=>onColorSelect(item)}
//             className={`h-5 w-5 rounded-full cursor-pointer
//              hover:border-black border
//              ${selectedColor==item&&'border border-black'}
//              `}
//             style={{
//                 background:item
//             }}>

//             </div>
//         ))}
//     </div>
//   </PopoverContent>
// </Popover>
//   )
// }

// export default ThemeColor

import React, { useContext, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { LayoutGrid } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import GlobalApi from './../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function ThemeColor() {
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
    "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
    "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
  ];

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [selectedColor, setSelectedColor] = useState(resumeInfo?.themeColor);
  const { resumeid } = useParams();

  const onColorSelect = (color) => {
    setSelectedColor(color);
    setResumeInfo({
      ...resumeInfo,
      themeColor: color
    });

    const data = {
      data: {
        themeColor: color
      }
    };

    GlobalApi.UpdateResumeDetail(resumeid, data).then(resp => {
      toast('🎨 Theme color updated!');
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2 items-center border-gray-300 shadow-sm hover:shadow-md transition">
          <LayoutGrid className="h-4 w-4" />
          Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4 shadow-xl rounded-lg w-[220px]">
        <h2 className="mb-3 text-sm font-semibold text-gray-700">Select Theme Color</h2>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => onColorSelect(color)}
              className={`h-6 w-6 rounded-full cursor-pointer transition-all duration-200 border-2 ${
                selectedColor === color ? 'ring-2 ring-offset-2 ring-black scale-110' : 'border-transparent hover:scale-110 hover:ring-1 hover:ring-gray-400'
              }`}
              style={{ backgroundColor: color }}
              title={color}
            ></div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ThemeColor;
