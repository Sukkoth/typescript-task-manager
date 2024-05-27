import React from "react";
import { CgClose } from "react-icons/cg";
import useOutsideClick from "../../hooks/useOutsideClick";

function Overlay({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
}) {
  const { handler } = useOutsideClick(onClose);

  return (
    <div className='fixed inset-0 backdrop-blur-lg center-all z-50'>
      <div
        ref={handler}
        className='bg-white dark:bg-shade-300 drop-shadow-2xl max-h-[90dvh] border rounded-2xl border-gray-700 p-6  w-11/12 lg:w-[70%] xl:w-[50%] overflow-y-auto'
      >
        <div className='flex items-center justify-between text-xl mb-6'>
          <h1 className='text-2xl font-semibold'>{title}</h1>
          <CgClose
            onClick={() => onClose()}
            className='hover:scale-125 duration-200 cursor-pointer hover:text-red-300'
          />
        </div>
        <div className='overflow-x-auto p-2'>{children}</div>
      </div>
    </div>
  );
}

export default Overlay;
