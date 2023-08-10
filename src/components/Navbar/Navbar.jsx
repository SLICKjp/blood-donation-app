
const Navbar = () => {
  return (
    <nav className='flex justify-betweem items-center h-24 max-w-[1240px] mx-auto px-4'>
     <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
   <ul className='flex'>
    <li className='p-4'>Home</li>
    <li className='p-4'>Contact</li>
    <li className='p-4'>About</li>
    </ul>     
    </nav>
  );
};

export default Navbar;
