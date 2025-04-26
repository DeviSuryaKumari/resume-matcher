// src/components/JobModal.jsx
export default function JobModal({ job, onClose }) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling to the overlay
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[75%] max-h-[75%] overflow-y-auto relative"
        onClick={handleModalClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">{job.title}</h2>
        <p className="text-gray-600 font-medium">{job.company}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500">Match Score</span>
          <span className="text-lg font-bold text-green-600">{job.similarity_score}%</span>
        </div>
        <p className="text-gray-500 mt-2">{job.description}</p>
      </div>
    </div>
  );
}
