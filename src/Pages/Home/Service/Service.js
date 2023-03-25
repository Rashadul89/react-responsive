import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{name,id,img,description,price}=service;
    return (
        <div className='singleservice-container'>
            <h1>ID:{id} </h1>
            <h4>Name:{name}</h4>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p><small>Description:{description}</small></p>
            <button>Booked This Service</button>
        </div>
    );
};

export default Service;