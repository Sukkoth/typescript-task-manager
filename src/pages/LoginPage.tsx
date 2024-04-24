import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function LoginPage() {
  const navigate = useNavigate();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className='p-5 relative'>
      <div className='absolute inset-0 auth-page'></div>
      <div className='absolute inset-0 z-10 md:right-56 md:left-56 left-2 right-2'>
        <p className='text-3xl font-medium px-4 mt-24'>
          Login to start managing your tasks easily
        </p>
        <form onSubmit={handleSubmit} className='mt-10 px-4 space-y-5'>
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
          <div className='text-end pe-2'>
            <Link to='/login'>I forgot my password</Link>
          </div>
          <div className='pt-16'>
            <Button
              onClick={() => navigate("/", { replace: true })}
              textColor='white'
              rounded='rounded-3xl'
              backgroundColor='bg-gray-500'
            >
              Create Task
            </Button>
          </div>
        </form>
        <div className='left-0 right-0 px-4 flex justify-center items-center mt-10'>
          <div className='w-1/3 h-[0.1rem] bg-gray-300'></div>
          <p className='mx-4'>Or Log in with</p>
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
              Don't have an account?{" "}
              <Link to='/register' className='text-primary font-semibold'>
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
