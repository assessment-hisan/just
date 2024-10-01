"use client";
import { useState } from "react";
import Filter from "../../components/Filter"; // Import the filter component
import ScoreBoard from "../../components/ScoreBoard"

// Sample data
const mockData = [
  {
    program_name: "Content Writing",
    section: "Aliya",
    stage: false,
    results: [
      { position: 1, grade: "B", contestant_name: "Fayas", team: "Ramallah" },
      { position: 2, grade: "A", contestant_name: "Ameer", team: "Jerusalem" },
      { position: 3, grade: "C", contestant_name: "Sara", team: "Bethlehem" },
    ],
  },
  {
    program_name: "Solo Singing",
    section: "Ula",
    stage: true,
    results: [
      { position: 1, grade: "A", contestant_name: "John", team: "Nazareth" },
      { position: 2, grade: "B", contestant_name: "Ali", team: "Ramallah" },
      { position: 3, grade: "A", contestant_name: "Sam", team: "Jerusalem" },
    ],
  },
  {
    program_name: "Quiz Competition",
    section: "Thaniya",
    stage: true,
    results: [
      { position: 1, grade: "A", contestant_name: "Abeer", team: "Bethlehem" },
      { position: 2, grade: "A", contestant_name: "Amal", team: "Jerusalem" },
      { position: 3, grade: "B", contestant_name: "Zara", team: "Nazareth" },
    ],
  },
  {
    program_name: "Debate",
    section: "Thanaviya",
    stage: true,
    results: [
      { position: 1, grade: "A", contestant_name: "Lina", team: "Ramallah" },
      { position: 2, grade: "B", contestant_name: "Kamal", team: "Bethlehem" },
      { position: 3, grade: "A", contestant_name: "Farah", team: "Nazareth" },
    ],
  },
  {
    program_name: "Poetry Recitation",
    section: "Khulliya",
    stage: true,
    results: [
      { position: 1, grade: "B", contestant_name: "Fahad", team: "Jerusalem" },
      { position: 2, grade: "A", contestant_name: "Saad", team: "Ramallah" },
      { position: 3, grade: "B", contestant_name: "Yara", team: "Nazareth" },
    ],
  },
  {
    program_name: "Drama",
    section: "Aliya",
    stage: true,
    results: [
      { position: 1, grade: "A", contestant_name: "Amira", team: "Bethlehem" },
      { position: 2, grade: "B", contestant_name: "Layla", team: "Ramallah" },
      { position: 3, grade: "A", contestant_name: "Karim", team: "Jerusalem" },
    ],
  },
  {
    program_name: "Photography",
    section: "Ula",
    stage: false,
    results: [
      { position: 1, grade: "A", contestant_name: "Noor", team: "Nazareth" },
      { position: 2, grade: "B", contestant_name: "Bilal", team: "Ramallah" },
      { position: 3, grade: "A", contestant_name: "Mira", team: "Bethlehem" },
    ],
  },
  {
    program_name: "Calligraphy",
    section: "Thaniya",
    stage: false,
    results: [
      { position: 1, grade: "B", contestant_name: "Zain", team: "Jerusalem" },
      { position: 2, grade: "A", contestant_name: "Mariam", team: "Bethlehem" },
      { position: 3, grade: "B", contestant_name: "Hana", team: "Ramallah" },
    ],
  },
  {
    program_name: "Group Dance",
    section: "Thanaviya",
    stage: true,
    results: [
      { position: 1, grade: "A", contestant_name: "Rahim", team: "Nazareth" },
      { position: 2, grade: "B", contestant_name: "Hiba", team: "Jerusalem" },
      { position: 3, grade: "A", contestant_name: "Leena", team: "Ramallah" },
    ],
  },
  {
    program_name: "Public Speaking",
    section: "Khulliya",
    stage: true,
    results: [
      { position: 1, grade: "A", contestant_name: "Omar", team: "Bethlehem" },
      { position: 2, grade: "B", contestant_name: "Yousef", team: "Jerusalem" },
      { position: 3, grade: "A", contestant_name: "Sarah", team: "Ramallah" },
    ],
  },
];


// Team colors
const teamColors = {
  Ramallah: "text-indigo-950",
  Jerusalem: "text-green-500",
  Bethlehem: "text-blue-500",
  Nazareth: "text-red-500", // Additional team colors
};

const Page = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [filteredPrograms, setFilteredPrograms] = useState(mockData); // Initialize with full data

  // Callback to handle filtered program selection
  const handleFilterChange = (filtered) => {
    setFilteredPrograms(filtered); // Update filtered results
  };

  // Toggle expand/collapse on clicking a program div
  const handleProgramClick = (program) => {
    setExpandedProgram((prev) => (prev === program ? null : program)); // Collapse if already expanded
  };

  return (
    <div className="p-6 bg-slate-300 min-h-screen">
      <ScoreBoard />
      {/* Filter/Search Section */}
          <Filter
      programs={mockData}
      onFilterChange={handleFilterChange} // Pass callback to get filtered programs
    />


      {/* Program Divs */}
      <div className="space-y-4 mt-6 max-w-xl mx-auto">
        {filteredPrograms.map((program, index) => (
          <div
            key={index}
            onClick={() => handleProgramClick(program)}
            className="p-4 bg-white rounded-lg cursor-pointer shadow-md transition-shadow duration-500 border border-gray-300"
            style={{
              height: expandedProgram === program ? "auto" : "60px", // Expand on click
              overflow: "hidden", // Hide content if collapsed
            }}
            role="button" // Improve accessibility
            tabIndex={0} // Make it focusable
            onKeyPress={(e) => { if (e.key === "Enter") handleProgramClick(program); }} // Handle keyboard interactions
          >
            <div className="flex gap-3">
              <h3 className="font-bold text-gray-800">{program.program_name}</h3>
              <h5 className="text-gray-600">{program.section}</h5>
            </div>

            {/* Detailed view when expanded */}
            {expandedProgram === program && (
              <div className="flex gap-7 overflow-auto mt-4">
                {program.results.map((result, resultIndex) => (
                  <div
                    key={resultIndex}
                    className="bg-slate-200 rounded-lg p-4 shadow-md mb-4"
                  >
                    {/* Team color div */}
                    <div
                      className={`font-bold p-2 rounded-md mb-3 ${teamColors[result.team]}`}
                    >
                      {result.team}
                    </div>

                    {/* Contestant and result details */}
                    <div className="ml-2">
                      <p className="text-gray-700 font-semibold">
                        {result.contestant_name}
                      </p>
                      <div className="flex items-center justify-center">
                        <p className="text-gray-600">Position:</p>
                        <p className="font-bold text-gray-800">{result.position}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <p className="text-gray-600">Grade:</p>
                        <p className="font-bold text-gray-800">{result.grade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

