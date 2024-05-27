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
      {!showSearch && (
        <p className='text-gray-400 dark:text-gray-300'>
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </p>
      )}
      <div
        className={`flex ${
          showSearch ? "justify-end" : "justify-between"
        } items-center`}
      >
        {!showSearch && (
          <h3 className='text-3xl font-medium'>
            Hello, {user?.name.split(" ")[0]} 👋
          </h3>
        )}
        <div
          className={`flex gap-5 text-3xl items-center  ${
            showSearch ? "w-full" : ""
          }`}
        >
          {showSearch && (
            <input
              ref={focusRef}
              type='text'
              className='outline-none bg-transparent dark:text-white border-b-gray-200 dark:border-b-shade-200 text-xl border-b-2 w-full'
            />
          )}
          {!showSearch ? (
            <BiSearch
              className='cursor-pointer'
              onClick={(e) => {
                e.preventDefault();
                setShowSearch((prev) => !prev);
              }}
            />
          ) : (
            <CgClose
              className='cursor-pointer'
              onClick={(e) => {
                e.preventDefault();
                setShowSearch((prev) => !prev);
              }}
            />
          )}
          {!showSearch ? <BiBell className='cursor-pointer' /> : ""}
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
