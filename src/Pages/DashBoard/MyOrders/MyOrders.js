import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { serverApi } from '../../../Api/MainApi';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `${serverApi}/booking?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const handleToast = () => {
        toast.success("this section is underConstraction")
    }

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='ml-1'>
            <h3 className='text-3xl text-center font-semibold my-5 mb-6'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full rounded-xl">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Product Countity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings?.map((book, i) =>
                            <tr className='bg-white' key={book._id}>
                                <th>{i + 1}</th>
                                <div className="avatar py-2">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={book.photoURL} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                                <td>{book.productName}</td>
                                <td>{book.price}</td>
                                <td>{book.productCountity}</td>
                                <td>{book.total}</td>
                                <td><button onClick={handleToast} className='btn btn-primary btn-sm'>Pay</button></td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;