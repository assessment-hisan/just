import Link from 'next/link'
import  { Metadata } from 'next'
 
export const metadata = {
  title: 'HANDALA',
 
}
export default function Home() {
  return (
    <>
      <div className="bg-[#91ddea] relative">
        {/* Empty space above the images */}
        <img 
          src="/pattern2.png" 
          className="w-full h-8 md:h-auto absolute top-10 left-0 z-0" 
          alt="Background Pattern"
        />
        <div className="h-[35vh] md:h-[40vh] lg:h-[15vh]"></div>
        <img 
          src="/sq.png" 
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[25%] w-[90%] h-auto 
          block md:hidden " 
          alt="Logo"
        />
        {/* Logo Image - Full visibility on mobile, partially covered on larger screens */}
        <img 
          src="/LOGO (2).png" 
          className="absolute inset-0 z-10 w-full h-[65vh] object-contain 
          lg:h-[80vh] lg:top-[10%] md:top-[15%] sm:top-[20%] top-[25%]" 
          alt="Logo"
        />
  
        {/* College Image - Positioned in front of the logo on larger screens */}
        <div className="relative z-20">
          <img 
            src="/CLG.png" 
            className="w-full object-cover h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-full z-20" 
            alt="College"
          />
          
          {/* Result Button */}
          <Link href="/result">
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-200 text-red-600 font-montserrat font-bold text-xl py-2 px-8 rounded-2xl shadow hover:bg-gray-200 cursor-pointer">
              Results
            </div>
          </Link>
        </div>
      </div>
  
      {/* Footer or any section after */}
      <div className="w-full bg-black relative">
        {/* Background Pattern Image */}
        <img 
          src="/pattern2.png" 
          className="w-full h-8 md:h-auto absolute top-0 left-0 z-0" 
          alt="Background Pattern"
        />
        
        {/* Container for Logo and Description */}
        <div className="flex flex-col sm:gap-3  sm:flex-row items-center sm:items-start justify-center relative z-10 py-12 px-5">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img 
              src="/squared logo.png" 
              className="h-24 w-24 sm:h-80 sm:w-80 object-contain" 
              alt="Logo"
            />
          </div>
          
          {/* Description Section */}
          <div className="text-white text-center md:text-left md:ml-8 ">
            <h3 className="text-3xl font-montserrat font-extrabold mb-2">About </h3>
            <p className="px-8 sm:px-0 mb-4 font-montserrat ">
              The Handala Arts Fest is a powerful cultural and artistic event conducted by Nahjurrashad Islamic College, organized by the students of Nahj in a united stand of solidarity with Palestine. The festival draws its name and inspiration from Handala, the iconic symbol of Palestinian resistance, representing the unshakable spirit of the people in their struggle for justice and liberation.
            </p>
            <p className="hidden md:block font-montserrat">
              This event serves as a platform where students express their commitment to the cause of Palestine through various forms of artistic expression, including visual art, music, theater, and literature. With a focus on creativity as a means of activism, the Handala Arts Fest amplifies the voices of the oppressed, promotes awareness, and fosters a sense of global solidarity.
            </p>
          </div>
        </div>
  
        <img 
          src="/pattern2.png" 
          className="w-full h-8 md:h-auto absolute bottom-0 left-0 z-0" 
          alt="Background Pattern"
        />
      </div>
      
      <div className="h-[30vh] bg-black p-5">
        <h4 className="font-montserrat text-white">HANDALA   NAHJ ARTS FEST'24</h4>
        <div className='mt-3'>
          <h4 className='font-montserrat font-bold text-white'>Nahjurrashad Islamic College</h4>
          <h6 className='font-montserrat text-white'>Chamakkala Beach Road Chamakkala, Chenthrapini, Kerala 680687</h6>
        </div>
      </div>
    </>
  );
}
