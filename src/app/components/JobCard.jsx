// src/components/JobCard.jsx
import React from "react";

export default function JobCard({ job }) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-200">
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600 font-medium">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="mt-2 text-sm text-gray-700">{job.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{job.type}</span>
                <span className="text-sm font-semibold text-green-600">{job.salary}</span>
            </div>
            <a href={`/jobs/${job.id}`} className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
                View Details
            </a>
        </div>
    );
}
