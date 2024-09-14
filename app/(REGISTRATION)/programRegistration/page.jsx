import FilterSection from '../../../components/FilterSection'
import Header from "../../../components/Header"
import React from 'react'

const page = () => {
  const contestants = [
    { "name": "Alice Johnson", "admission_number": "123", "section": "ula", "class": 1 },
    { "name": "Bob Smith", "admission_number": "124", "section": "ula", "class": 1 },
    { "name": "Charlie Brown", "admission_number": "125", "section": "ula", "class": 2 },
    { "name": "Daisy Miller", "admission_number": "126", "section": "ula", "class": 2 },
    { "name": "Ella Davis", "admission_number": "127", "section": "thaniya", "class": 3 },
    { "name": "Frank Wilson", "admission_number": "128", "section": "thaniya", "class": 3 },
    { "name": "Grace Lee", "admission_number": "129", "section": "thaniya", "class": 4 },
    { "name": "Hank Moore", "admission_number": "130", "section": "thaniya", "class": 4 },
    { "name": "Ivy Taylor", "admission_number": "131", "section": "thanavia", "class": 5 },
    { "name": "Jack Anderson", "admission_number": "132", "section": "thanavia", "class": 5 },
    { "name": "Kara Martinez", "admission_number": "133", "section": "thanavia", "class": 6 },
    { "name": "Leo Thompson", "admission_number": "134", "section": "thanavia", "class": 6 },
    { "name": "Mia White", "admission_number": "135", "section": "thanavia", "class": 7 },
    { "name": "Nathan Harris", "admission_number": "136", "section": "thanavia", "class": 7 },
    { "name": "Olivia Clark", "admission_number": "137", "section": "aliya", "class": 8 },
    { "name": "Paul Walker", "admission_number": "138", "section": "aliya", "class": 8 },
    { "name": "Quinn Lewis", "admission_number": "139", "section": "aliya", "class": 9 },
    { "name": "Rita Young", "admission_number": "140", "section": "aliya", "class": 9 },
    { "name": "Sam King", "admission_number": "141", "section": "aliya", "class": 10 },
    { "name": "Tina Scott", "admission_number": "142", "section": "aliya", "class": 10 },
    { "name": "Ursula Wright", "admission_number": "143", "section": "ula", "class": 1 },
    { "name": "Victor Adams", "admission_number": "144", "section": "ula", "class": 2 },
    { "name": "Wendy Carter", "admission_number": "145", "section": "thaniya", "class": 3 },
    { "name": "Xander Green", "admission_number": "146", "section": "thaniya", "class": 4 },
    { "name": "Yara Evans", "admission_number": "147", "section": "thanavia", "class": 5 },
    { "name": "Zane Robinson", "admission_number": "148", "section": "thanavia", "class": 6 },
    { "name": "Ava Lewis", "admission_number": "149", "section": "thanavia", "class": 7 },
    { "name": "Ben Walker", "admission_number": "150", "section": "aliya", "class": 8 },
    { "name": "Catherine Lee", "admission_number": "151", "section": "aliya", "class": 9 },
    { "name": "Daniel Kim", "admission_number": "152", "section": "aliya", "class": 10 },
    { "name": "Emily Adams", "admission_number": "153", "section": "ula", "class": 1 },
    { "name": "Frankie Martin", "admission_number": "154", "section": "ula", "class": 2 },
    { "name": "Gina Thomas", "admission_number": "155", "section": "thaniya", "class": 3 },
    { "name": "Henry Wilson", "admission_number": "156", "section": "thaniya", "class": 4 },
    { "name": "Irene Scott", "admission_number": "157", "section": "thanavia", "class": 5 },
    { "name": "James Taylor", "admission_number": "158", "section": "thanavia", "class": 6 },
    { "name": "Karen Harris", "admission_number": "159", "section": "thanavia", "class": 7 },
    { "name": "Liam Clark", "admission_number": "160", "section": "aliya", "class": 8 },
    { "name": "Monica Wright", "admission_number": "161", "section": "aliya", "class": 9 },
    { "name": "Nathan Green", "admission_number": "162", "section": "aliya", "class": 10 }
  ]
  
  const programs = [
    {
      "program_name": "Solo Singing",
      "section": "ula",
      "stage": true,
      "category": "individual",
      "max_contestants": 2
    },
    {
      "program_name": "Group Dance",
      "section": "thaniya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 3
    },
    {
      "program_name": "Drama Performance",
      "section": "thanaviya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 4
    },
    {
      "program_name": "Elocution",
      "section": "aliya",
      "stage": true,
      "category": "individual",
      "max_contestants": 2
    },
    {
      "program_name": "Solo Dance",
      "section": "khulliya",
      "stage": true,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Quiz Competition",
      "section": "ula",
      "stage": false,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 3
    },
    {
      "program_name": "Painting Competition",
      "section": "thaniya",
      "stage": false,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Essay Writing",
      "section": "thanaviya",
      "stage": false,
      "category": "individual",
      "max_contestants": 2
    },
    {
      "program_name": "Group Debate",
      "section": "aliya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 4
    },
    {
      "program_name": "Poetry Recital",
      "section": "khulliya",
      "stage": true,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Chess Tournament",
      "section": "ula",
      "stage": false,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Solo Instrumental",
      "section": "thaniya",
      "stage": true,
      "category": "individual",
      "max_contestants": 2
    },
    {
      "program_name": "Theatre Play",
      "section": "thanaviya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 8
    },
    {
      "program_name": "Short Film",
      "section": "aliya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 5
    },
    {
      "program_name": "Creative Writing",
      "section": "khulliya",
      "stage": false,
      "category": "individual",
      "max_contestants": 3
    },
    {
      "program_name": "Skit",
      "section": "ula",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 4
    },
    {
      "program_name": "Speech Contest",
      "section": "thaniya",
      "stage": true,
      "category": "individual",
      "max_contestants": 3
    },
    {
      "program_name": "Group Discussion",
      "section": "thanaviya",
      "stage": false,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 6
    },
    {
      "program_name": "Solo Acting",
      "section": "aliya",
      "stage": true,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Photography",
      "section": "khulliya",
      "stage": false,
      "category": "individual",
      "max_contestants": 2
    },
    {
      "program_name": "Solo Recitation",
      "section": "ula",
      "stage": true,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Collage Making",
      "section": "thaniya",
      "stage": false,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 4
    },
    {
      "program_name": "Science Exhibition",
      "section": "thanaviya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 5
    },
    {
      "program_name": "Solo Mimicry",
      "section": "aliya",
      "stage": true,
      "category": "individual",
      "max_contestants": 2
    },
    {
      "program_name": "Model Making",
      "section": "khulliya",
      "stage": false,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Group Song",
      "section": "ula",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 5
    },
    {
      "program_name": "Cartooning",
      "section": "thaniya",
      "stage": false,
      "category": "individual",
      "max_contestants": 1
    },
    {
      "program_name": "Debate",
      "section": "thanaviya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 3
    },
    {
      "program_name": "Poster Making",
      "section": "aliya",
      "stage": false,
      "category": "individual",
      "max_contestants": 2
    },
    {
      "program_name": "Group Drama",
      "section": "khulliya",
      "stage": true,
      "category": "group",
      "max_groups": 2,
      "max_members_per_group": 7
    }
  ]
  
  return (
    <div className='h-[100vh] bg-slate-100'>
      <Header/>
       <div className='pt-5'>
       <FilterSection programs={programs} contestants={contestants}/>
       </div>
    </div>
  )
}

export default page
