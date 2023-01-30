import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import './Login.css'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import img from '../../assets/login/Login.webp'
import useToken from '../../Hooks/useToken';
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { userLogin, GoogleLogin, loading, facebookLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoginUserEmail(data.email)
                toast.success('Successfully Login')
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
                toast.error('Password Wrong')
            })
    }

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(user?.email)
                // navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    // if (loading) {
    //     return <Loading></Loading>
    // }




    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">

                <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7'>
                            <h2 className='text-3xl text-center'>Login</h2>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Email</span> </label>
                                    <input type="email"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Password</span> </label>
                                    <input type="password"
                                        {...register("password", {
                                            required: 'Password is required',
                                            minLength: { value: 5, message: 'Password must be 5 characters or longer' }
                                        })}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                                    <label className="label">  <span className="label-text  text-black">Forget Password</span> </label>
                                </div>

                                {/* <input className='btn btn-accent w-full' value='Login' type="submit" /> */}

                                <LoadingButton
                                    type="submit"
                                    className='btn btn-accent w-full'
                                    value='Login'
                                >
                                    {loading ? <SmallSpinner /> : 'login'}
                                </LoadingButton>

                                <div>
                                    {loginError && <p className='text-red-600'>{loginError} </p>}
                                </div>
                            </form>
                            <p className='mt-2'>New to Create Account <Link className='text-primary ml-2 font-bold' to='/signup'>Create New Account</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;














