import React from 'react'
import ProfileInfo from "./cards/ProfileInfo"
const Header = () => {
    const userInfo = {fullName : "handala"}
  return (
    <div className="bg-slate-50 flex items-center justify-between px-6 py-2 drop-shadow">
    <h2 className="text-xl font-medium text-black py-2">Handala</h2>
   {userInfo && ( <ProfileInfo userInfo={userInfo}/>)   }
  </div>
  )
}

export default Header
