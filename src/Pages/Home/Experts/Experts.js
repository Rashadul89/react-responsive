import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg'
import expart2 from '../../../images/experts/expert-2.jpg'
import expart3 from '../../../images/experts/expert-3.jpg'
import expart4 from '../../../images/experts/expert-4.jpg'
import expart5 from '../../../images/experts/expert-5.jpg'
import expart6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        { id: 1, name: 'will Shith', img: expart1 },
        { id: 2, name: 'Lavlu', img: expart2 },
        { id: 3, name: 'kabil', img: expart3 },
        { id: 4, name: 'Abul', img: expart4 },
        { id: 5, name: 'Ammakan', img: expart5 },
        { id: 5, name: 'Kakan', img: expart6 }
    ]
    return (
        <div className='container'>
            <h2 className='text-info text-center'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert=><Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;