import React from 'react';

import shoe from '../../../assets/shoe.webp'
import jacket from '../../../assets/jacket.webp'
import pant from '../../../assets/pant.webp'
import tShirt from '../../../assets/t-shirt.webp'
import cap from '../../../assets/cap.webp'
import balt from '../../../assets/balt.jpg'
import Collection from './Collection';

const clothData = [
    {
        id: 1,
        name: "Shoes",
        description: 'A shoe is an item of footwear intended to protect and comfort the human foot...',
        img: shoe
    },
    {
        id: 2,
        name: "Jacket",
        description: 'A jacket is a garment for the upper body, usually extending below the hips...',
        img: jacket
    },
    {
        id: 3,
        name: "Pant",
        description: 'Jeans are a type of pants or trousers made from denim or dungaree cloth...',
        img: pant
    },
    {
        id: 4,
        name: "T-Shirt",
        description: 'A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves...',
        img: tShirt
    },
    {
        id: 5,
        name: "Cap",
        description: 'Caps typically have a visor, or no brim at all. They are popular in casual and informal settings...',
        img: cap
    },
    {
        id: 6,
        name: "Belt",
        description: 'A belt is a loop of flexible material used to link two or more rotating shafts mechanically...',
        img: balt
    },
]

const Collections = () => {
    return (
        <div >
            <div >
                <h1 className='text-4xl text-center mt-12'>Here is all cloth Product Demo</h1>
            </div>
            <div className='grid mt-16 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            >
                {clothData.map(cloth => <Collection
                    key={cloth.id}
                    cloth={cloth}
                ></Collection>)}
            </div>
        </div>
    );
};

export default Collections;