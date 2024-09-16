import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ViewJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      const res = await axios.get(`http://localhost:5000/api/jobs/${id}`);
      setJob(res.data);
      setNotes(res.data.clientNotes || ''); // Load existing notes
    };
    fetchJob();
  }, [id]);

  const handleSaveNotes = async () => {
    await axios.put(`http://localhost:5000/api/jobs/${id}`, { clientNotes: notes });
    // Optionally, refresh the job details after saving
    const res = await axios.get(`http://localhost:5000/api/jobs/${id}`);
    setJob(res.data);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/jobs/${id}`);
    // Redirect or update state after deletion
    window.location.href = '/'; // Redirect to home
  };

  const handleEdit = () => {
    // Logic to handle edit can be added here
    alert('Edit done successfully');
  };

  return (
    <div className="container mx-auto p-4">
      {/* Title with Background */}
      <header className="bg-[#007acc] text-white p-6 rounded mb-6 text-center">
        <h1 className="text-3xl font-bold">View Job Details</h1>
      </header>

      {job && (
        <div className="flex justify-center">
          {/* Centered Job Details Form */}
          <div className="w-full max-w-4xl bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{job.clientName} - Job Sheet</h2>

            {/* Job Details Form */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Contact Info:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.contactInfo}</div>

              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Received Date:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.receivedDate}</div>

              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Inventory Received:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.inventoryReceived}</div>

              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Reported Issues:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.reportedIssues}</div>

              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Assigned Technician:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.assignedTechnician}</div>

              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Estimated Amount:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.estimatedAmount}</div>

              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Deadline:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.deadline}</div>

              <div className="font-semibold text-white bg-[#007acc] p-2 border-b border-gray-300">Status:</div>
              <div className="bg-white p-2 border-b border-gray-300">{job.status}</div>
            </div>

            {/* Client Notes and Buttons */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Client Notes</h2>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                rows="4"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="flex gap-4 mb-4">
              <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                onClick={handleSaveNotes}
              >
                Save Notes
              </button>
            
              <button
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
     <div className="flex justify-center mt-4">
        <Link to="/" className="bg-gray-500 text-white p-2 rounded inline-block">
          Back to Jobs
        </Link>
      </div>
    </div>
  );
};

export default ViewJob;
