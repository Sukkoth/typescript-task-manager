import React from "react";
import { CgClose } from "react-icons/cg";
import useOutsideClick from "../../hooks/useOutsideClick";

function Overlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const { handler } = useOutsideClick(onClose);

  return (
    <div className='fixed inset-0 backdrop-blur-lg center-all z-50'>
      <div
        ref={handler}
        className='bg-shade-300 drop-shadow-2xl max-h-[90dvh] border overflow-y-scroll rounded-2xl border-gray-700 p-6'
      >
        <div className='flex items-center justify-end text-xl mb-2'>
          <CgClose
            onClick={() => onClose()}
            className='hover:scale-125 duration-200 cursor-pointer hover:text-red-300'
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Overlay;
