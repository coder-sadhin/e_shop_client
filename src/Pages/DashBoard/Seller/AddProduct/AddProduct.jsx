import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';
import PrimaryButton from '../../../../Components/Button/PrimaryButton';
import SmallSpinner from '../../../../Components/Spinner/SmallSpinner';
import { serverApi } from '../../../../Api/MainApi';


const AddProduct = () => {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    console.error(errors)
    const navigate = useNavigate();
    const imgKey = process.env.REACT_APP_Imagebb_key

    const brands = ["mans", "children", "woman", "shoes", "phone", "bag"]

    const handleAddProduct = (data) => {
        setLoading(true)
        const productName = data.productName;
        const price = data.price;
        const categories = data.categories;
        const description = data.description;
        const time = new Date().toLocaleString();

        const productInfo = {
            productName,
            name: user.displayName,
            sellerEmail: user.email,
            price,
            categories,
            description,
            time
        }
        const image = data.image[0];
        //     // upload image
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?&key=${imgKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const photoURL = imageData.data.url;
                    productInfo.photoURL = photoURL;
                    addToDB(productInfo)
                    // console.log(productInfo)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }
    //     // save information to the database 

    const addToDB = (productInfo) => {
        console.log(productInfo);
        fetch(`${serverApi}/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your Product successfully added');
                    navigate('/dashboard')
                    setLoading(false)
                }
            })
    }
    // if (isLoading) {
    //     return <Spinner />
    // }
    return (
        <div className='flex justify-center items-center py-5 '>
            <div className='flex flex-col w-11/12  p-6 rounded-md sm:p-10 bg-blue-200 text-gray-900'>
                <div className='mb-5 text-center'>
                    <h1 className='text-4xl font-bold'>Add Your Product</h1>
                </div>
                <form onSubmit={handleSubmit(handleAddProduct)} className='space-y-6 ng-untouched ng-pristine ng-valid' >
                    <div className='space-y-4'>
                        <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Product Name</span>
                                </label>
                                <input type="text" className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("productName", {
                                    required: "Product Name is required"
                                })} />

                            </div>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Price</span>
                                </label>
                                <input type="number"
                                    className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("price", {
                                        required: "Product Price is required"
                                    })} />
                            </div>
                        </div>
                        <div className='flex md:flex-row lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Categories</span>
                                </label>
                                <select defaultValue={''}
                                    className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("categories", {
                                        required: "Brand is required"
                                    })}>
                                    <option value={''} disabled selected>Select Categories</option>
                                    {
                                        brands.map((brand, i) => <option
                                            key={i}
                                            value={brand}
                                        >{brand}</option>)
                                    }
                                </select>

                            </div>
                            <div className="form-control w-full md:w-6/12 lg:w-6/12">
                                <label className="label">
                                    <span className="label-text font-bold">Product Image</span>
                                </label>
                                <input
                                    className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("image", {
                                        required: "Image is required"
                                    })}
                                    required type='file' id='image' name='image' accept='image/*'
                                />

                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Sort Description</span>
                            </label>
                            <textarea className='w-full px-3 py-2 border rounded-md border-gray-900 focus:outline-green-500 bg-blue-200 text-gray-900' {...register("description", {
                                required: "description is required"
                            })}></textarea>
                        </div>
                    </div>
                    <div>
                        <PrimaryButton
                            type='submit'
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            {loading ? <SmallSpinner /> : 'ADD PRODUCT'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;