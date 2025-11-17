import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({PricingPromise}) => {
   const PricingData = use(PricingPromise);
   console.log(PricingData)

    return (
        <div>
            <h2 className='text-2xl'>Get Your Mebership</h2>
            <div>
                {
                    PricingData.map(pricing=> <PricingCard
                        
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;