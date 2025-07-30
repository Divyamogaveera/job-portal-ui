"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import jobs from "../../../data/jobs";
import { notFound } from "next/navigation";

export default function JobDetailsPage() {
    const params = useParams();
    const jobId = parseInt(params.id);
    const job = jobs.find((j) => j.id === jobId);

    if (!job) return notFound();

    // 🧠 Apply form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.resume) {
            alert("Please fill in all fields and upload your resume.");
            return;
        }

        // Simulate success
        alert("Application submitted successfully!");
        setForm({ name: "", email: "", resume: null });
    };

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

                {/* Apply Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Resume
                        </label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleChange}
                            className="w-full"
                            accept=".pdf,.doc,.docx"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
}
