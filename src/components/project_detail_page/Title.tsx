import React from "react";
type Props = {
  children: React.ReactNode;
};

function Title({ children }: Props) {
  return (
    <h3 className='ml-4 mt-10 text-xl font-medium relative before:absolute before:content-[" "] before:size-2 before:bg-orange-500 before:rounded-full before:top-1/2 before:-left-4 before:-translate-y-1/2'>
      {children}
    </h3>
  );
}

export default Title;
