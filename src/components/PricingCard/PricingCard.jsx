import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div>
            <div>
                <h3 className='text-7xl'>{pricing.name}</h3>
                <h5 className='text-3xl'>{pricing.price}</h5>
            </div>
        </div>
    );
};

export default PricingCard;