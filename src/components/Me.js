import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import { axios } from '../store/service'; 
import * as act from '../store/actions/auth';

const Me = props => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null) {
            return navigate('/');
        }
    })

    return(
        <div>
         <nav className="navbar navbar-expand navbar-dark bg-primary">
          <div className="navbar-nav mr-auto">
            <li className="navbar-nav mr-auto">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-nav mr-auto">
              <Link to={"/me"} className="nav-link">
                About
              </Link>
            </li>
            </div>
        </nav>
        <div className='p-5'>
                    <p> id : { user.id}</p> 
                    <p> name : { user.name}</p>
                    <p> email : { user.email}</p>
                    <p> created_at : { user.created_at}</p>
                   
        </div>
        </div>
    );
}

export default Me;