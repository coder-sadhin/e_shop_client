import React from 'react';
import InfoCard from './InfoCard';
import { useQuery } from '@tanstack/react-query';
import { serverApi } from '../../../Api/MainApi';

const InfoCards = () => {


    const { data: cardData = [], refetch } = useQuery({
        queryKey: ['cardData'],
        queryFn: async () => {
            try {
                const res = await fetch(`${serverApi}/categoryItem`);
                const data = await res.json();
                return data
            }
            catch (err) { }
        }
    })

    console.log(cardData);
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center mt-8 '>Here is all Product Categoris</h1>
            <div className='grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'  >
                {
                    cardData.map(card => <InfoCard
                        key={card._id}
                        card={card}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;