import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions, authSelector } from "../features/Auth/authSlice";
import supabase from "../supabase";
import { BiLogOut, BiMessage } from "react-icons/bi";
import { ReactElement, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsBell } from "react-icons/bs";
import ConfirmModal from "../components/ConfirmModal";
import Modal from "../components/Modal";

import FeedbackFormComponent from "../components/Feedback/FeedbackFormComponent";

function MenuPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  //TODO Reset previous errors when the modal appears

  return (
    <>
      <div className='bg-shade-200 pt-5 pb-16 rounded-b-[4rem]'>
        <div className='flex items-center justify-evenly gap-3 mt-10 lg:mt-24 text-center'>
          <div>
            <p className='font-medium'>135</p>
            <p className='text-gray-500'>Complete Tasks</p>
          </div>
          <div>
            <img
              className='size-36 object-cover rounded-full border-2'
              src={user?.avatar || "images/default_avatar.jpg"}
              alt='avatar'
            />
          </div>
          <div>
            <p className='font-medium'>135</p>
            <p className='text-gray-500'>Ongoing Tasks</p>
          </div>
        </div>
        <div className='center-all text-center'>
          <div className='mt-10'>
            <h1 className='font-semibold text-xl'>{user?.name}</h1>
            <p className='text-gray-500'>Lead Programmer</p>
            <div className='mt-5'>
              <Button className='px-12 rounded-xl'>Edit Profile</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='md:w-3/4 mx-auto mt-5 p-5'>
        <h4 className='font-semibold'>Explore</h4>
        <div className='mx-auto mt-5 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5'>
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
      className='bg-shade-200 rounded-xl center-all flex-col gap-2 aspect-square lg:max-w-36 cursor-pointer hover:scale-105 md:hover:scale-110 duration-200'
      onClick={onClick}
    >
      <span className='text:lg xs:text-2xl sm:text-3xl  text-primary mb-3'>
        {icon}
      </span>
      <p className='font-light text-xs xs:text-sm sm:text-lg'>{text}</p>
    </div>
  );
}

export default MenuPage;
