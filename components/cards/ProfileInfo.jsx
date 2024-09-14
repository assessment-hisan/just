import React from 'react'

const ProfileInfo = ({userInfo}) => {
    


    const onLogout = () => {
      localStorage.clear()
      
    }

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-900 font-medium bg-slate-100">
       Raf
      </div>

      <div>
        <p className="text-sm font-bold text-black">Rafa</p>
        <button className="text-sm text-slate-700 underline" >
            Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileInfo
