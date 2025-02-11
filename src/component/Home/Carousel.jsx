// import { ChevronLeft, ChevronRight } from "lucide-react"

// export default function Carousel() {
//   return (
//     <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-12 md:py-24">
//       {/* Hero Section */}
//       <div className="container mx-auto max-w-7xl">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-20 max-w-5xl mx-auto">
//           Effortlessly set up and launch in minutes, <span className="text-red-500">easier</span> than your{" "}
//           <span className="text-red-500">easiest</span> trip.
//         </h1>

//         {/* Main Content */}
//         <div className="relative">
//           {/* Navigation Arrows */}
//           <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 hidden md:block">
//             <ChevronLeft className="w-10 h-10 text-white/50 hover:text-white transition-colors" />
//           </button>
//           <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 hidden md:block">
//             <ChevronRight className="w-10 h-10 text-white/50 hover:text-white transition-colors" />
//           </button>

//           {/* Content Grid */}
//           <div className="grid md:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-center">
//             {/* Left Column */}
//             <div className="text-center md:text-left space-y-4">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 mb-4">
//                 <span className="text-2xl font-bold">1</span>
//               </div>
//               <h2 className="text-red-500 text-3xl lg:text-4xl font-bold">Embark</h2>
//               <p className="text-lg text-white/80">Sign up and embark on creating your travel hub effortlessly</p>
//             </div>

//             {/* Right Column - Screenshots */}
//             <div className="grid grid-cols-3 gap-4 lg:gap-8">
//               {/* Earnings Screenshot */}
//               <div className="rounded-2xl overflow-hidden border border-white/10">
//                 <img
//                   src="/Pagination4.png"
//                   alt="Earnings dashboard"
//                   width={400}
//                   height={800}
//                   className="w-full h-auto"
//                 />
//               </div>

//               {/* Profile Screenshot */}
//               <div className="rounded-2xl overflow-hidden border border-white/10">
//                 <img
//                   src="/Pagination1.png"
//                   alt="Profile page"
//                   width={400}
//                   height={800}
//                   className="w-full h-auto"
//                 />
//               </div>
//               {/* Social Screenshot */}
//               <div className="rounded-2xl overflow-hidden border border-white/10">
//                 <img
//                   src="/Pagination2.png"
//                   alt="Social post"
//                   width={400}
//                   height={800}
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";



const slides = [
  {
    number: 1,
    title: "Embark",
    description: "Sign up and embark on creating your travel hub effortlessly",
    images: ["/Pagination4.png", "/Pagination1.png", "/Pagination2.png"]
  },
  {
    number: 2,
    title: "Create",
    description: "Design and customize your travel experiences with ease",
    images: ["/Pagination2.png", "/Pagination4.png", "/Pagination1.png"]
  },
  {
    number: 3,
    title: "Share",
    description: "Connect with travelers and share your unique experiences",
    images: ["/Pagination1.png", "/Pagination2.png", "/Pagination4.png"]
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-20 max-w-5xl mx-auto">
          Effortlessly set up and launch in minutes, <span className="text-red-500">easier</span> than your{" "}
          <span className="text-red-500">easiest</span> trip.
        </h1>

        {/* Main Content */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 hidden md:block 
                     hover:scale-110 transition-transform duration-200"
          >
            <ChevronLeft className="w-10 h-10 text-white/50 hover:text-white transition-colors" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 hidden md:block
                     hover:scale-110 transition-transform duration-200"
          >
            <ChevronRight className="w-10 h-10 text-white/50 hover:text-white transition-colors" />
          </button>

          {/* Content Grid */}
          <div className="grid md:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/20 mb-4">
                <span className="text-2xl font-bold">{slides[currentSlide].number}</span>
              </div>
              <h2 className="text-red-500 text-3xl lg:text-4xl font-bold">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg text-white/80">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Right Column - Screenshots */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {slides[currentSlide].images.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl overflow-hidden border border-white/10 transform transition-transform duration-500"
                >
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    width={400}
                    height={800}
                    className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-red-500 w-4' : 'bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
  );
}