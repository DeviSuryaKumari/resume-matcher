// src/components/ResumeUpload.jsx
import { useRef, useState, useEffect } from "react";

export default function ResumeUpload({ onUpload, loading }) {
  const fileInputRef = useRef(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Analyzing your resume…",
    "Matching you with the best jobs…",
    // "Scanning job descriptions…",
    // "Finding relevant opportunities…",
  ];

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1000);

    return () => clearInterval(interval); // Clear when loading stops
  }, [loading]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {loading ? (
        <div className="flex items-center justify-center space-x-3">
          <svg
            className="animate-spin h-6 w-6 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span className="text-blue-600 font-semibold">
            {messages[messageIndex]}
          </span>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          Upload Your Resume
        </button>
      )}
    </div>
  );
}
