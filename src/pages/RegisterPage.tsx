import { Link } from "react-router-dom";
import RegisterForm from "../components/Register/RegisterForm";
import { useEffect } from "react";

function RegisterPage() {
  useEffect(() => {
    document.documentElement.classList.add("bg-shade-300");
    return () => {
      document.documentElement.classList.remove("bg-shade-300");
    };
  }, []);

  return (
    <div className='text-white p-5 relative min-h-[100dvh]'>
      <div className='absolute inset-0 blur-sm brightness-[0.3] auth-page -z-10'></div>
      <div className='lg:w-[70%] mx-auto'>
        <p className='text-3xl font-medium px-4 mt-24'>
          Create an account to take control of your day
        </p>
        {/* FORM */}
        <RegisterForm />
        {/* FORM */}
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
