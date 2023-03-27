import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle( auth );
    const [signInWithGithub,user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    let errorElement;
    if (error || error1) {
         errorElement=<p className='text-danger'>Error: {error?.message} {error1?.message}</p>
      
      }
      if (user || user1) {
        navigate('/home'); 
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '2px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={()=>signInWithGoogle()}
                className='btn btn-info border border-secondary w-50 d-block mx-auto my-2'><img style={{}} src={google} alt=""/><span className='px-2'>Google Sign-in</span></button>  
                <button onClick={()=>signInWithGithub()}
                className='btn btn-info border border-secondary w-50 d-block mx-auto my-2'><img style={{}} src={facebook} alt=""/><span className='px-2'>Github Sign-in</span></button> 
                 <button className='btn btn-info border border-secondary w-50 d-block mx-auto my-2'><img style={{}} src={github} alt=""/><span className='px-2'>Facebook Sign-in</span></button> 
            </div>
        </div>
    );
};

export default SocialLogin;