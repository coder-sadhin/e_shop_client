import React, { useContext, useRef } from 'react';
import img from '../../assets/about/email.jpg'
import img1 from '../../assets/about/messenger.jpg'
import img2 from '../../assets/about/whatsapp.jpg'

// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import LoadingButton from '../LoadingButton/LoadingButton';
import SmallSpinner from '../LoadingButton/SmallSpinner/SmallSpinner';
import { useState } from 'react';



const About = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE,
            process.env.REACT_APP_TEMPLETE,
            form.current,
            process.env.REACT_APP_ABOUT)
            .then((result) => {
                console.log(result.text);
                console.log('message send')
                setLoading(false)
            }, (error) => {
                console.log(error.text);
            });
        toast.success('Message Sent successfully', { autoClose: 1000 })
        e.target.reset()
    };

    return (

        <div>
            <div>
                <section className=" mt-6 ">

                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-semibold sm:text-4xl flex justify-center">FAQ</h2>
                        <div className="space-y-4 text-xl rounded-xl">
                            <details className="w-full border " open="">
                                <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">Will i get Any job offer if i join as a trainee</summary>
                                <p className="px-4 py-6 pt-0 ml-4 mt-9 ">As soon as you've completed our comprehensive online trainings, you can be invited for interviews with companies which is a great way to find your perfect job.</p>
                            </details>
                            <details className="w-full border ">
                                <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How can i get in touch with you</summary>
                                <p className="px-4 py-6 pt-0 ml-4 mt-9 ">Feel free to contact us by sending an email . </p>
                            </details>
                            <details className="w-full border ">
                                <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How does do?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 mt-9 ">Vlaunchu has various services to cater to the needs of different target markets. We have business consultation and HR consultancy, provide trainings and IT& Web Development services , we also have a Digital Marketing wing to boost an individual or company's visibility through Ad campaigns and Social Media Marketing. </p>
                            </details>
                            <details className="w-full border ">
                                <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">How can i be a part of?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 mt-9 ">We are always on the lookout for talent - be it fresh graduates, freelancers, people who want to start their own business, or companies looking to hire talents. Interested in becoming a part of? Don't wait - fill up this form now!!!</p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="py-6 ">
                    <h1 className='text-3xl font-semibold text-center my-6'>Contact us</h1>
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div>
                            <article
                                style={{
                                    backgroundColor: '#16a085',
                                }}
                                className="bg-slate-900 p-2 md:w-8/12 sm:w-full  rounded-2xl 
                                     text-center border-red-300 text-white"
                            >
                                <div className='flex justify-center'>
                                    <img className='w-12 h-12 rounded-full ' src={img} alt="" />
                                </div>

                                <div className="mb-2 text-center hover:bg-green-500 inline-block text-3xl" />
                                <h4>Email</h4>
                                <h5>Company@gmail.com</h5>
                                <a href="#">
                                    Send a message
                                </a>
                            </article>
                            <article
                                style={{
                                    backgroundColor: '#16a085',
                                }}
                                className="bg-slate-900 p-2 md:w-8/12 sm:w-full mt-4 rounded-2xl 
                                     text-center border-red-300 text-white"
                            >
                                <div className='flex justify-center'>
                                    <img className='w-12 h-12 rounded-full ' src={img1} alt="" />
                                </div>
                                <div className="mb-2 text-center hover:bg-green-500 inline-block text-3xl" />
                                <h4>Messenger</h4>
                                <h5>HR</h5>
                                <a href="#">
                                    Send a message
                                </a>
                            </article>
                            <article
                                style={{
                                    backgroundColor: '#16a085',
                                }}
                                className="bg-slate-900 p-2 md:w-8/12 sm:w-full mt-4 rounded-2xl 
                                     text-center border-red-300 text-white"
                            >
                                <div className='flex justify-center'>
                                    <img className='w-12 h-12 rounded-full ' src={img2} alt="" />
                                </div>
                                <div className="mb-2 text-center hover:bg-green-500 inline-block text-3xl" />
                                <h4>WhatsApp</h4>
                                <h5>Company Number</h5>
                                <a href="#">
                                    Send a message
                                </a>
                            </article>
                        </div>


                        <form
                            className="flex flex-col gap-2 text-black"
                            ref={form} onSubmit={sendEmail}
                        >
                            <input
                                type="text"

                                name="user_name"
                                placeholder="Enter your name"
                                className="w-full p-6 bg-transparent border-2 border-black  text-black "
                            />
                            <input
                                type="text"
                                name="user_email"
                                placeholder="Enter your email"
                                required
                                className="w-full p-6 bg-transparent border-2 border-black  text-black "
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows="10"
                                required
                                className="w-full p-6 bg-transparent border-2 border-black  text-black "
                            ></textarea>


                            <div className='mt-4'>
                                <LoadingButton
                                    type="submit"
                                    className='btn btn-accent mt-3 w-full'
                                    value='Send'
                                >
                                    {loading ? <SmallSpinner /> : 'submit'}
                                </LoadingButton>
                            </div>

                        </form>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default About;
