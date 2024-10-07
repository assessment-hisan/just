import { toFormData } from "axios";


const calculateTeamScores = (data) => {
  // Define team names as per the data
  const teams = ["Rām Allāh", "Jabalia", "Ġazzah", "Rafaḥ"];
  const sections = ["BIDĀYAH", "ŪLĀ", "THĀNIYAH", "THĀNAWIYYAH", "ᾹLIYAH", "KULLIYYAH"];

  // Initialize score object for each team
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

  // Calculate scores
  data.forEach((program) => {
    const section = program.section;
    program.results.forEach((result) => {
      const team = result.team;
      const totalPoints = result.total_result || 0; // Use total_result directly from mockData
      // Ensure the team exists in scoreBoard before adding points
      if (scoreBoard[team]) {
        scoreBoard[team].sections[section] += totalPoints;
        scoreBoard[team].total += totalPoints;
      }
    });
  });
 
  return scoreBoard;
};



const ScoreBoard = ({data}) => {
  const totalScores = calculateTeamScores(data);
  const teams = Object.keys(totalScores);
  const sections = ["BIDĀYAH", "ŪLĀ", "THĀNIYAH", "THĀNAWIYYAH", "ᾹLIYAH", "KULLIYYAH"];

  return (
    <div className="flex bg-transparent justify-center mb-7">
      <div className="max-w-xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Scoreboard</h2>
        <div className="overflow-x-auto rounded-lg shadow-lg border-1 border-slate-300">
          <table className="bg-slate-100 w-full">
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
                <tr key={team} className="border-t whitespace-nowrap">
                  <td className="px-3 py-2">{team}</td>
                  {sections.map((section) => (
                    <td key={section} className="pr-5 py-2 text-right">
                      {totalScores[team]?.sections[section] ?? 0}
                    </td>
                  ))}
                  <td className="pr-4 py-2 font-bold text-right">
                    {totalScores[team]?.total ?? 0}
                  </td>
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