import Details from "./Details";
import { Project } from "../shared/types";
import Suggest from "./Suggest";
import Modal from "../Modal";
import { SiRipple } from "react-icons/si";

function Todos({ data }: { data: Project }) {
  return (
    <>
      <div className='flex gap-2 mt-10 justify-between items-center py-2'>
        <h3 className='ml-4 text-xl font-medium relative before:absolute before:content-[" "] before:size-2 before:bg-orange-500 before:rounded-full before:top-1/2 before:-left-4 before:-translate-y-1/2'>
          To Do
        </h3>
        <Modal>
          <Modal.Button type='TOGGLER'>
            <div className='flex border border-green-500 dark:border-white items-center gap-3 px-2 py-2 outline-none rounded-xl bg-primary text-black dark:text-white dark:bg-purple-600 hover:ring-4 hover:ring-green-500 dark:hover:ring-purple-600 hover:ring-offset-1 dark:hover:ring-offset-white cursor-pointer'>
              <SiRipple className='cursor-pointer hover:scale-110 duration-300 hover:text-primary text-2xl' />
              <p className='font-mono'>Suggest Tasks (AI)</p>
            </div>
          </Modal.Button>
          <Modal.Content title='Suggest Tasks using AI'>
            <Suggest />
          </Modal.Content>
        </Modal>
      </div>
      {data && <Details project={data} />}
    </>
  );
}

export default Todos;
