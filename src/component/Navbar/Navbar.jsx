// import { Link } from "react-router-dom"

// const Navbar = () => {
//   return (
//          <div className="bg-[#1A1A1A] text-white">
//           <header className="container mx-auto py-6 bg-black">
//         <nav className="flex items-center justify-between md:px-4">
//           <Link to="/" className="text-[#FF0000] text-3xl font-bold">
//             Gumo
//           </Link>
//           <div className="hidden  md:flex items-center gap-8 px-[40rem]">
//             <Link to="/" className="hover:text-[#FF0000] transition-colors">
//               Creator
//             </Link>
//             <Link to="/traveller" className="hover:text-[#FF0000] transition-colors">
//               Traveller
//             </Link>
//             <Link to="/partner" className="hover:text-[#FF0000] transition-colors">
//               Partner
//             </Link>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

// export default Navbar

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#1A1A1A] text-white relative">
      <header className="container mx-auto py-4 lg:py-6">
        <nav className="flex items-center justify-between px-4">
          <Link 
            to="/" 
            className="text-[#FF0000] text-2xl md:text-3xl font-bold relative z-20"
          >
            Gumo
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden relative z-20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link 
              to="/" 
              className="hover:text-[#FF0000] transition-colors duration-200 font-medium"
            >
              Creator
            </Link>
            <Link 
              to="/traveller" 
              className="hover:text-[#FF0000] transition-colors duration-200 font-medium"
            >
              Traveller
            </Link>
            <Link 
              to="/partner" 
              className="hover:text-[#FF0000] transition-colors duration-200 font-medium"
            >
              Partner
            </Link>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              fixed inset-0 bg-[#1A1A1A] z-10 md:hidden
              transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                to="/" 
                className="text-2xl hover:text-[#FF0000] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Creator
              </Link>
              <Link 
                to="/traveller" 
                className="text-2xl hover:text-[#FF0000] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Traveller
              </Link>
              <Link 
                to="/partner" 
                className="text-2xl hover:text-[#FF0000] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Partner
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;