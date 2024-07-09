import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useForm } from '../../hooks';
import { Alert } from '../../components';
import { authUser } from '../helpers';

const initialForm = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { login, auth } = useAuth();
  const { email, password, onInputChange } = useForm(initialForm);
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) {
      return setAlert({
        message: 'Invalid charecter',
        error: true
      });
    }
    setAlert({});

    const response = await authUser({ email, password });

    if (response?.error) {
      return setAlert(response);
    }
    setAlert({});
    login(response);
    navigate('/projects', { replace: true });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl text-center font-extrabold uppercase mb-6">
          Login to your account to{" "}
          <span className="text-purple-700">manage your projects</span>
        </h1>
  
        {alert?.message && <Alert alert={alert} />}
  
        <form className="my-10" onSubmit={onSubmitForm}>
          <div className="mb-5">
            <label htmlFor="email" className="block font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              required
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              className="w-full rounded-md border border-gray-300 bg-gray-100 outline-none focus:border-purple-500 focus:bg-white py-3 px-5 transition-colors duration-300"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block font-bold text-gray-700 mb-2">
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              className="w-full rounded-md border border-gray-300 bg-gray-100 outline-none focus:border-purple-500 focus:bg-white py-3 px-5 transition-colors duration-300"
            />
          </div>
  
          <div className="mb-10">
            <button
              className="w-full cursor-pointer rounded-md bg-purple-700 py-3 px-5 text-base text-white font-bold transition-transform transform hover:scale-105 hover:bg-purple-600"
              type="submit"
            >
              Login
            </button>
          </div>
  
        </form>
      </div>
    </div>
  );
  
}
