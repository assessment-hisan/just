

"use client";
import { useState } from "react";
import Filter from "../../components/Filter"; // Import the filter component
import ScoreBoard from "../../components/ScoreBoard"
import data from "./resluts.json"

// Sample data
const mockData = data


// Team colors
const teamColors = {
  RāmAllāh: "text-indigo-950",
  Ġazzah: "text-green-500",
  Rafaḥ: "text-blue-500",
  Jabalia: "text-red-500", // Additional team colors
};

const Page = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [filteredPrograms, setFilteredPrograms] = useState(mockData); // Initialize with full data

  // Callback to handle filtered program selection
  const handleFilterChange = (filtered) => {
    setFilteredPrograms(filtered); // Update filtered results
  };
 console.log(data.length)
  // Toggle expand/collapse on clicking a program div
  const handleProgramClick = (program) => {
    setExpandedProgram((prev) => (prev === program ? null : program)); // Collapse if already expanded
  };

  return (
    <div className="p-6 bg-slate-300 min-h-screen">
      {/* <ScoreBoard /> */}
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
            onKeyDown={(e) => { if (e.key === "Enter") handleProgramClick(program); }} // Handle keyboard interactions
          >
            <div className="flex gap-3">
              <h3 className="font-bold text-gray-800">{program.program_name}</h3>
              <h5 className="text-gray-600">{program.section}</h5>
            </div>

            {/* Detailed view when expanded */}
            {expandedProgram === program && (
              <div className="flex justify-start gap-7 overflow-auto mt-4">

                {program.results.map((result, resultIndex) => (
                  <div
                    key={resultIndex}
                    className=" bg-slate-200 rounded-md shadow-md mb-2 px-4 pb-2"
                  >
                    {/* Team color div */}
                    <div
                      className={`font-bold p-2 rounded-md mt-2 text-center ${teamColors[result.team]}`}
                    >
                      {result.team}
                    </div>

                    {/* Contestant and result details */}
                    <div className="ml-2">
                      <p className="text-gray-700 font-semibold whitespace-nowrap">
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

