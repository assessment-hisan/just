"use client";
import React, { useState, useEffect } from "react";


function Filter({ programs, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [section, setSection] = useState("");

  // Effect to filter programs based on search term and section
  useEffect(() => {
    const filteredPrograms = programs.filter((program) => {
      const matchesSearchTerm = program.program_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesSection = section === "" || program.section === section;
      return matchesSearchTerm && matchesSection;
    });
    onFilterChange(filteredPrograms); // Pass filtered programs to the parent
  }, [searchTerm, section, programs, onFilterChange]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full border-1 border-slate-600">
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Search Programs</h2>
      <div className="pb-2 flex gap-2">
        <p className="font-montserrat pb-1 text-lg">result published :</p>
      <p className="font-montserrat font-semibold pb-1 text-lg" >{programs.length} </p>
        </div> 
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Programs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mb-4 w-full"
        />

        {/* Section Filter */}
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="border p-2 mb-4 w-full"
        >
          <option value="">All Sections</option>
          <option value="BIDĀYAH">BIDĀYAH</option>
          <option value="ŪLĀ">ŪLĀ</option>
          <option value="THĀNIYAH">THĀNIYAH</option>
          <option value="THĀNAWIYYAH">THĀNAWIYYAH</option>
          <option value="ᾹLIYAH">ᾹLIYAH</option>
          <option value="KULLIYYAH">KULLIYYAH</option>
        </select>

        {/* Search Dropdown */}
        {/* <SearchDropdown
          options={programs.filter((program) => 
            program.program_name.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          onSelect={(program) => console.log("Program clicked:", program)}
          searchProperties={["program_name"]}
          displayProperty="program_name"
        /> */}
      </div>
    </div>
  );
}

export default Filter;
