import React from "react";
import {
    FaBuilding,
    FaBriefcase,
    FaClock,
    FaDollarSign,
} from "react-icons/fa";
import { Zap } from 'lucide-react';
import { MdLocationOn } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
function DetailJob({ selectedJob }) {
    if (!selectedJob)
        return <div className="p-4">Select a selectedJob to see details</div>;

    const postedDaysAgo = Math.floor((new Date() - new Date(selectedJob.postedDateTime)) / (1000 * 60 * 60 * 24));

    return (
        <div className="p-6 w-full">
            <div className="flex-1 justify-between mb-4">
                <div>
                    <h1 className="text-2xl font-bold mb-2">{selectedJob.title}</h1>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaBuilding />
                        <span>{selectedJob.country}</span>
                    </div>
                    <div className="flex text-gray-600 mt-1 w-full">
                        <div className="flex items-center gap-2 flex-1">
                            <MdLocationOn />
                            <span>{selectedJob.location}</span>
                        </div>

                        <div className="flex gap-2 justify-end items-center flex-1">
                            <a href={selectedJob.jobLink} target="_blank" rel="noreferrer">
                                <button className="btn btn-primary btn-sm">
                                    <AiOutlineRise />
                                </button>
                            </a>
                            <button className="btn btn-sm text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 border-none flex items-center gap-2">
                                <Zap size={16} />
                                Quick Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-4" />

            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-4">Job Details</h2>

                <div className="flex flex-row text-gray-700 gap-4">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 px-2 space-y-3">
                        <div className="flex items-center gap-2">
                            <FaBriefcase className="text-lg" />
                            <span>{selectedJob.employmentType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="text-lg" />
                            <span>{postedDaysAgo} days ago</span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2 space-y-3">
                        <div className="flex items-center gap-2">
                            <FaDollarSign className="text-lg" />
                            <span>from 5-20 an hour</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-4" />

            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Qualifications</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Graduate</li>
                    <li>Relevant industry experience</li>
                    <li>Strong communication skills</li>
                </ul>
            </div>

            <hr className="my-4" />

            <div>
                <h2 className="text-xl font-semibold mb-2">Role Full Description</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
                    tempus erat egestas efficitur. In hac habitasse platea dictumst.
                </p>
            </div>
        </div>
    );
}

export default DetailJob;
