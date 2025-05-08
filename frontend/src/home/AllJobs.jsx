import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JobCard from './JobCard/JobCard';

function AllJobs({ selectedJob, setSelectedJob, selectedLocations }) {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    setPage(1);
  }, [selectedLocations]);
  useEffect(() => {
    async function getJobs() {
      const data = await axios.get('/api/v1/findJobs', {
        params: {
          location: selectedLocations.join(', '),
          page
        }
      });
      setJobs(data?.data?.job ?? []);
    }
    getJobs();
  }, [selectedLocations, page]);
  const handleNext = () => setPage(prev => prev + 1);
  const handleBack = () => setPage(prev => Math.max(1, prev - 1));
  return (
    <div className="p-4 w-full h-full overflow-y-auto">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          onSelect={setSelectedJob}
          selectedJob={selectedJob}
        />
      ))}

      <div className="flex justify-between mt-4">
        <button
          onClick={handleBack}
          className="btn btn-outline"
          disabled={page === 1}
        >
          Back
        </button>

        <button onClick={handleNext} className="btn btn-primary" disabled={jobs.length !== limit} >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllJobs