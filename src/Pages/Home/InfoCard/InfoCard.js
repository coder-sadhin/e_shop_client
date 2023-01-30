import React from 'react';
import { Link } from 'react-router-dom';
import './InfoCard.css'

const InfoCard = ({ card }) => {
    const { name, icon, route } = card
    console.log(card);
    return (
        <div>
            <Link to={`/category/${route}`}>
                <div style={{ backgroundImage: `url(${icon})` }} id='Style-shadow'
                    className={`card card-side h-56 bg-cover shadow-xl ml-2 bg-base-100 hover:scale-110 transition duration-300 ease-in-out`}>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default InfoCard;