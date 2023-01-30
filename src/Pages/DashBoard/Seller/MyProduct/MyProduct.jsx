import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import PrimaryButton from '../../../../Components/Button/PrimaryButton';
import SmallSpinner from '../../../../Components/Spinner/SmallSpinner';
import NoData from '../../../NoData/NoData';
import { serverApi } from '../../../../Api/MainApi';

const MyProduct = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`${serverApi}/products/myProducts?email=${user.email}`);
                const data = await res.json();
                return data
            }
            catch (err) { }
        }
    })
    // console.log(products)
    const handleAdvertisment = (_id) => {
        setLoading(true)
        const confirm = window.confirm('Went to advertise this item')
        if (confirm) {
            console.log(confirm)
            fetch(`${serverApi}/products/myProducts/advertise?id=${_id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Advertise Successfully')
                    }
                    else {
                        toast.error(data)
                    }
                })
        }
        setLoading(false)
    }


    const handleToDeleteProduct = (_id) => {
        setLoading(true)
        const confirm = window.confirm('Went to Delete This Product')
        if (confirm) {
            console.log(confirm)
            const url = `${serverApi}/products/myProducts?id=${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Delete successfully')
                        refetch()
                    }
                })
        }
        setLoading(false)
    }


    return (
        <div>
            {
                products.length > 0 ?
                    <>
                        <div className='w-11/12 mx-auto'>
                            <div className='my-5'>
                                <h3 className="text-4xl font-bold text-center">All Posted Product</h3>
                            </div>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                            </th>
                                            <th>Image</th>
                                            <th>Category Name</th>
                                            <th>Price</th>
                                            <th>Advice</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            products.map((product, i) =>
                                                <tr key={product._id}>
                                                    <th>
                                                        <label>
                                                            {i + 1}
                                                        </label>
                                                    </th>
                                                    <td className='flex items-center'>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={product.photoURL} alt="user" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <div className="font-bold">{product.categories}</div>
                                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                                        </div>
                                                    </td>
                                                    <td>${product.price}</td>
                                                    {
                                                        product.paying ?
                                                            <>
                                                                {
                                                                    product.paying === "Unpaid" ?
                                                                        <td >
                                                                            <PrimaryButton classes={'btn btn-sm'}>BOOKED</PrimaryButton>
                                                                        </td>
                                                                        :
                                                                        <td >
                                                                            <PrimaryButton classes={'btn btn-sm'}>SOLD</PrimaryButton>
                                                                        </td>

                                                                }
                                                            </>

                                                            :
                                                            <td >
                                                                <button className='btn btn-sm text-white btn-primary rounded-3xl' onClick={() => handleAdvertisment(product._id)}>{loading ? <SmallSpinner /> : 'Advertisement'}</button>
                                                            </td>
                                                    }
                                                    <th>
                                                        <button onClick={() => handleToDeleteProduct(product._id)} className="btn btn-circle hover:bg-red-700 btn-outline">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </button>
                                                    </th>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </> :
                    <div className='w-11/12 mt-5 mx-auto'>
                        <NoData>You Have No Product</NoData>
                    </div>
            }
        </div>
    );
};

export default MyProduct;