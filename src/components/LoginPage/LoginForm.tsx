import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  authActions,
  authErrorSelector,
  tokenSelector,
} from "../../store/slices/auth/authSlice";
import Helpers from "../../utils/Helpers";
import Button from "../Button";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormDate] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const token = useSelector(tokenSelector);
  const authErrors = useSelector(authErrorSelector);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      Helpers.isValidFormData(formData, (value) => {
        setErrorMessage(value);
      })
    ) {
      dispatch(authActions.login(formData));
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormDate((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  useEffect(() => {
    setErrorMessage(null);
  }, [formData.email, formData.password]);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <form onSubmit={handleSubmit} className='mt-10 px-4 space-y-5'>
      {errorMessage?.length && <p className='text-red-300'>{errorMessage}</p>}
      {authErrors?.message && (
        <p className='text-red-300'>{authErrors?.message}</p>
      )}
      <div className='flex flex-col'>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          className='auth-input'
          placeholder='Enter your email'
          onChange={handleChange}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          className='auth-input'
          placeholder='Enter your password'
          onChange={handleChange}
          required
        />
      </div>
      <div className='text-end pe-2'>
        <Link to='/login'>I forgot my password</Link>
      </div>
      <div className='pt-16'>
        <Button
          onClick={() => {}}
          textColor='white'
          rounded='rounded-3xl'
          backgroundColor='bg-gray-500'
        >
          Log in
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
