import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const Footer = () => {
    return (
        <div className=' w-full'>
            <footer
                style={{
                    backgroundColor: '#16a085',
                }}
                className=" divide-y  p-12">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <div rel="noopener " className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                </svg>
                            </div>
                            <span className="self-center text-2xl text-white font-semibold">E-Shop</span>
                            <div className="flex justify-end relative">
                                <input type="text" placeholder="Type here" className="input input-bordered shadow-2xl w-full max-w-xs" />
                                <div className='text-4xl absolute mr-2 top-1'><CiSearch></CiSearch></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 text-white gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-50">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase dark:text-gray-50">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                    <AiFillLinkedin className='text-4xl' />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                    <FaGithubSquare className='text-4xl' />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                    <FaTwitterSquare className='text-4xl' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-white">© 1968 Company Co. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;