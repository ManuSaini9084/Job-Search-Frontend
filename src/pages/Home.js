import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    setFilteredJobs(
      jobs.filter(job =>
        job.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job._id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, jobs]);

  const fetchJobs = async () => {
    const res = await axios.get('https://job-search-backend-2-j17y.onrender.com/api/jobs');
    setJobs(res.data);
    setFilteredJobs(res.data); // Initialize filteredJobs
  };

  const deleteJob = async (id) => {
    await axios.delete(`https://job-search-backend-2-j17y.onrender.com/api/jobs/${id}`);
    fetchJobs();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto p-4">
        <header className="bg-[#007acc] text-white p-6 rounded mb-6 text-center">
          <h1 className="text-3xl font-bold">Manu Saini Job List</h1>
        </header>

        <div className="mb-6 mx-auto">
          <input
            type="text"
            placeholder="Search by Client Name or ID"
            className="w-full p-3 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-6 text-center">
          <Link to="/add" className="bg-[#007acc] text-white p-3 rounded inline-block shadow-md hover:bg-[#005f9e] transition">
            Add New Job
          </Link>
        </div>

        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-[#007acc] text-white">
            <tr>
              <th className="py-3 px-4 border-b">#</th> {/* New Column Header */}
              <th className="py-3 px-4 border-b">Client ID</th>
              <th className="py-3 px-4 border-b">Client Name</th>
              <th className="py-3 px-4 border-b">Contact Info</th>
              <th className="py-3 px-4 border-b">Received Date</th>
              <th className="py-3 px-4 border-b">Inventory Received</th>
              <th className="py-3 px-4 border-b">Reported Issues</th>
              <th className="py-3 px-4 border-b">Client Notes</th>
              <th className="py-3 px-4 border-b">Assigned Technician</th>
              <th className="py-3 px-4 border-b">Estimated Amount</th>
              <th className="py-3 px-4 border-b">Deadline</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={job._id}>
                <td className="py-2 px-4 border-b">{index + 1}</td> {/* Index Column */}
                <td className="py-2 px-4 border-b">{job._id}</td>
                <td className="py-2 px-4 border-b">{job.clientName}</td>
                <td className="py-2 px-4 border-b">{job.contactInfo}</td>
                <td className="py-2 px-4 border-b">{job.receivedDate}</td>
                <td className="py-2 px-4 border-b">{job.inventoryReceived}</td>
                <td className="py-2 px-4 border-b">{job.reportedIssues}</td>
                <td className="py-2 px-4 border-b">{job.clientNotes}</td>
                <td className="py-2 px-4 border-b">{job.assignedTechnician}</td>
                <td className="py-2 px-4 border-b">{job.estimatedAmount}</td>
                <td className="py-2 px-4 border-b">{job.deadline}</td>
                <td className="py-2 px-4 border-b">{job.status}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <Link to={`/view/${job._id}`} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">View</Link>
                  <Link to={`/edit/${job._id}`} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition">Edit</Link>
                  <button onClick={() => deleteJob(job._id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="bg-[#007acc] text-white p-4 text-center">
        <p>&copy; 2024 Manu Saini. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
