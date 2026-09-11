// import React, { useState } from 'react'
// import { Link } from 'react-router';
// import SellProduct from '../components/SellProduct'


// const Navbar = () => {
  
//   return (
//     <div className="bg-yellow-500 text-xl flex justify-between p-2 px-8 z-50">
//       <div>Logo</div>
//       <div className='flex gap-3'>
//         <Link to="/"><div className='bg-amber-50 p-1 rounded-xl'>Home</div></Link>
//         <Link to="/contact-us"> <div className='bg-amber-50 p-1 rounded-xl'>Contact Us</div></Link>
//         <Link to='/about-us'><div className='bg-amber-50 p-1 rounded-xl'>About Us</div></Link>
//         <Link to="/myskill"><div className='bg-amber-50 p-1 rounded-xl'>Skill</div></Link>
//         <Link to="/register"><div className='bg-amber-50 p-1 rounded-xl'>Register</div></Link>
//         <Link to='/login'><div className='bg-amber-50 p-1 rounded-xl'>Login</div></Link>
//         <Link to="/product"><div className='bg-amber-50 p-1 rounded-xl'>Product</div></Link>
//         <Link to="/carousel"><div className='bg-amber-50 p-1 rounded-xl'>Carousel</div></Link>
//       </div>
      
//     </div>
//   )
// }

// export default Navbar;

import React, { useState } from 'react'
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import SellProduct from '../components/SellProduct'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/about-us", label: "About Us" },
    { to: "/myskill", label: "Skill" },
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
    { to: "/product", label: "Product" },
    { to: "/carousel", label: "Carousel" },
  ];

  return (
    <div className="bg-yellow-500 text-xl p-2 px-8 z-50 relative">
      <div className="flex justify-between items-center">
        <div>Logo</div>

        {/* Desktop links */}
        <div className='hidden md:flex gap-3'>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <div className='bg-amber-50 p-1 rounded-xl'>{link.label}</div>
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="flex flex-col gap-3 mt-3 md:hidden">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
              <div className='bg-amber-50 p-1 rounded-xl w-fit'>{link.label}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar;