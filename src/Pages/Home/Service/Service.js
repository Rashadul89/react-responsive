import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{name,id,img,description,price}=service;
    const navigate=useNavigate();
    
    
    const handleDetails=id=>{
        navigate(`/service/${id}`)
    }

    return (
        <div id='services'className='singleservice-container'>
            <h1>ID:{id} </h1>
            <h4>Name:{name}</h4>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p><small>Description:{description}</small></p>
            <button onClick={()=>handleDetails(id)}>Booked This Service</button>
        </div>
    );
};

export default Service;