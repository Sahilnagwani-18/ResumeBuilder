import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Description } from "@radix-ui/react-dialog";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEditorState } from "react-simple-wysiwyg";
import GlobalApi from "./../../../../../service/GlobalApi";
import { toast } from "sonner";

function Education() {

  const [loading,setLoading]=useState(false);
  const params=useParams();
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
  const [educationalList, setEducationList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  useEffect(()=>{
    resumeInfo&&setEducationList(resumeInfo?.Education)
  },[])

  const handleChange = (event, index) => {
     const newEntries=educationalList.slice();
     const {name,value}=event.target;
     newEntries[index][name]=value;
     setEducationList(newEntries);
  };

  const AddNewEducation=()=>{
    setEducationList([...educationalList,{
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
    }])
  }

  const RemoveEducation=()=>{
    setEducationList(educationalList=>educationalList.slice(0,-1));
       
  }
  const onSave=()=>{
    setLoading(true);
         const data={
            data:{
                Education:educationalList.map(({id,...rest})=>rest)
            }
         }
         console.log(params.resumeid);
         console.log("Payload being sent to API:", JSON.stringify(data, null, 2));
      GlobalApi.UpdateResumeDetail(params.resumeid,data).then(resp=>{
        
        console.log(resp);
        setLoading(false);
        toast('Details updated');
      },(error)=>{
        setLoading(false);
        console.error("Error updating details:", error.response.data || error.message);
        toast('Error updating details !! Please Try Again');
      })

  }

  useEffect(()=>{
      setResumeInfo({
        ...resumeInfo,
        Education:educationalList
      })
  },[educationalList])

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold textx-lg">Education</h2>
      <p>Add Your Educational Details</p>

      <div>
        {educationalList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
              <div className="col-span-2">
                <label>University Name</label>
                <Input
                  name="universityName"
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.universityName}
                />
              </div>
              <div>
                <label>Degree</label>
                <Input name="degree" onChange={(e) => handleChange(e, index)} defaultValue={item?.degree} />
              </div>
              <div>
                <label>Major</label>
                <Input name="major" onChange={(e) => handleChange(e, index)}  defaultValue={item?.major}/>
              </div>
              <div>
                <label>Start Date:</label>
                <Input
                  name="startDate" type="date"
                  onChange={(e) => handleChange(e, index)} defaultValue={item?.startDate}
                />
              </div>
              <div>
                <label>End Date:</label>
                <Input
                  name="endDate"  type="date"
                  onChange={(e) => handleChange(e, index)}
                  defaultValue={item?.endDate}
                />
              </div>
              <div className="col-span-2">
                <label>Description</label>
                <Textarea
                  name="description"
                  onChange={(e) => handleChange(e, index)} defaultValue={item?.description}
                />
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="flex justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={AddNewEducation}
                  className="text-primary"
                >
                  +ADD More Education
                </Button>
                <Button
                  variant="outline"
                  onClick={RemoveEducation}
                  className="text-primary"
                >
                  - Remove
                </Button>
              </div>

              <Button disabled={loading} onClick={() => onSave()}>
                {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
              </Button>
            </div>
    </div>
  );
}

export default Education; 