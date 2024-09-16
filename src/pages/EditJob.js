import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: '',
    contactInfo: '',
    receivedDate: '',
    inventoryReceived: '',
    reportedIssues: '',
    clientNotes: '',
    assignedTechnician: '',
    estimatedAmount: '',
    deadline: '',
    status: 'Pending',
  });

  useEffect(() => {
    const fetchJob = async () => {
      const res = await axios.get(`https://job-search-backend-2-j17y.onrender.com/api/jobs/${id}`);
      setFormData(res.data);
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://job-search-backend-2-j17y.onrender.com/api/jobs/${id}`, formData);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl"> {/* Increased width here */}
        <header className="bg-[#007acc] text-white p-6 rounded mb-6 text-center">
          <h1 className="text-3xl font-bold">Edit Job Sheet</h1>
        </header>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-blue-600">Client Name</label>
            <input
              type="text"
              placeholder="Client Name"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Contact Info</label>
            <input
              type="text"
              placeholder="Contact Info"
              value={formData.contactInfo}
              onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Received Date</label>
            <input
              type="date"
              value={formData.receivedDate}
              onChange={(e) => setFormData({ ...formData, receivedDate: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Inventory Received</label>
            <input
              type="text"
              placeholder="Inventory Received"
              value={formData.inventoryReceived}
              onChange={(e) => setFormData({ ...formData, inventoryReceived: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Reported Issues</label>
            <textarea
              placeholder="Reported Issues"
              value={formData.reportedIssues}
              onChange={(e) => setFormData({ ...formData, reportedIssues: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Client Notes</label>
            <textarea
              placeholder="Client Notes"
              value={formData.clientNotes}
              onChange={(e) => setFormData({ ...formData, clientNotes: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Assigned Technician</label>
            <input
              type="text"
              placeholder="Assigned Technician"
              value={formData.assignedTechnician}
              onChange={(e) => setFormData({ ...formData, assignedTechnician: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Estimated Amount</label>
            <input
              type="number"
              placeholder="Estimated Amount"
              value={formData.estimatedAmount}
              onChange={(e) => setFormData({ ...formData, estimatedAmount: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-600">Deadline</label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Edit Job
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <Link to="/" className="bg-gray-500 text-white p-2 rounded inline-block">
            Back to Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
