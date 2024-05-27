import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGISTRATION_SCHEMA } from "../../Schemas/registrationSchema";
import { UserRegisteration } from "../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../features/Auth/authThunks";
import { StateDispatchType } from "../../store/store";
import { useEffect, useState } from "react";
import { SiAdguard } from "react-icons/si";
import {
  authActions,
  authErrorSelector,
  userSelector,
} from "../../features/Auth/authSlice";
import { TbAlertTriangleFilled } from "react-icons/tb";

function RegisterForm() {
  const [showAlert, setShowAlert] = useState(false);
  const user = useSelector(userSelector);
  const registrationError = useSelector(authErrorSelector);
  const dispatch = useDispatch<StateDispatchType>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(REGISTRATION_SCHEMA),
  });

  const onSubmitHandler = async (formData: UserRegisteration) => {
    dispatch(registerThunk(formData));
  };

  useEffect(() => {
    if (user?.email) {
      setShowAlert(true);
      reset();
    }

    return () => {
      dispatch(authActions.resetErrors());
    };
  }, [user?.email, reset, dispatch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className='mt-10 px-4 space-y-5'
    >
      {showAlert && (
        <div className='w-full bg-primary text-black text-center py-3 rounded-xl flex gap-4 justify-center items-center'>
          <SiAdguard />
          <p> Succesfully registered, confirm your email to start using</p>
        </div>
      )}
      {registrationError.message && (
        <div className='w-full bg-red-300 text-black text-center py-3 rounded-xl flex gap-4 justify-center items-center'>
          <TbAlertTriangleFilled />
          <p>{registrationError?.message}</p>
        </div>
      )}
      <div className='flex flex-col'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='auth-input'
          placeholder='Enter your name'
          {...register("name")}
        />
        {errors.name?.message && (
          <p className='text-red-300 mt-2 ml-2 text-sm'>
            {errors.name?.message || "Incorrect one here"}
          </p>
        )}
      </div>
      <div className='flex flex-col'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='auth-input'
          placeholder='Enter your email'
          {...register("email")}
        />
        {errors.email?.message && (
          <p className='text-red-300 mt-2 ml-2 text-sm'>
            {errors.email?.message || "Incorrect one here"}
          </p>
        )}
      </div>
      <div className='flex flex-col'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='auth-input'
          placeholder='Enter your password'
          {...register("password")}
        />
        {errors.password?.message && (
          <p className='text-red-300 mt-2 ml-2 text-sm'>
            {errors.password?.message || "Incorrect one here"}
          </p>
        )}
      </div>

      <div className='pt-16'>
        <Button
          type='submit'
          onClick={() => {}}
          textColor='black'
          rounded='rounded-3xl'
          className='w-full'
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
