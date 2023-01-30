import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import ProductBooking from '../Booking/ProductBooking';
import { AuthContext } from '../../contexts/AuthProvider';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import Spinner from '../../Components/Spinner/Spinner';

const DetailsPage = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();

    const [loading, setLoading] = useState(false)
    // console.log(data)
    const [openModal, setOpenModal] = useState(false);
    const { description, productName, location, mobile, name, photoURL
        , price, sellerEmail, time, _id } = data;
    const handleToModal = () => {
        setOpenModal(true)
    }
    const handleWishList = () => {
        toast.success("wishlist now under Constraction")
    }

    return (
        <div className="card  lg:card-side bg-base-100 my-10 shadow-xl">
            <figure className='w-full md:w-6/12 lg:w-6/12 p-10'><img className='rounded-lg' src={photoURL} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-bold text-center text-cyan-500">{productName}</h2>
                <div className='flex my-5 flex-col md:flex-row lg:flex-row'>
                    <p className='text-xl'>Price: <span className='font-bold'> ${price}</span></p>
                </div>
                <div className='flex flex-col justify-between'>
                    <h4 className='text-xl font-bold'>About This Product: </h4>
                    <div className='text-xl mt-5'>{description}</div>
                </div>

                <div className="card-actions justify-center my-5">
                    <PrimaryButton handler={handleWishList} classes={'btn'}>{loading ? <SmallSpinner /> : 'Add Wish List'}</PrimaryButton>
                    <label htmlFor="bookingModal" onClick={handleToModal} className="hover:text-bold btn bg-gradient-to-r from-primary to-secondary text-white"
                    >Book Now</label>
                </div>
            </div>
            {/* {
                openModal && <ProductBooking
                    openModal={openModal}
                    product={data}
                    setOpenModal={setOpenModal}
                ></ProductBooking>
            } */}
        </div>
    );
};

export default DetailsPage;