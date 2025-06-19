import axios from "axios";

const API_KEY =import.meta.env.VITE_STRAPI_API_KEY+"/api/";
const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
});

const CreateNewResume = async (data) => {
    try {
        const response = await axiosClient.post('/user-resumes', data);
        console.log("Resume created:", response.data);
    } catch (error) {
        console.error("Error creating resume:", error);
    }
};

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data)

const getResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*");

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id);

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    getResumeById,
    DeleteResumeById
}