import React from 'react';
import { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import { AuthContext } from '../../contexts/AuthProvider';
import NoData from '../NoData/NoData';
import ProductBooking from './ProductBooking';
import SingleProduct from './SingleProduct';

const Products = () => {
    const { result, category } = useLoaderData();
    const { openModal, setOpenModal, product, total } = useContext(AuthContext);
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='text-4xl text-center my-5 font-bold'>
                    <h2> All Product of <span className='uppercase'>{category}</span> </h2>
                </div>
                {
                    result.length > 0 ?
                        <>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8'>
                                {
                                    result.map(product => <SingleProduct
                                        key={product._id}
                                        product={product}
                                    ></SingleProduct>)
                                }
                            </div>
                            <Link className='flex justify-center my-5' to={'/'}>
                                <PrimaryButton classes={'hover:text-xl'}>GO To Home</PrimaryButton>
                            </Link>
                        </> :
                        <div>
                            <NoData>No Data Found</NoData>
                            <Link className='flex justify-center my-5' to={'/'}>
                                <PrimaryButton classes={'hover:text-xl'}>GO To Home</PrimaryButton>
                            </Link>
                        </div>
                }
                {
                    openModal && <ProductBooking
                        openModal={openModal}
                        product={product}
                        total={total}
                        setOpenModal={setOpenModal}
                    ></ProductBooking>
                }
            </div>
        </div>
    );
};

export default Products;