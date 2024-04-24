import { Link } from "react-router-dom";
import Button from "../components/Button";

function RegisterPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className='p-5 relative'>
      <div className='absolute inset-0 blur-sm brightness-[0.2] auth-page'></div>
      <div className='absolute inset-0 z-10 left-2 right-2 md:right-52 md:left-52 lg:left-40 lg:right-40 xl:right-56 xl:left-56'>
        <p className='text-3xl font-medium px-4 mt-24'>
          Create an account to take control of your day
        </p>
        <form onSubmit={handleSubmit} className='mt-10 px-4 space-y-5'>
          <div className='flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='auth-input'
              placeholder='Enter your name'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='auth-input'
              placeholder='Enter your email'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='auth-input'
              placeholder='Enter your password'
            />
          </div>

          <div className='pt-16'>
            <Button onClick={() => {}} textColor='black' rounded='rounded-3xl'>
              Sign up
            </Button>
          </div>
        </form>
        <div className='left-0 right-0 px-4 flex justify-center items-center mt-10'>
          <div className='w-1/3 h-[0.1rem] bg-gray-300'></div>
          <p className='mx-4'>Or Sign up with</p>
          <div className='w-1/3 h-[0.10rem] bg-gray-300'></div>
          <hr />
        </div>
        <div className='left-0 right-0 mt-10'>
          <div className='border border-white rounded-3xl mx-4 py-3 center-all gap-3 cursor-pointer hover:bg-gray-800'>
            <img src='/images/google.png' alt='google' className='size-8' />
            <span className='font-medium'>Google</span>
          </div>
          <div className='text-center mt-10 pe-2'>
            <p>
              Already have an account?{" "}
              <Link to='/login' className='text-primary font-semibold'>
                Log in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
