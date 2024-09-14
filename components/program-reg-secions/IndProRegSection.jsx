"use client"
import React, { useState } from "react";
import SearchDropdown from "../searchBar/SearchDropdown";

const IndProRegSection = ({ selectedProgram, contestants }) => {
  const [participants, setParticipants] = useState(
    Array(selectedProgram.max_contestants).fill(null)
  );
  const [registeredNames, setRegisteredNames] = useState([]);

  const handleSelect = (index, candidate) => {
    const newParticipants = [...participants];
    newParticipants[index] = candidate;
    setParticipants(newParticipants);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegisteredNames(participants.filter(p => p !== null));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        {selectedProgram.program_name}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {participants.map((participant, index) => (
          <div key={index} className="flex flex-col mb-4">
            <label className="text-gray-600">Participant {index + 1}:</label>
            <SearchDropdown
              options={contestants}
              onSelect={(option) => handleSelect(index, option)}
              searchProperties={["admission_number", "name"]}
              displayProperty="name"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Register
        </button>
      </form>

      {registeredNames.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700">
            Registered Participants:
          </h3>
          {registeredNames.map((participant, index) => (
            <p key={index} className="text-gray-800">
              Participant {index + 1}: {participant.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndProRegSection;
