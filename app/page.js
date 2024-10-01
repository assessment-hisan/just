import { Divide } from "lucide-react";


export default function Home() {
  return (
    <>
    <div className="bg-[#91ddea] relative">
  {/* Empty space above the images */}
  <div className="h-[35vh] md:h-[40vh] lg:h-[30vh]"></div>
  
  {/* Title with Montserrat font */}
  <div className="absolute top-10 left-0 right-0 flex flex-col items-center justify-center pt-20 px-5 md:pt-0">
    <h1 className="font-black font-montserrat text-black text-5xl  lg:text-5xl">The voices of</h1>
    <h1 className="font-black font-montserrat text-black text-5xl  lg:text-5xl leading-none">Palestine Rise</h1>
  </div>

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
<div className="h-[30vh] w-full bg-black"></div>

  </>
  

  );
}
