"use client"
import React, { useState } from "react";
import IndProRegSection from "./program-reg-secions/IndProRegSection";
import GrpProRegSection from "./program-reg-secions/GrpProRegSection";
import SearchDropdown from "./searchBar/SearchDropdown";


function FilterSection({ programs, contestants }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [section, setSection] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(null); // Store selected program
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter programs based on dropdown selection and search term
  const filteredPrograms = programs.filter((program) => {
    return (
      (section === "" || program.section === section) &&
      (category === "" || program.category === category) &&
      (type === "" || (type === "stage" ? program.stage : !program.stage)) &&
      program.program_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleProgramClick = (program) => {
    setSelectedProgram(program); // Set selected program data
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="flex flex-col items-center bg-slate-100 pb-40">
      <div className="bg-slate-50 shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Filter and Search Programs</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:gap-4 gap-2 mb-4">
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="md:flex-1 w-full p-2 border border-gray-300 rounded-md bg-gray-200 text-gray-700"
          >
            <option value="">Select Section</option>
            <option value="ula">Ula</option>
            <option value="thaniya">Thaniya</option>
            <option value="thanaviya">Thanaviya</option>
            <option value="aliya">Aliya</option>
            <option value="khulliya">Khulliya</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="md:flex-1 w-full p-2 border border-gray-300 rounded-md bg-gray-200 text-gray-700"
          >
            <option value="">Select Category</option>
            <option value="individual">Individual</option>
            <option value="group">Group</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="md:flex-1 w-full p-2 border border-gray-300 rounded-md bg-gray-200 text-gray-700"
          >
            <option value="">Select Type</option>
            <option value="stage">Stage</option>
            <option value="nonstage">Non-stage</option>
          </select>
        </div>

        {/* Search Input */}
          <SearchDropdown
           options={programs}
           onSelect={(program) => handleProgramClick(program)}
           searchProperties={["program_name", "section"]}
           displayProperty="program_name"
         />
      </div>

      {/* Selected Program Section */}
      {selectedProgram && (
        selectedProgram.category === "individual" ? (
          <IndProRegSection selectedProgram={selectedProgram} contestants={contestants} />
        ) : (
          <GrpProRegSection selectedProgram={selectedProgram} contestants={contestants} />
        )
      )}
    </div>
  );
}

export default FilterSection;
