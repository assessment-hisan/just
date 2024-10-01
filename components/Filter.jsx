"use client";
import React, { useState } from "react";
import SearchDropdown from "./searchBar/SearchDropdown";

function Filter({ programs, onProgramSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [section, setSection] = useState("");

  // Filter programs based on dropdown selection and search term
  const filteredPrograms = programs.filter((program) => {
    return (
      (section === "" || program.section === section) &&
      program.program_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleProgramClick = (program) => {
    onProgramSelect(program); // Notify parent about selected program
  };

  return (
    <div className="flex flex-col items-center bg-slate-100">
      <div className="bg-slate-50 shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Filter and Search Programs</h2>

        {/* Filters */}
        <div className="flex flex-col gap-2 mb-4">
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-200 text-gray-700"
          >
            <option value="">Select Section</option>
            <option value="ula">Ula</option>
            <option value="thaniya">Thaniya</option>
            <option value="thanaviya">Thanaviya</option>
            <option value="aliya">Aliya</option>
            <option value="khulliya">Khulliya</option>
          </select>
        </div>

        {/* Search Input */}
        <SearchDropdown
          options={filteredPrograms}
          onSelect={handleProgramClick}
          searchProperties={["program_name", "section"]}
          displayProperty="program_name"
        />
      </div>
    </div>
  );
}

export default Filter;
