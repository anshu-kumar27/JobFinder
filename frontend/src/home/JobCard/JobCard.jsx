import React from 'react'

function JobCard({job,onSelect, selectedJob}) {
    const isSelected = selectedJob?._id === job._id;

  return (
    <div
    className={`border rounded-md p-4 mb-4 shadow-sm cursor-pointer transition-all 
      hover:bg-gray-50 ${isSelected ? 'bg-blue-100 border-primary' : 'border-gray-200'}`}
    onClick={() => onSelect(job)}
  >
      <div className={`flex flex-col gap-1 ${selectedJob}`}>
        <h2 className="text-lg font-semibold text-primary">{job.title}</h2>
        <p className="text-sm text-gray-600">{job.company}</p>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        </p>
        <p className="text-xs text-gray-500">
  from <span className="font-semibold text-black">$5–$10 hr</span>{' '}
  <span className="text-red-500 font-medium">quick apply</span>
</p>
      </div>
    </div>
  )
}

export default JobCard