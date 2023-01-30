import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import ProductBooking from './ProductBooking';

const Bocking = () => {
    const [products, setProducts] = useState([]);
    // const [product, setProduct] = useState({});
    // const [total, setTotal] = useState(0);
    const { refresh, user, openModal, setOpenModal, product, setProduct, total, setTotal } = useContext(AuthContext);
    const [update, setUpdate] = useState(1);
    // const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const prod = JSON.parse(localStorage.getItem("product"))
        setProducts(prod)
    }, [refresh])
    // console.log("product", product);
    const handleToModal = (total, product) => {
        if (!user) {
            const confirm = window.confirm('You are not login, Go To Login Page')
            if (confirm) {
                navigate('/login')
            }
        }
        setProduct(product)
        setTotal(total)
        setOpenModal(true)
        console.log("object", total);
    }
    return (
        <div>
            <div>
                <h3>Shipping Cart</h3>
                <hr className='border-gray-600 my-2' />
            </div>
            {
                products.map((product, i) => <div key={i}>
                    <div className='flex justify-between'>
                        <div className='w-12 h-12'>
                            <img src={product.photoURL} alt="" />
                        </div>
                        <div>
                            <h3>{product.productName}</h3>
                            <div className="custom-number-input h-10 w-20">
                                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={() => setUpdate(update - 1)} data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span className="m-auto text-xl font-thin">−</span>
                                    </button>
                                    <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" disabled value={update}></input>
                                    <button onClick={() => setUpdate(update + 1)} data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                        <span className="m-auto text-xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>RS. {product.price}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center mt-20'>
                        <p className='text-center'>Total: RS. {product.price * update}</p>
                        <label htmlFor="bookingModal" onClick={() => handleToModal((product.price * update), product)} className='btn btn-primary drawer-button mt-5'>Check Out</label>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Bocking;