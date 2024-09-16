"use client"
import React from 'react'
import FilterSection from '../../../components/FilterSection'
import Header from '../../../components/Header'
import { useState } from 'react'
const page = () => {
  const programs = [
    {
      "_id": "66e4e47a4aa89c6e61548794",
      "program_name": "Solo Singing",
      "section": "ula",
      "stage": true,
      "category": "individual",
      "max_contestants": 2,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e61548795",
      "program_name": "Group Dance",
      "section": "thaniya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 3,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e61548796",
      "program_name": "Drama Performance",
      "section": "thanaviya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 4,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e61548797",
      "program_name": "Elocution",
      "section": "aliya",
      "stage": false,
      "category": "individual",
      "max_contestants": 2,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e61548798",
      "program_name": "Solo Dance",
      "section": "khulliya",
      "stage": true,
      "category": "individual",
      "max_contestants": 1,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e61548799",
      "program_name": "Quiz Competition",
      "section": "ula",
      "stage": false,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 3,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e6154879a",
      "program_name": "Painting Competition",
      "section": "thaniya",
      "stage": false,
      "category": "individual",
      "max_contestants": 1,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e6154879b",
      "program_name": "Essay Writing",
      "section": "thanaviya",
      "stage": false,
      "category": "individual",
      "max_contestants": 2,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e6154879c",
      "program_name": "Group Debate",
      "section": "aliya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 4,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e6154879d",
      "program_name": "Poetry Recital",
      "section": "khulliya",
      "stage": true,
      "category": "individual",
      "max_contestants": 1,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e6154879e",
      "program_name": "Chess Tournament",
      "section": "ula",
      "stage": false,
      "category": "individual",
      "max_contestants": 1,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e6154879f",
      "program_name": "Solo Instrumental",
      "section": "thaniya",
      "stage": true,
      "category": "individual",
      "max_contestants": 2,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e615487a0",
      "program_name": "Theatre Play",
      "section": "thanaviya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 8,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e615487a1",
      "program_name": "Short Film",
      "section": "aliya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 5,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e615487a2",
      "program_name": "Creative Writing",
      "section": "khulliya",
      "stage": false,
      "category": "individual",
      "max_contestants": 3,
      "__v": 0
    },
    {
      "_id": "66e4e47a4aa89c6e615487a3",
      "program_name": "Skit",
      "section": "ula",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 4,
      "__v": 0
    }
  ]
  
  const individualRegistrations = [
    {
      _id: "66e6997d4d9ff9e520617df9",
      program: {
        program_name: "Solo Singing",
        section: "ula",
        max_contestants: 2,
      },
      individualContestants: [
        {
          contestant: { name: "Bob Smith", team: "team a" },
          _id: "66e6997d4d9ff9e520617dfb",
        },
        {
          contestant: { name: "Daisy Miller", team: "team a" },
          _id: "66e6997e4d9ff9e520617dff",
        },
      ],
    },
  ];
  
  const groupRegistrations = [
    {
      _id: "66e69a2b4d9ff9e520617e05",
      program: {
        program_name: "Drama Performance",
        section: "thanaviya",
        max_groups: 2,
        max_members_per_group: 4,
      },
      groups: [
        {
          groupNumber: 1,
          team: "Team A",
          contestants: [
            {
              contestant: { name: "Jack Anderson" },
              role: "group_leader",
              _id: "66e69a2b4d9ff9e520617e07",
            },
            {
              contestant: { name: "Ivy Taylor" },
              role: "group_member",
              _id: "66e69a2b4d9ff9e520617e08",
            },
          ],
        },
      ],
    },
    {
      _id: "66e69a944d9ff9e520617e13",
      program: {
        program_name: "Group Debate",
        section: "aliya",
        max_groups: 2,
        max_members_per_group: 4,
      },
      groups: [
        {
          groupNumber: 1,
          team: "Team A",
          contestants: [
            {
              contestant: { name: "Jack Anderson" },
              role: "group_leader",
              _id: "66e69a944d9ff9e520617e15",
            },
            {
              contestant: { name: "Ivy Taylor" },
              role: "group_member",
              _id: "66e69a944d9ff9e520617e16",
            },
          ],
        },
        {
          groupNumber: 2,
          team: "Team A",
          contestants: [
            {
              contestant: { name: "Frank Wilson" },
              role: "group_leader",
              _id: "66e69aae4d9ff9e520617",
            },
          ],
        },
      ],
    },
  ];  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIndividuals = individualRegistrations.filter(reg => 
    reg.program.program_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGroups = groupRegistrations.filter(reg => 
    reg.program.program_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <div className='bg-slate-100'>
      <Header />
      <div className='px-5 py-4'>
        <div className='mb-5'>
          {/* Search Bar */}
          <input 
            type='text' 
            placeholder='Search programs...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700'
          />
        </div>

        {/* Individual Programs Table */}
        <div className='mb-10'>
          <h2 className='text-xl font-semibold mb-4 text-black'>Individual Program Registrations</h2>
          <table className='w-full bg-white border border-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Program Name</th>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Section</th>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Max Contestants</th>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Contestants</th>
              </tr>
            </thead>
            <tbody>
              {filteredIndividuals.map((registration) => (
                <tr key={registration._id} className='hover:bg-gray-50'>
                  <td className='px-4 py-2 border-b'>{registration.program.program_name}</td>
                  <td className='px-4 py-2 border-b'>{registration.program.section}</td>
                  <td className='px-4 py-2 border-b'>{registration.program.max_contestants}</td>
                  <td className='px-4 py-2 border-b'>
                    <ul className='list-disc pl-5'>
                      {registration.individualContestants.map(ic => (
                        <li key={ic._id} className='text-gray-700'>
                          {ic.contestant.name} (Team: {ic.contestant.team})
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Group Programs Table */}
        <div>
          <h2 className='text-xl font-semibold mb-4 text-black'>Group Program Registrations</h2>
          <table className='w-full bg-white border border-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Program Name</th>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Section</th>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Max Groups</th>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Max Members per Group</th>
                <th className='px-4 py-2 border-b text-left text-gray-700'>Groups</th>
              </tr>
            </thead>
            <tbody>
              {filteredGroups.map((registration) => (
                <tr key={registration._id} className='hover:bg-gray-50'>
                  <td className='px-4 py-2 border-b'>{registration.program.program_name}</td>
                  <td className='px-4 py-2 border-b'>{registration.program.section}</td>
                  <td className='px-4 py-2 border-b'>{registration.program.max_groups}</td>
                  <td className='px-4 py-2 border-b'>{registration.program.max_members_per_group}</td>
                  <td className='px-4 py-2 border-b'>
                    {registration.groups.map((group) => (
                      <div key={group.groupNumber} className='mb-2'>
                        <strong>Group {group.groupNumber} (Team: {group.team}):</strong>
                        <ul className='list-disc pl-5'>
                          {group.contestants.map(c => (
                            <li key={c._id} className='text-gray-700'>
                              {c.contestant.name} - {c.role}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page
