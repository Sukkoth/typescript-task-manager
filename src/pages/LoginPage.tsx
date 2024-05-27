import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginPage/LoginForm";
import supabase from "../supabase";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../features/Auth/authSlice";

function LoginPage() {
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${import.meta.env.VITE_APP_URL}/get`,
      },
    });
  }

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [navigate, user?.email]);

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
        <p className='text-3xl font-medium px-4 mt:16  md:mt-20'>
          Login to start managing your tasks easily
        </p>
        {/* FORM */}
        <LoginForm />
        {/* FORM */}
        <div className='left-0 right-0 px-4 flex justify-center items-center mt-10'>
          <div className='w-1/3 h-[0.1rem] bg-gray-300'></div>
          <p className='mx-2 lg:mx-4 text-center'>Or Log in with</p>
          <div className='w-1/3 h-[0.10rem] bg-gray-300'></div>
          <hr />
        </div>
        <div className='left-0 right-0 mt-10'>
          <div
            onClick={handleGoogleLogin}
            className='border border-white rounded-3xl mx-4 py-3 center-all gap-3 cursor-pointer hover:bg-gray-800'
          >
            <img src='/images/google.png' alt='google' className='size-8' />
            <span className='font-medium'>Google</span>
          </div>
          <div className='text-center mt-10 pe-2 pb-5'>
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
