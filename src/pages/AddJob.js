import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/jobs', formData);
    navigate('/');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Add New Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Contact Info"
          value={formData.contactInfo}
          onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        />
        <input
          type="date"
          placeholder="Received Date"
          value={formData.receivedDate}
          onChange={(e) => setFormData({ ...formData, receivedDate: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Inventory Received"
          value={formData.inventoryReceived}
          onChange={(e) => setFormData({ ...formData, inventoryReceived: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Reported Issues"
          value={formData.reportedIssues}
          onChange={(e) => setFormData({ ...formData, reportedIssues: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        ></textarea>
        <textarea
          placeholder="Client Notes"
          value={formData.clientNotes}
          onChange={(e) => setFormData({ ...formData, clientNotes: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        ></textarea>
        <input
          type="text"
          placeholder="Assigned Technician"
          value={formData.assignedTechnician}
          onChange={(e) => setFormData({ ...formData, assignedTechnician: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          placeholder="Estimated Amount"
          value={formData.estimatedAmount}
          onChange={(e) => setFormData({ ...formData, estimatedAmount: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        />
        <input
          type="date"
          placeholder="Deadline"
          value={formData.deadline}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
          className="block w-full mb-4 border border-gray-300 p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Job</button>
      </form>
      <div className="flex justify-center mt-4">
        <Link to="/" className="bg-gray-500 text-white p-2 rounded inline-block">
          Back to Jobs
        </Link>
      </div>
    </div>
  );
};

export default AddJob;
