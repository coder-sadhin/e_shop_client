import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import ProductBooking from '../Booking/ProductBooking';
import { AuthContext } from '../../contexts/AuthProvider';
import PrimaryButton from '../../Components/Button/PrimaryButton';


const SingleProduct = ({ product }) => {
    const { photoURL, price, productName, _id } = product;
    const { user, refresh, setRefresh, setOpenSideModal } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user)
    const handleToast = () => {
        toast.error('This Product Already Booked')
    }
    const handleToModal = () => {
        if (!user) {
            const confirm = window.confirm('You are not login, Go To Login Page')
            if (confirm) {
                navigate('/login')
            }
        }
        let pro = [product]
        setOpenSideModal(true)
        localStorage.setItem("product", JSON.stringify(pro));
        setRefresh(!refresh)
    }

    return (
        <div className='mx-auto'>
            <div className="card card-compact relative p-5 bg-slate-200 w-80 md:w-96 lg:w-96 shadow-xl shadow-slate-400">

                <figure> <img src={photoURL} className='w-96 max-h-[400px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-green-600">Product Name: {productName}</h2>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="card-title font-bold">Price: ${price}</h2>
                        </div>
                    </div>
                    <div className="card-actions mt-5">
                        {
                            !product?.paying ?
                                <>
                                    <label htmlFor="bocking_modal_drawer" onClick={handleToModal} className="hover:text-xl btn-sm w-full btn bg-gradient-to-r from-primary to-secondary text-white"
                                    >Add To Cart</label>
                                    <Link to={`/details/${_id}`} className='w-full'>
                                        <PrimaryButton classes={'btn btn-sm w-full hover:text-xl'}>Details</PrimaryButton>
                                    </Link>
                                </>
                                :
                                <PrimaryButton handler={handleToast} classes={'btn btn-sm w-full'}>BOOKED</PrimaryButton>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;