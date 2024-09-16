"use client"
import Header from "../../../components/Header";
import FilterSection from '../../../components/FilterSection';
import IndProRegSection from "../../../components/program-reg-secions/IndProRegSection";
import GrpProRegSection from "../../../components/program-reg-secions/GrpProRegSection";
import React, { useState } from 'react';

const page =  () => {
  const programs =[
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
  
  
  const contestants = [
    {
      "name": "Alice Johnson",
      "team": "Team A",
      "email": "alice.johnson@example.com",
      "phone": "123-456-7890",
      "registered_programs": []
    },
    {
      "name": "Bob Smith",
      "team": "Team B",
      "email": "bob.smith@example.com",
      "phone": "234-567-8901",
      "registered_programs": []
    },
    {
      "name": "Charlie Davis",
      "team": "Team A",
      "email": "charlie.davis@example.com",
      "phone": "345-678-9012",
      "registered_programs": []
    },
    {
      "name": "Dana Lee",
      "team": "Team C",
      "email": "dana.lee@example.com",
      "phone": "456-789-0123",
      "registered_programs": []
    },
    {
      "name": "Eve Carter",
      "team": "Team B",
      "email": "eve.carter@example.com",
      "phone": "567-890-1234",
      "registered_programs": []
    }
  ];

  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className='h-[100vh] bg-slate-100'>
      <Header />
      <div className='pt-5 bg-slate-100 flex flex-col  items-center pb-40'>
        <FilterSection 
          programs={programs} 
          onProgramSelect={setSelectedProgram} 
        />
        {/* Show program registration sections based on selected program */}
        {selectedProgram && (
          selectedProgram.category === "individual" ? (
            <IndProRegSection selectedProgram={selectedProgram} contestants={contestants} />
          ) : (
            <GrpProRegSection selectedProgram={selectedProgram} contestants={contestants} />
          )
        )}
      </div>
    </div>
  );
};

export default page;
