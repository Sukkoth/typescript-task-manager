import { HiOutlineBriefcase } from "react-icons/hi";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

function ActionOptionPage() {
  return (
    <div className='h-[100dvh] w-full center-all text-black font-bold text-xl'>
      <div className='w-full flex flex-col gap-5 items-center'>
        <Link
          to='task'
          replace
          className='bg-primary h-16 rounded-2xl w-3/4 cursor-pointer center-all'
        >
          <TfiWrite size={25} /> <span className='mx-3'>Add Task</span>
        </Link>
        <Link
          to='project'
          replace
          className='bg-primary h-16 rounded-2xl w-3/4 cursor-pointer center-all'
        >
          <HiOutlineBriefcase size={25} />{" "}
          <span className='mx-3'>Create Project</span>
        </Link>
      </div>
    </div>
  );
}

export default ActionOptionPage;
