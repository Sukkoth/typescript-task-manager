import { BiBell, BiSearch } from "react-icons/bi";

function HomeNav() {
  return (
    <nav>
      <p className='text-gray-300'>Mon, May 23</p>
      <div className='flex justify-between items-center'>
        <h3 className='text-3xl font-medium'>Hello, Grey 👋</h3>
        <div className='flex gap-5 text-3xl'>
          <BiSearch />
          <BiBell />
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
