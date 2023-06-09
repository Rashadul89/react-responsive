import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
// import repare1 from '../../../images/repare1.jpg'

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container'>
        <div className="row">
        <h2 className='services-title mt-3'>See Out Services:{services.length}</h2>
            <div  className='service-container'>
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
           
        </div>
    );
};

export default Services;