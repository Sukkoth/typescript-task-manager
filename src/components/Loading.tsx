import { RiLoader4Fill } from "react-icons/ri";

function Loading() {
  return (
    <div className='rounded-2xl font-medium px-10 py-4 text-xl text-center col-span-full flex flex-col items-center justify-center w-full'>
      <RiLoader4Fill className='animate-spin text-primary mb-5' size={70} />
    </div>
  );
}

export default Loading;
