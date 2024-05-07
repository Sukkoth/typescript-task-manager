import { BiBell, BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { userSelector } from "../features/Auth/authSlice";
import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";

function HomeNav() {
  const user = useSelector(userSelector);
  const [showSearch, setShowSearch] = useState(false);
  const focusRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current?.focus();
    }
  }, [showSearch]);

  return (
    <nav>
      <p className='text-gray-300'>Mon, May 23</p>
      <div className='flex justify-between items-center'>
        <h3 className='text-3xl font-medium'>Hello, {user?.name} 👋</h3>
        <div className='flex gap-5 text-3xl items-center'>
          {showSearch && (
            <input
              ref={focusRef}
              type='text'
              className='outline-none bg-transparent text-white border-b-shade-200 text-xl border-b-2'
            />
          )}
          {!showSearch ? (
            <BiSearch
              onClick={(e) => {
                e.preventDefault();
                setShowSearch((prev) => !prev);
              }}
            />
          ) : (
            <CgClose
              onClick={(e) => {
                e.preventDefault();
                setShowSearch((prev) => !prev);
              }}
            />
          )}
          <BiBell />
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
