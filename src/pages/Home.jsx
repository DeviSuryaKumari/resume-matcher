// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResumeUpload from '../components/ResumeUpload';

export default function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleUpload = async (file) => {
        const formData = new FormData();
        formData.append("resume", file);

        try {
            setLoading(true);
            //   const response = await axios.post("http://localhost:5000/api/match", formData, {
            //     headers: { "Content-Type": "multipart/form-data" },
            //   });

            const response = {
                data: {
                    jobs: [
                        {
                            title: 'Software Engineer',
                            company: 'TechCorp',
                            description: 'We are looking for a skilled software engineer to join our team...',
                            matchScore: 85,
                        },
                        {
                            title: 'Frontend Developer',
                            company: 'DesignWorks',
                            description: 'DesignWorks is seeking a frontend developer to build modern web interfaces...',
                            matchScore: 78,
                        },
                        {
                            title: 'Frontend Developer',
                            company: 'DesignWorks',
                            description: 'DesignWorks is seeking a frontend developer to build modern web interfaces...',
                            matchScore: 78,
                        },
                        {
                            title: 'Frontend Developer',
                            company: 'DesignWorks',
                            description: 'DesignWorks is seeking a frontend developer to build modern web interfaces...',
                            matchScore: 78,
                        },
                        {
                            title: 'Frontend Developer',
                            company: 'DesignWorks',
                            description: 'DesignWorks is seeking a frontend developer to build modern web interfaces...',
                            matchScore: 78,
                        },
                        {
                            title: 'Frontend Developer',
                            company: 'DesignWorks',
                            description: 'DesignWorks is seeking a frontend developer to build modern web interfaces...',
                            matchScore: 78,
                        },
                    ]
                }
            }
            // Navigate to MatchList page with job data
            // navigate("/matches", { state: { jobs: response.data.jobs } });
            navigate("/matches", { state: { jobs: response.data.jobs } });
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Something went wrong while uploading resume.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
            <header className="text-center mb-2">
                <h1 className="text-6xl font-extrabold text-blue-900 drop-shadow-md">ResuMatch AI</h1>
                <p className="text-2xl font-semibold text-gray-700 mt-4 mb-6 max-w-lg mx-auto">
                    Smart job matching powered by AI. Find your perfect job match today!
                </p>
            </header>
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8 space-y-8">
                <ResumeUpload onUpload={handleUpload} loading={loading} />
            </div>
        </div>
    );
}
