import React, { useState } from 'react'
import AllJobs from './AllJobs';
import DetailJob from './DetailJob';

function Home({ selectedLocations }) {
    const [selectedJob, setSelectedJob] = useState(null);
    return (
        <div className="flex  h-[87vh]">
            <div className="w-1/2 border-r border-gray-300 p-4 overflow-y-auto">
                <AllJobs selectedJob={selectedJob} setSelectedJob={setSelectedJob} selectedLocations={selectedLocations} />
            </div>

            <div className="w-1/2 p-4 overflow-y-auto">
                {selectedJob ? (
                    <div>
                        <DetailJob selectedJob={selectedJob} />
                    </div>
                ) : (
                    <p className="text-gray-500">Select a job to see details.</p>
                )}
            </div>
        </div>
    )
}

export default Home