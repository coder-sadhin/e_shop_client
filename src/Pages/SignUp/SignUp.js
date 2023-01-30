import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import img from '../../assets/login/signIn.webp'
import useToken from '../../Hooks/useToken';
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';
import { serverApi } from '../../Api/MainApi';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signUpError, setSignUpError] = useState('')
    const { createUser, emailVerify, updateUser, GoogleLogin, loading, facebookLogin } = useContext(AuthContext)

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()


    if (token) {
        navigate('/')
    }

    const imgKey = process.env.REACT_APP_Imagebb_key


    const handleSignUp = (data) => {

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?&key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url)
                if (imgData.success) {
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user
                            console.log(user)
                            emailVerify()
                            toast.success('Successfully User create')
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url,
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(data.name, data.email);
                                })
                                .catch(err => console.log(err))
                        })
                        .catch(err => {
                            console.log(err)
                            setSignUpError(err.message)
                        })
                }
            })

        setSignUpError('')

    }

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user?.email);
                setCreatedUserEmail(user?.email)
            })
            .catch(err => console.error(err))
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`${serverApi}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email)
            })
    }



    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='' className="max-w-sm h-[550px] rounded-lg shadow-2xl" />
                <div>
                    <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7'>
                            <h2 className="text-xl text-center font-semibold">Sign Up</h2>
                            <form onSubmit={handleSubmit(handleSignUp)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Name</span> </label>
                                    <input type="text"
                                        {...register("name")}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Email</span> </label>
                                    <input type="email"
                                        {...register("email", {
                                            required: 'Email is required'
                                        })}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                    {errors.email && <p className='text-error'>{errors?.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">  <span className="label-text  text-black">Password</span> </label>
                                    <input type="password"
                                        {...register("password", {
                                            required: 'Password is required',
                                            minLength: { value: 5, message: 'Password must be 5 characters long' },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                        })}
                                        className="input input-bordered input-primary w-full max-w-xs" />
                                    {errors.password && <p className='text-error'>{errors?.password?.message}</p>}
                                </div>

                                <div className="form-control  w-full max-w-xs">
                                    <label className="label"> <span className="label-text text-black">Photo</span></label>
                                    <input type="file" {...register("image", {

                                    })} className="input input-primary input-bordered w-full max-w-xs" />
                                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                </div>

                                {/* <input className='btn btn-accent w-full mt-4' value='Sign Up' type="submit" /> */}

                                <div className='mt-4'>
                                    <LoadingButton
                                        type="submit"
                                        className='btn btn-accent mt-3 w-full'
                                        value='Login'
                                    >
                                        {loading ? <SmallSpinner /> : 'signUp'}
                                    </LoadingButton>
                                </div>

                                {signUpError && <p className='text-red-600'>{signUpError} </p>}
                                <p className='mt-2'>Already have an Account <Link className='text-primary' to='/login'>Please Login</Link></p>
                                <div className="divider">OR</div>
                            </form>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full"><FaGoogle className='mr-2 text-2xl'></FaGoogle> CONTINUE WITH GOOGLE</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;





