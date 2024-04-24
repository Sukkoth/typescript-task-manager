import { useNavigate } from "react-router-dom";

function NewProject() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className='p-5'>
      <div className='flex justify-between font-medium items-center'>
        <p
          onClick={() => navigate(-1)}
          className='text-gray-400 text-sm cursor-pointer'
        >
          cancel
        </p>
        <h3 className='text-xl'>New Project</h3>
        <div></div>
      </div>
      <form className='mt-10 space-y-8' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor='name' className='text-xl'>
            Name
          </label>
          <input type='text' id='name' className='app-input' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description' className='text-xl'>
            Description
          </label>
          <textarea id='description' rows={5} className='app-input' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='color' className='text-xl'>
            Color
          </label>
          <select name='color' id='color' className='app-input'>
            <option value='blue'>
              <div className='flex'>
                <span className='SIZE-3 bg-blue-500'></span>
                <span>BLUE</span>
              </div>
            </option>
            <option value='red'>RED</option>
            <option value='yelow'>YELLOW</option>
            <option value='orange'>ORANGE</option>
            <option value='cyan'>CYAN</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='deadline' className='text-xl'>
            Deadline
          </label>
          <input id='deadline' type='date' className='app-input' />
        </div>
        <div className='pt-24'>
          <button className='app-button'>Create Project</button>
        </div>
      </form>
    </div>
  );
}

export default NewProject;
