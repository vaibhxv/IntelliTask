import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { Alert } from '../../components';
import { sendEmailPasswordReset } from '../helpers';

const initialForm = {
  email: '',
}

export const ForgotPasswordPage = () => {

  const { email, onInputChange, onResetForm } = useForm(initialForm);
  const [alert, setAlert] = useState({});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (email === '') {
      return setAlert({
        message: 'El correo es obligatorio.',
        error: true
      });
    }
    setAlert({});
    const response = await sendEmailPasswordReset(email);
    setAlert(response);

    if (!response?.error) {
      onResetForm();
    }
  }

  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">RECOVER YOUR PASSWORD TO <span className="text-taskunity-800">manage your projects</span></h1>

      {alert?.message && <Alert alert={alert} />}

      <form
        className="my-10"
        onSubmit={onSubmitForm}
      >
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

        <div className="mb-10">
          <button
            className="w-full cursor-pointer rounded-md border bg-taskunity-800 py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            Reset Password
          </button>
        </div>

        <nav className='flex flex-col gap-5'>
          <p className='flex gap-1 justify-center text-[#4d4d4d]'>
            or
            <Link
              to='/auth/login'
              className='text-taskunity-800 underline font-bold'
            >
              Log In
            </Link>
          </p>
        </nav>
      </form>
    </>
  )
}