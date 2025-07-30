"use client";
import { useParams } from "next/navigation";
import jobs from "../../../data/jobs";
import { notFound } from "next/navigation";

export default function JobDetailsPage() {
    const params = useParams();
    const jobId = parseInt(params.id);
    const job = jobs.find((j) => j.id === jobId);

    if (!job) return notFound();

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
                <p className="text-lg text-gray-600">
                    {job.company} — {job.location}
                </p>
                <div className="mt-2 text-sm text-gray-500">
                    {job.type} | {job.salary}
                </div>
                <p className="mt-6 text-gray-700">{job.fullDescription}</p>
                <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">
                    Apply Now
                </button>
            </div>
        </div>
    );
}
