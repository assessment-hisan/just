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
      {
        position: 1,
        grade: "B",
        contestant_name: "Fayas",
        team: "Ramallah",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
    ],
  },
  {
    program_name: "Solo Singing",
    section: "Ula",
    stage: true,
    results: [
      {
        position: 1,
        grade: "A",
        contestant_name: "John",
        team: "Nazareth",
      },
    ],
  },
  {
    program_name: "Content Writing",
    section: "Aliya",
    stage: false,
    results: [
      {
        position: 1,
        grade: "B",
        contestant_name: "Fayas",
        team: "Ramallah",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
    ],
  },
  {
    program_name: "Solo Singing",
    section: "Ula",
    stage: true,
    results: [
      {
        position: 1,
        grade: "A",
        contestant_name: "John",
        team: "Nazareth",
      },
    ],
  },
  {
    program_name: "Content Writing",
    section: "Aliya",
    stage: false,
    results: [
      {
        position: 1,
        grade: "B",
        contestant_name: "Fayas",
        team: "Ramallah",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
    ],
  },
  {
    program_name: "Solo Singing",
    section: "Ula",
    stage: true,
    results: [
      {
        position: 1,
        grade: "A",
        contestant_name: "John",
        team: "Nazareth",
      },
    ],
  },
  {
    program_name: "Content Writing",
    section: "Aliya",
    stage: false,
    results: [
      {
        position: 1,
        grade: "B",
        contestant_name: "Fayas",
        team: "Ramallah",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
      {
        position: 2,
        grade: "A",
        contestant_name: "Ameer",
        team: "Jerusalem",
      },
      {
        position: 3,
        grade: "C",
        contestant_name: "Sara",
        team: "Bethlehem",
      },
    ],
  },
  {
    program_name: "Solo Singing",
    section: "Ula",
    stage: true,
    results: [
      {
        position: 1,
        grade: "A",
        contestant_name: "John",
        team: "Nazareth",
      },
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
    if (expandedProgram === program) {
      setExpandedProgram(null); // Collapse if already expanded
    } else {
      setExpandedProgram(program); // Expand new program
    }
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <ScoreBoard/>
      {/* Filter/Search Section */}
      <Filter
        programs={mockData}
        onProgramSelect={(program) => handleProgramClick(program)}
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
          >
            <div className="flex gap-3">
            <h3 className="font-bold text-gray-700">{program.program_name}</h3>
            <h5 className="text-gray-500">{program.section}</h5>
            </div>

            {/* Detailed view when expanded */}
            {expandedProgram === program && (
              <div className="flex gap-7 overflow-auto mt-4">
                {program.results.map((result, resultIndex) => (
                  <div
                    key={resultIndex}
                    className="bg-slate-50 rounded-lg p-4 shadow-md mb-4"
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
                      <p className="text-gray-600">
                        Position: {result.position}
                      </p>
                      <p className="text-gray-600">Grade: {result.grade}</p>
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
