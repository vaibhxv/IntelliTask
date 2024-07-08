import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { Alert } from '../../components/Alert';
import { createUser } from '../helpers';

const initialForm = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

export const RegisterPage = () => {

  const { name, email, password, password2, onInputChange, onResetForm } = useForm(initialForm);
  const [alert, setAlert] = useState({});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if ([name, email, password, password2].includes('')) {
      return setAlert({
        message: 'Invalid charecter',
        error: true
      });
    }

    if (password !== password2) {
      return setAlert({
        message: 'Passwords do not match',
        error: true
      });
    }

    if (password.length < 6) {
      return setAlert({
        message: 'Password must be atleast 6 charecters long.',
        error: true
      });
    }
    setAlert({});

    const response = await createUser({ name, email, password });
    setAlert(response);
    
    if (!response?.error) {
      onResetForm();
    }
  }

  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Register and start <span className="text-taskunity-800">managing your projects.</span></h1>

      {alert?.message && <Alert alert={alert} />}

      <form
        className="my-10"
        onSubmit={onSubmitForm}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-bold"
          >Full Name</label>
          <input
            required
            id="name"
            name='name'
            type="text"
            value={name}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-taskunity-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="font-bold"
          >Email</label>
          <input
            required
            id="email"
            type="email"
            name='email'
            value={email}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-taskunity-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="font-bold"
          >Password</label>
          <input
            required
            id="password"
            type="password"
            name='password'
            value={password}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-taskunity-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password2"
            className="font-bold"
          >Confirm password</label>
          <input
            required
            id="password2"
            name='password2'
            type="password"
            value={password2}
            onChange={onInputChange}
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-taskunity-400 focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-10">
          <button
            className="w-full cursor-pointer rounded-md border bg-taskunity-800 py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            Register
          </button>
        </div>

        <nav className='flex flex-col gap-5'>
          <p className='flex gap-1 justify-center text-[#4d4d4d]'>
            Already have an account?
            <Link
              to='/auth/login'
              className='text-taskunity-800 underline font-bold'
            >
              Login
            </Link>
          </p>
        </nav>
      </form>
    </>
  )
}