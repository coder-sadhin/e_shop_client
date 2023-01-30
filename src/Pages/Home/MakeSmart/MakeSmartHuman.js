import React from 'react';
import Shope from '../../../assets/E-shop.webp'
import './MakeSmartHuman.css'

const MakeSmartHuman = () => {
    return (
        <div
            style={{
                backgroundColor: '#16a085',
            }}
        >
            <div className="hero p-10 text-white mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={Shope} className=" rounded-lg lg:w-1/2 shadow-2xl hover:scale-110 transition duration-300 ease-in-out" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">About E-shop</h1>
                        <p className="py-6">An e-shop is an online business that sells a variety of goods and services. E-shops are business-to-consumer oriented. They are just like a retail store but instead of having a physical location, its location is on the internet.</p>
                        <button className="btn btn-outline btn-warning">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeSmartHuman;