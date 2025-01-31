import { Button } from "@/components/ui/button";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { AIChatSession } from "./../../../../service/AIModal";
import { toast } from "sonner";

const PROMPT =
  "position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level ,position title and No JSON array) , give me result in HTML tags HTML CODE";

function RichTextEditor({ onRichTextEditorChange, index ,defaultValue}) {
  const [value, setValue] = useState(defaultValue);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  // const GenrateSummeryFromAI=async()=>{
  //   setLoading(true);
  //   if(!resumeInfo.experience[index].title){
  //       toast("please add position title" );
  //       return;
  //   }
  //   const prompt=PROMPT.replace('{positionTitle}',resumeInfo.experience[index].title);
  //   const result = await AIChatSession.sendMessage(prompt);
  //   const rawResponse = await (result.response.text());
  //   console.log("Raw Response:", rawResponse);
  //   setValue(rawResponse["bullet_points"].replace('[','').replace(']',''));
  //   setLoading(false);

  // }

  const GenrateSummeryFromAI = async () => {
    setLoading(true);
  
    if (!resumeInfo?.Experience[index]?.title) {
      toast("Please add position title");
      setLoading(false);
      return;
    }
  
    const prompt = PROMPT.replace("{positionTitle}", resumeInfo?.Experience[index].title);
  
    try {
      const result = await AIChatSession.sendMessage(prompt);
      const rawResponse = await result.response.text();
  
      console.log("Raw Response:", rawResponse);
  
      // Parse the JSON response
      const parsedResponse = JSON.parse(rawResponse);
  
      // Check if the response has the expected structure
      if (Array.isArray(parsedResponse.bulletPoints)) {
        // Join the bullet points into an unordered list
        const bulletPointsHTML = `<ul>${parsedResponse.bulletPoints.join("")}</ul>`;
        // setValue(bulletPointsHTML);
        // When setting bullet points
setValue(parsedResponse.bulletPoints.join("")); // Only set text without HTML tags here
// Update the editor value with HTML
      } else {
        toast("Unexpected response format. Please try again.");
      }
    } catch (error) {
      console.error("Error generating summary:", error);
      toast("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summery</label>
        <Button
          variant="outline"
          onClick={GenrateSummeryFromAI}
          disabled={loading}
          size="sm"
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Genrate From AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            const newValue = e.target.value; // Get the latest value from the editor
            setValue(newValue); // Update the local state
            onRichTextEditorChange(e); // Notify the parent about the change
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
