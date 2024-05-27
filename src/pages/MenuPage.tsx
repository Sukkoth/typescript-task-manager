import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions, authSelector } from "../features/Auth/authSlice";
import supabase from "../supabase";
import { MdOutlineWbSunny } from "react-icons/md";
import { BiLogOut, BiMessage } from "react-icons/bi";
import { ReactElement, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsBell, BsMoonStarsFill } from "react-icons/bs";
import ConfirmModal from "../components/ConfirmModal";
import Modal from "../components/Modal";

import FeedbackFormComponent from "../components/Feedback/FeedbackFormComponent";

function MenuPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

  const { user } = useSelector(authSelector);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
      dispatch(authActions.logout());
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function toggleTheme() {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  }

  //TODO Reset previous errors when the modal appears

  return (
    <>
      <div className='bg-primary shadow-lg shadow-gray-400 dark:shadow-gray-900 dark:bg-shade-200 pb-16 pt-10 lg:pt-20 rounded-b-[3rem] lg:rounded-b-[4rem]'>
        <div className='flex items-center justify-evenly gap-3 text-center'>
          <div>
            <p className='font-bold'>135</p>
            <p className='text-sm md:text-lg text-gray-500'>Complete Tasks</p>
          </div>
          <div>
            <img
              className='size-36 object-cover rounded-full border-2'
              src={user?.avatar || "images/default_avatar.jpg"}
              alt='avatar'
            />
          </div>
          <div>
            <p className='font-bold'>135</p>
            <p className='text-sm md:text-lg text-gray-500'>Ongoing Tasks</p>
          </div>
        </div>
        <div className='center-all text-center'>
          <div className='mt-10'>
            <h1 className='text-xl font-bold'>{user?.name}</h1>
            <p className='text-gray-500'>Lead Programmer</p>
            <div className='mt-5'>
              <Button
                backgroundColor='bg-secondary dark:bg-primary text-white dark:text-black'
                className='px-12 rounded-xl'
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='md:w-3/4 mx-auto mt-5 p-5'>
        <h4 className='font-semibold'>Explore</h4>
        <div className='mx-auto mt-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          <MenuItem text='Settings' icon={<GiSettingsKnobs />} />
          <MenuItem text='Notifications' icon={<BsBell />} />

          <Modal>
            <Modal.Button type='TOGGLER'>
              <MenuItem text='Feedback' icon={<BiMessage />} />
            </Modal.Button>
            <Modal.Content title='Feedback'>
              <FeedbackFormComponent />
            </Modal.Content>
          </Modal>
          <MenuItem
            text={`${darkMode ? "Light Mode" : "Dark Mode"}`}
            icon={darkMode ? <MdOutlineWbSunny /> : <BsMoonStarsFill />}
            onClick={() => toggleTheme()}
          />
          <ConfirmModal
            confirmButtonText={isLoading ? "Logging out . . . " : "Logout"}
            headerText='Are you sure to logout?'
            onConfirm={() => {
              handleLogout();
            }}
          >
            <MenuItem text='Logout' icon={<BiLogOut />} />
          </ConfirmModal>
        </div>
      </div>
    </>
  );
}

type MenuItemProp = {
  text: string;
  icon: ReactElement;
  onClick?: () => void;
};
function MenuItem({ text, icon, onClick }: MenuItemProp) {
  return (
    <div
      className='select-none bg-gray-100 dark:bg-shade-200 rounded-xl center-all flex-col gap-2 aspect-square cursor-pointer hover:scale-105 md:hover:scale-110 duration-200 overflow-hidden'
      onClick={onClick}
    >
      <span className='text-secondary dark:text-primary text-2xl xl:text-3xl'>
        {icon}
      </span>
      <p className='text-lg md:text-xl md:font-medium text-center'>{text}</p>
    </div>
  );
}

export default MenuPage;
