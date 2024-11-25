// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className='text-lime-950 bg-lime-200 py-5'>
//             <ul style={{
//                 display: 'flex', listStyleType: 'none',
//                 justifyContent: '',
//                 width: '90%', margin: '0 auto', fontSize: '28px'
//             }}>
//                 <li className='w-[100px] mr-96 text-center hover:bg-lime-300 hover:font-semibold transition-all rounded-lg cursor-pointer py-1 hover:-translate-y-1 hover:scale-110'>
//                     <Link to="/">Tours</Link>
//                 </li>
//                 <li className='ml-72 mr-5 w-[100px] text-center hover:bg-lime-300 hover:font-semibold transition-all rounded-lg cursor-pointer py-1 text-2xl hover:-translate-y-1 hover:scale-110'>
//                     <Link to="/login">Login</Link>
//                 </li>
//                 <li className=' w-[200px] text-2xl text-center hover:bg-lime-300 hover:font-semibold transition-all rounded-lg cursor-pointer py-1 hover:-translate-y-1 hover:scale-110'>
//                     <Link to="/registration">Registration</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar; 







import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-lime-400 to-green-700 text-lime-950 py-5 ">
      <ul className="flex flex-row items-center md:justify-between list-none w-[90%] mx-auto text-lg md:text-xl lg:text-2xl space-y-4 md:space-y-0">
        <li className="text-center w-30% sm:w-70% hover:bg-lime-300 hover:font-semibold transition-all rounded-lg cursor-pointer py-1 px-3 hover:-translate-y-1 hover:scale-110">
          <Link to="/">
          Tours
          </Link>
        </li>
        <div className='ml-[160px] sm:ml-[300px] w-70% sm:w-30%'>

        <li className="text-center hover:bg-lime-300 hover:font-semibold transition-all rounded-lg cursor-pointer py-1 px-3 hover:-translate-y-1 hover:scale-110">
          <Link to="/login">
          Login
          </Link>
        </li>
        <li className="text-center hover:bg-lime-300 hover:font-semibold transition-all rounded-lg cursor-pointer py-1 px-3 hover:-translate-y-1 hover:scale-110">
          <Link to="/registration">
          Registration
          </Link>
        </li>

        </div>
        
      </ul>
    </nav>
  );
};

export default Navbar;
