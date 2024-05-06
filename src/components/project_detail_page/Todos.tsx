import Details from "./Details";
import { Project } from "../shared/types";

function Todos({ data }: { data: Project }) {
  return (
    <>
      <h3 className='ml-4 mt-10 text-xl font-medium relative before:absolute before:content-[" "] before:size-2 before:bg-orange-500 before:rounded-full before:top-1/2 before:-left-4 before:-translate-y-1/2'>
        To Do
      </h3>
      {data && <Details project={data} />}
    </>
  );
}

export default Todos;
