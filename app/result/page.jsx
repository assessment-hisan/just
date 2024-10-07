"use client"
import { useState } from "react";

import Leaderboard from "../../components/Leaderboard"
import Result from "../../components/Result"
// Sample data


const Page = () => {
  const [activeTab, setActiveTab] = useState('results')  

  return (
    <>
    <div className="w-full h-[10vh] bg-slate-800 flex items-center justify-between md:justify-around px-5">
      <img src="/LOGO SITE (1).png" height={75} width={75} />
      <img src="/sq.png" height={110} width={110} />
    </div>



  
  
  
  <div className="p-6 bg-slate-300 min-h-screen">
     
  <div className="space-y-4 sm:flex sm:justify-between items-end mt-6 max-w-3xl mx-auto my-5">
      <h1 className="font-montserrat font-semibold text-3xl"> Results Dashboard</h1>

      <div className="flex justify-center gap-3 ">
        <button
          className={`px-4 py-2 rounded font-montserrat ${activeTab === 'leaderboard' ? 'bg-slate-900 text-white' : 'bg-slate-400  text-black'}`}
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
        <button
          className={`px-4 py-2 rounded font-montserrat ${activeTab === 'results' ? 'bg-slate-900 text-white' : 'bg-slate-400  text-black'}`}
          onClick={() => setActiveTab('results')}
        >
          Program Results
        </button>
      </div>
    </div>

      {activeTab === 'leaderboard' ? <Leaderboard /> : <Result />}
   


  </div>

  <div className="h-[30vh] bg-slate-900 p-5">
        <h4 className="font-montserrat text-white">HANDALA   NAHJ ARTS FEST'24</h4>
        <div className='mt-3'>
          <h4 className='font-montserrat font-bold text-white'>Nahjurrashad Islamic College</h4>
          <h6 className='font-montserrat text-white'>Chamakkala Beach Road Chamakkala, Chenthrapini, Kerala 680687</h6>
        </div>
      </div>
    </>
  );
};

export default Page;

