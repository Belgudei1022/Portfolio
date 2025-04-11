"use client";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("certificates");
  const [certForm, setCertForm] = useState({ title: "", image: "", link: "" });
  const [advForm, setAdvForm] = useState({ title: "", image: "" });

  const handleCertChange = (e: any) =>
    setCertForm({ ...certForm, [e.target.name]: e.target.value });

  const handleAdvChange = (e: any) =>
    setAdvForm({ ...advForm, [e.target.name]: e.target.value });

  const handleCertSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("Certificate:", certForm);

    try {
      const res = await fetch("/api/certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(certForm),
      });
      alert("Certificate added successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const handleAdvSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("Advantage:", advForm);

    try {
      const res = await fetch("/api/advantage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(advForm),
      });
      alert("Advantage added successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "certificates" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("certificates")}>
          Certificates
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "advantages" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("advantages")}>
          Advantages
        </button>
      </div>

      {activeTab === "certificates" && (
        <form onSubmit={handleCertSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={certForm.title}
            onChange={handleCertChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={certForm.image}
            onChange={handleCertChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={certForm.link}
            onChange={handleCertChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded">
            Add Certificate
          </button>
        </form>
      )}

      {activeTab === "advantages" && (
        <form onSubmit={handleAdvSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={advForm.title}
            onChange={handleAdvChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={advForm.image}
            onChange={handleAdvChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded">
            Add Advantage
          </button>
        </form>
      )}
    </div>
  );
}
