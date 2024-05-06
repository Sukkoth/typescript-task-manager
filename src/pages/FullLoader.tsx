import { useEffect, useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";

function FullLoader() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div className='min-h-[100dvh] w-full center-all flex-col gap-5'>
      <RiLoader4Fill size={100} className='animate-spin text-primary' />
      <h1 className='text-white font-bold text-3xl animate-bounce'>
        {isOnline ? "TASKIFY" : "OFFLINE"}
      </h1>
    </div>
  );
}

export default FullLoader;
