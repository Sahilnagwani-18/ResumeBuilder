import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { AIChatSession } from "./../../../../../service/AIModal";

// const prompt =
//   "Job Title:{jobTitle}.Depends on Job Title give me summary for my resume within 4-5 lines in JSON format with field ExperienceLevel and Summary with Experience level for Fresher, Mid-Level, Experienced";





function Summery({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const prompt = `Job Title: ${resumeInfo.jobTitle}. Based on this job title, generate a concise summary for my resume in the following format:

{
  "ExperienceLevel": ["Fresher", "Mid-Level", "Experienced"],
  "Summary": [
    "Summary text for a Fresher (within 3-4 lines).",
    "Summary text for a Mid-Level professional (within 3-4 lines).",
    "Summary text for an Experienced professional (within 3-4 lines)."
  ]
}

Ensure the JSON is valid, with no trailing commas or extra characters, and all fields strictly follow this format. Only return the JSON response. This Should use good words for ats `;
  
  const [summery, setSummery] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);

  useEffect(()=>{
    summery&&setResumeInfo({
        ...resumeInfo,
        summery:summery
    })
    },[summery])

  const generateSummaryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo.jobTitle);

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const rawResponse = await result.response.text();
      console.log("Raw Response:", rawResponse);

      const parsedResponse = JSON.parse(rawResponse);
      const transformedData = transformResponse(parsedResponse);

      setAiGeneratedSummaryList(transformedData);
      console.log("Transformed Data:", transformedData);
    } catch (error) {
      console.error("Error parsing AI response:", error);
      toast.error("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const transformResponse = (response) => {
    const { ExperienceLevel, Summary } = response;

    if (!ExperienceLevel || !Summary) {
      console.error("Invalid AI response format:", response);
      return [];
    }

    // Map experience levels to summaries
    return ExperienceLevel.map((level, index) => ({
      ExperienceLevel: level,
      Summary: Summary[index] || "No summary available.",
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        summery,
      },
    };
    console.log("Data to Save:", data);

    GlobalApi.UpdateResumeDetail(params?.resumeid, data).then(
      (resp) => {
        console.log("Response:", resp);
        enableNext(true);
        setLoading(false);
        toast.success("Details updated successfully.");
      },
      (error) => {
        console.error("Error saving details:", error);
        setLoading(false);
        toast.error("Failed to save details. Please try again.");
      }
    );
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add a summary for your job title.</p>
        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary </label>
            <Button
              onClick={generateSummaryFromAI}
              variant="outline"
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
            >
              <Brain className="h-4 w-4" />
              Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            // value={summery}
            defaultValue={summery?summery:resumeInfo?.summery}
            onChange={(e) => setSummery(e.target.value)}
          />
          <div className="mt-3 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummaryList && aiGeneratedSummaryList.length > 0 && (
        <div>
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummaryList.map((item, index) => (
            <div key={index} className="mb-3">
              <h2 className="font-bold my-1">Level: {item.ExperienceLevel}</h2>
              <p>{item.Summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summery;
