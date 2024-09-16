import React from 'react'

const page = () => {
  const contestant ={
        "_id": "66e4e764660b1b4b8f877a07",
        "name": "Bob Smith",
        "admission_number": 124,
        "section": "ula",
        "class": 1,
        "team": "team a",
        "registered_programs": [
            {
                "role": "individual",
                "createdAt": "2024-09-15T08:10:58.014Z",
                "_id": "66e4e47a4aa89c6e61548794"
            }
        ],
        "__v": 2,
        "registeredProgramsDetails": [
            {
                "role": "individual",
                "createdAt": "2024-09-15T08:10:58.014Z",
                "_id": "66e4e47a4aa89c6e61548794",
                "programDetails": {
                    "_id": "66e4e47a4aa89c6e61548794",
                    "max_contestants": 2
                }
            }
        ]
    
}
  const { name, admission_number, section, class: className, team, registeredProgramsDetails } = contestant;

  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col items-center p-4">
      {/* Contestant Photo */}
      <div className="w-44 h-44 bg-gray-500 rounded-xl mb-4">
        <img
          src={`/path/to/photo/${contestant._id}`} // Replace with actual photo path
          alt={`${name}'s photo`}
          className="w-full h-full rounded-sm object-cover"
        />
      </div>

      {/* Contestant Details */}
      <h1 className="text-2xl text-slate-900  font-semibold mb-2">{name}</h1>
      <p className="text-lg text-gray-600 mb-1">Admission No: {admission_number}</p>
      <p className="text-lg text-gray-600 mb-1">Section: {section}</p>
      <p className="text-lg text-gray-600 mb-1">Class: {className}</p>
      <p className="text-lg text-gray-600 mb-4">Team: {team}</p>

      {/* Registered Programs */}
      <div className="w-full max-w-xl bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Registered Programs</h2>
        <ul className="list-disc list-inside space-y-2">
          {registeredProgramsDetails.length > 0 ? (
            registeredProgramsDetails.map((program) => (
              <div key={program._id} className="border-b pb-2">
                <div className="font-semibold text-slate-900">{program.programDetails.programName}</div>
                <p className="text-sm text-gray-600">Role: {program.role}</p>
                <p className="text-sm text-gray-600">Max Contestants: {program.programDetails.max_contestants}</p>
                <p className="text-sm text-gray-600">Registered On: {new Date(program.createdAt).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No registered programs</p>
          )}
        </ul>
      </div>
    </div>
  );
};
export default page
