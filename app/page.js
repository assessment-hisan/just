import { Divide } from "lucide-react";


export default function Home() {
  return (
    <>
    <div className="bg-[#91ddea] relative">
  {/* Empty space above the images */}
  <img src="/pattern2.png" height={10} className="pt-10"/>
  <div className="h-[35vh] md:h-[40vh] lg:h-[30vh]"></div>
  
  {/* Title with Montserrat font */}
  {/* <div className="absolute top-10 left-0 right-0 flex flex-col items-center justify-center pt-20 px-5 md:pt-0">
    <h1 className="font-black font-montserrat text-black text-5xl  lg:text-5xl">The voices of</h1>
    <h1 className="font-black font-montserrat text-black text-5xl  lg:text-5xl leading-none">Palestine Rise</h1>
  </div> */}

  {/* Logo Image - Full visibility on mobile, partially covered on larger screens */}
  <img 
    src="/LOGO (2).png" 
    className="absolute inset-0 z-10 w-full h-[65vh] object-contain 
    lg:h-[80vh] lg:top-[10%] md:top-[15%] sm:top-[20%] top-[25%]" 
    alt="Logo"
  />

  {/* College Image - Positioned in front of the logo on larger screens */}
  <img 
    src="/CLG.png" 
    className="w-full object-cover h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-full z-20 relative lg:-mt-[20vh]" 
    alt="College"
  />
</div>

{/* Footer or any section after */}
<div className="w-full bg-black relative">
  {/* Background Pattern Image */}
  <img 
    src="/pattern2.png" 
    className="w-full h-auto absolute top-0 left-0 z-0" 
    alt="Background Pattern"
  />
  
  {/* Container for Logo and Description */}
  <div className="flex flex-col sm:flex-row items-center  justify-center relative z-10 py-12 px-5">
    
    {/* Logo Section */}
    <div className="flex-shrink-0 mb-4 md:mb-0">
      <img 
        src="/squared logo.png" 
        className="h-24 w-24 md:h-80 md:w-80 object-contain" 
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
    className="w-full h-auto absolute bottom-0 left-0 z-0" 
    alt="Background Pattern"
  />
</div>
 

 <div className="h-[30vh] bg-black p-5">
  <h4 className="font-montserrat text-white ">NAHJ ARTS FEST'24</h4>
 </div>



  </>
  

  );
}
