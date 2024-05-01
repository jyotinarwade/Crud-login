import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = ()=> {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name:"",
        email : "",
        password : "",
    });
    // to store value in local storage

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };
    return <div>
        <div className="d-flex w-100 vh-50 justify-content-center align-item-center">
            <div className="w-100 border bg-secondary text-white p-3">
                <h3> Register</h3>
        <form onSubmit={handleSubmit}>
            <div className='form-outline mb-4'>
                <input name='name' value={input.name} onChange={ (e)=> setInput({ ...input,[e.target.name] : e.target.value})} type="text" id="form3Examplelcg" className='form-control form-contrio-lg'/>
                <label className='form-label' htmlFor='form3Examplelcg'>Your Name</label>

            </div>
            <div className='form-outline mb-4'>
            <input name='email' value={input.email} 
            onChange={ (e)=> setInput({ ...input,[e.target.name] : e.target.value})} type="email" id="form3Examplelcg" className='form-control form-contrio-lg'/>
                <label className='form-label' htmlFor='form3Examplelcg'>Your Email</label>

            </div>
            <div className='form-outline mb-4'>
            <input name='password' value={input.password} 
            onChange={ (e)=> setInput({ ...input,[e.target.name] : e.target.value})} type="password" 
            id="form3Examplelcg" className='form-control form-contrio-lg'/>
                <label className='form-label' htmlFor='form3Examplelcg'>Your Password</label>

            </div>
            <div className='d-flex justify-content-center'>
                <button type='submit'
                className='btn btn-success btn-block btn-lg gradient-customer-4 text-body text-white'>
                    Register

                </button>

            </div>
            <p className='text-center text-muted mt-5 mb-0'>Have already an account
            <Link to="/register" className='fw-bold text-body'>
                <u>Login Here</u></Link></p>

        </form>
    </div>
    </div></div>
};
export default Register;