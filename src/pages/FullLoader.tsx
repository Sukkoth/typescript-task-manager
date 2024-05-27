import { RiLoader4Fill } from "react-icons/ri";

function FullLoader() {
  return (
    <div className='min-h-[100dvh] w-full center-all flex-col gap-5'>
      <RiLoader4Fill
        size={100}
        className='animate-spin text-secondary dark:text-primary'
      />
      <h1 className='text-white font-bold text-3xl animate-bounce'>TASKIFY</h1>
    </div>
  );
}

export default FullLoader;
