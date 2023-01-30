import React from 'react';
import './Collection.css'

const Collection = ({ cloth }) => {
    const { name, description, img } = cloth
    return (
        <div className="card card-compact p-4 bg-base-100 shadow-xl" data-aos="zoom-in-up"
            data-aos-duration="2000">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary w-full text-white">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default Collection;