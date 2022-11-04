import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import * as act from '../store/actions/auth';
import { useNavigate, Link } from 'react-router-dom';

const Signin = props => {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState({
        nameError: null,
        emailError: null,
        passwordError: null
    })

    const signinHandler = async () => {
        try {
            if(!validate()) {
                setTimeout(() => {
                    window.location.reload();
                    alert('try again!')
                }, 5000)
                return
            }
            const res = await Axios.post('http://127.0.0.1:8000/api/login', formData);
            dispatch(act.auth(res.data));
            alert('Signin successful!');
            navigate('/home');
            window.location.reload();
        } catch (err) {
            alert(err.response.data.message);
            setFormData({
                email: '',
                password: ''
            });
        }
    }

    function validate() {
        let emailError = "";
        let passwordError = "";

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!formData.email || reg.test(formData.email) === false) {
            emailError = "Email Field is Invalid ";
            }
        const regPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
        if(!formData.password || regPassword.test(formData.password) === false){
            passwordError = "Password field mast contains different simbols, nambers in low and high registers";
            }

        if(emailError || passwordError) {
            setErrors({emailError,passwordError});
            return false;
            }
        return true
    }

    return(
        <>
        <div className='row justify-content-center'>
            <div className='col-4 p-5'>
                <h2>Login</h2>
                <div className='card'>
                    <div className='card-body'>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email address</label>
                            <input 
                                type='email'
                                name='email'
                                className='form-control'
                                id='email'
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                                <span className="text-danger">{errors.emailError}</span>

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input 
                                type='password'
                                name='password'
                                className='form-control'
                                id='password'
                                value={formData.password}
                                onChange={e => setFormData({...formData, password: e.target.value})}
                                />
                                <span className="text-danger">{errors.passwordError}</span>

                        </div>
                        <button type='button' className='btn btn-primary' onClick={() => signinHandler()}>Login</button>
                    </div>
                </div>
                <div className="navbar navbar-expand navbar-dark bg-primary">
                    <li className="navbar-nav mr-auto">
                    <Link to={"/register"} className="nav-link">
                        Registration
                    </Link>
                    </li>
                </div>
            </div>
        </div>

        </>
    )
}

export default Signin;