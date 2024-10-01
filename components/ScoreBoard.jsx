import React from "react";

// Mock Data
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
  
const calculateTeamScores = (data) => {
    const teams = ["Ramallah", "Jerusalem", "Bethlehem", "Nazareth"];
    const sections = ["Ula", "Thaniya", "Thanaviya", "Aliya", "Khulliya"];
  
    // Initialize score object for each team with zero for all sections
    const scoreBoard = teams.reduce((acc, team) => {
      acc[team] = {
        total: 0,
        sections: sections.reduce((secAcc, section) => {
          secAcc[section] = 0;
          return secAcc;
        }, {}),
      };
      return acc;
    }, {});
  
    // Points based on position
    const positionPoints = {
      1: 3,
      2: 2,
      3: 1,
    };
  
    // Points based on grade
    const gradePoints = {
      A: 5,
      B: 3,
    };
  
    // Calculate scores
    data.forEach((program) => {
      const section = program.section;
      program.results.forEach((result) => {
        const team = result.team;
        const posPoints = positionPoints[result.position] || 0;
        const grdPoints = gradePoints[result.grade] || 0;
        const totalPoints = posPoints + grdPoints;
  
        scoreBoard[team].sections[section] += totalPoints;
        scoreBoard[team].total += totalPoints;
      });
    });
  
    return scoreBoard;
  };
  
  const totalScores = calculateTeamScores(mockData);
  console.log(totalScores);
  

const ScoreBoard = () => {
  const totalScores = calculateTeamScores(mockData);
  const teams = Object.keys(totalScores);
  const sections = ["Ula", "Thaniya", "Thanaviya", "Aliya", "Khulliya"];

  return (
    <div className="flex bg-transparent justify-center mb-7">
      <div className="max-w-xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Scoreboard</h2>
        <div className="overflow-x-auto rounded-lg shadow-xl">
          <table className=" bg-slate-100 w-full  border-2 border-slate-300 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="pl-4 py-2 text-left">Team</th>
                {sections.map((section) => (
                  <th key={section} className="px-2 py-2 text-left">{section}</th>
                ))}
                <th className="px-4 py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team} className="border-t">
                  <td className="px-4 py-2">{team}</td>
                  {sections.map((section) => (
                    <td key={section} className="pr-5 py-2 text-right">
                      {totalScores[team].sections[section]}
                    </td>
                  ))}
                  <td className="pr-4 py-2 font-bold text-right">{totalScores[team].total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
