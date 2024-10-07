import React from 'react';

const Leaderboard = () => {
  const campTop = [
    { name: 'Nasim H ', team: 'Rafaḥ', score: 54 },
    { name: 'MINHAJ PC', team: 'Ġazzah', score: 52 },
    { name: 'Munavarsha Kamal ', team: 'Rafaḥ', score: 49 },
  ];
  const bidayaTop = [
    { name: 'ZAINUDHEEN IRFAN', team: 'Ġazzah', score: 34 },
    { name: 'MOHAMMED JASIM', team: 'Rām Allāh', score: 29 },
    { name: 'Ali Munthasir K F ', team: 'Ġazzah', score: 23 },
  ];
  const ulaTop = [
    { name: 'Nasim H ', team: 'Rafaḥ', score: 54 },
    { name: 'REZIN MUHAMMED', team: 'Ġazzah', score: 46 },
    { name: 'AMEEN HAMSA ', team: 'Ġazzah', score: 42 },
  ];
  const thaTop = [
    { name: 'MUHAMMAD NASEEF A N ', team: 'Rafaḥ', score: 34 },
    { name: 'NIHAL NAZAR', team: 'Rām Allāh', score: 33 },
    { name: 'MUHAMMED SHAMEEM.K ', team: 'Ġazzah', score: 32 },
  ];
  const thwTop = [
    { name: 'Munavarsha Kamal ', team: 'Rafaḥ', score: 49 },
    { name: 'IRFAN P NAISAL', team: 'Ġazzah', score: 48 },
    { name: 'MUHAMMED MA-AMOON  ', team: 'Ġazzah', score: 45 },
  ];
  const AlyTop = [
    { name: 'MINHAJ PC', team: 'Ġazzah', score: 52 },
    { name: 'MUHAMMED AMEEN T', team: 'Jabalia', score: 45 },
    { name: 'JAFAKASH JAHAN ', team: 'Rafaḥ', score: 44 },
    { name: 'Muhammed Fahim  ', team: 'Rafaḥ', score: 44 },
  ];
  return (
<div className="bg-slate-300 p-6"> 
  <div className="flex flex-col items-center">
  <h1 className="font-montserrat font-semibold text-2xl">CAMPUS TOPPER</h1>
    <div className="w-full overflow-x-auto flex justify-start sm:justify-center gap-5 mt-3">
       {/* Your horizontally scrolling content goes here */}
       {campTop?.map((topper, index) => (
        <div key={index} className="relative bg-slate-400 rounded-lg overflow-hidden h-56 w-56 flex-shrink-0">
           {/* SVG or image as background */}
           <div className="absolute inset-0 opacity-40">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-full w-full"> <path fill="#282828" d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z"/>
             </svg>
             </div>
             {/* Position badge */}
              {index === 0 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 1st </div> )}
              {index === 1 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 2nd </div> )}
              {index === 2 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 3rd </div> )}
              {/* Topper details */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="font-bold font-montserrat text-lg">{topper.name}</h3>
                 <p className="text-sm font-montserrat">{topper.team}</p>
                 <p className="text-sm font-montserrat">Score: {topper.score}</p>
              </div>
        </div> ))}
    </div>

    <h1 className="font-montserrat font-semibold text-2xl mt-10">BIDĀYAH</h1>
    <div className="w-full overflow-x-auto flex justify-start sm:justify-center gap-5 mt-3">
       {/* Your horizontally scrolling content goes here */}
       {bidayaTop?.map((topper, index) => (
        <div key={index} className="relative bg-slate-400 rounded-lg overflow-hidden h-56 w-56 flex-shrink-0">
           {/* SVG or image as background */}
           <div className="absolute inset-0 opacity-40">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-full w-full"> <path fill="#282828" d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z"/>
             </svg>
             </div>
             {/* Position badge */}
              {index === 0 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 1st </div> )}
              {index === 1 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 2nd </div> )}
              {index === 2 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 3rd </div> )}
              {/* Topper details */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="font-bold font-montserrat text-lg uppercase">{topper.name}</h3>
                 <p className="text-sm font-montserrat">{topper.team}</p>
                 <p className="text-sm font-montserrat">Score: {topper.score}</p>
              </div>
        </div> ))}
    </div>

    <h1 className="font-montserrat font-semibold text-2xl mt-10">ŪLĀ</h1>
    <div className="w-full overflow-x-auto flex justify-start sm:justify-center gap-5 mt-3">
       {/* Your horizontally scrolling content goes here */}
       {ulaTop?.map((topper, index) => (
        <div key={index} className="relative bg-slate-400 rounded-lg overflow-hidden h-56 w-56 flex-shrink-0">
           {/* SVG or image as background */}
           <div className="absolute inset-0 opacity-40">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-full w-full"> <path fill="#282828" d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z"/>
             </svg>
             </div>
             {/* Position badge */}
              {index === 0 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 1st </div> )}
              {index === 1 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 2nd </div> )}
              {index === 2 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 3rd </div> )}
              {/* Topper details */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="font-bold font-montserrat text-lg uppercase">{topper.name}</h3>
                 <p className="text-sm font-montserrat">{topper.team}</p>
                 <p className="text-sm font-montserrat">Score: {topper.score}</p>
              </div>
        </div> ))}
    </div>

    <h1 className="font-montserrat font-semibold text-2xl mt-10">THĀNIYAH</h1>
    <div className="w-full overflow-x-auto flex justify-start sm:justify-center gap-5 mt-3">
       {/* Your horizontally scrolling content goes here */}
       {thaTop?.map((topper, index) => (
        <div key={index} className="relative bg-slate-400 rounded-lg overflow-hidden h-56 w-56 flex-shrink-0">
           {/* SVG or image as background */}
           <div className="absolute inset-0 opacity-40">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-full w-full"> <path fill="#282828" d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z"/>
             </svg>
             </div>
             {/* Position badge */}
              {index === 0 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 1st </div> )}
              {index === 1 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 2nd </div> )}
              {index === 2 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 3rd </div> )}
              {/* Topper details */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="font-bold font-montserrat text-lg uppercase">{topper.name}</h3>
                 <p className="text-sm font-montserrat">{topper.team}</p>
                 <p className="text-sm font-montserrat">Score: {topper.score}</p>
              </div>
        </div> ))}
    </div>

    <h1 className="font-montserrat font-semibold text-2xl mt-10">ʿᾹLIYAH</h1>
    <div className="w-full overflow-x-auto flex justify-start sm:justify-center gap-5 mt-3">
       {/* Your horizontally scrolling content goes here */}
       {AlyTop?.map((topper, index) => (
        <div key={index} className="relative bg-slate-400 rounded-lg overflow-hidden h-56 w-56 flex-shrink-0">
           {/* SVG or image as background */}
           <div className="absolute inset-0 opacity-40">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-full w-full"> <path fill="#282828" d="M135.832 140.848h-70.9c-2.9 0-5.6-1.6-7.4-4.5-1.4-2.3-1.4-5.7 0-8.6l4-8.2c2.8-5.6 9.7-9.1 14.9-9.5 1.7-.1 5.1-.8 8.5-1.6 2.5-.6 3.9-1 4.7-1.3-.2-.7-.6-1.5-1.1-2.2-6-4.7-9.6-12.6-9.6-21.1 0-14 9.6-25.3 21.5-25.3s21.5 11.4 21.5 25.3c0 8.5-3.6 16.4-9.6 21.1-.5.7-.9 1.4-1.1 2.1.8.3 2.2.7 4.6 1.3 3 .7 6.6 1.3 8.4 1.5 5.3.5 12.1 3.8 14.9 9.4l3.9 7.9c1.5 3 1.5 6.8 0 9.1-1.6 2.9-4.4 4.6-7.2 4.6zm-35.4-78.2c-9.7 0-17.5 9.6-17.5 21.3 0 7.4 3.1 14.1 8.2 18.1.1.1.3.2.4.4 1.4 1.8 2.2 3.8 2.2 5.9 0 .6-.2 1.2-.7 1.6-.4.3-1.4 1.2-7.2 2.6-2.7.6-6.8 1.4-9.1 1.6-4.1.4-9.6 3.2-11.6 7.3l-3.9 8.2c-.8 1.7-.9 3.7-.2 4.8.8 1.3 2.3 2.6 4 2.6h70.9c1.7 0 3.2-1.3 4-2.6.6-1 .7-3.4-.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2-2-.2-5.8-.8-9-1.6-5.8-1.4-6.8-2.3-7.2-2.5-.4-.4-.7-1-.7-1.6 0-2.1.8-4.1 2.2-5.9.1-.1.2-.3.4-.4 5.1-3.9 8.2-10.7 8.2-18-.2-11.9-8-21.5-17.7-21.5z"/>
             </svg>
             </div>
             {/* Position badge */}
              {index === 0 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 1st </div> )}
              {index === 1 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 2nd </div> )}
              {index === 2 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 3rd </div> )}
              {index === 3 && ( <div className="absolute top-2 left-2 text-black font-bold px-2 py-1 rounded-full"> 3rd </div> )}
              {/* Topper details */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="font-bold font-montserrat text-lg uppercase">{topper.name}</h3>
                 <p className="text-sm font-montserrat ">{topper.team}</p>
                 <p className="text-sm font-montserrat ">Score: {topper.score}</p>
              </div>
        </div> ))}
    </div>
  </div> 
</div>
  );
};

export default Leaderboard;
