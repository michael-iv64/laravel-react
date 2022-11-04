import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import { axios } from '../store/service'; 
import * as act from '../store/actions/auth';
import {allUsersAction }from '../store/actions/allUsers';
const Home = props => {
    const user = useSelector(state => state.auth.user);
    const users = useSelector(state=> state.allUsers.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [users, setUsers] = useState([]
    //     // name:'',
    //     // email:'',
    //     // created_at: ''
  
    //   )
   
    useEffect(() => {

        if(user === null) {
            return navigate('/');
        }

    }, [])


    const logout = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/logout');
            console.log(res);
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            alert('Signout successful!');

            navigate('/');
            
        } catch (err) {
            console.log(err);
            // alert(err);
        }
    }
    const getAll = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/getAll');
            console.log(res);
            dispatch(allUsersAction(res.data));

            console.log('users', users)
        

            // navigate('/me');
        } catch (err) {
            console.log(err);
            // alert(err);
        }
    }

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
            <nav className='navbar navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand'>Welcome <b> {user.name }</b></a>
                    <button className='btn btn-outline-primary' onClick={() => logout()}>Logout</button>
                    <button className='btn btn-outline-primary' onClick={() => getAll()}>GetAll</button>
                    
                </div>
            </nav>
        </div>
         <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">id</th>
                                <th className="px-6 pt-5 pb-4">Name</th>
                                <th className="px-6 pt-5 pb-4">Email</th>
                                <th className="px-6 pt-5 pb-4">Created_at</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(({ id, name, email, created_at, planet_id }) => (
                                <tr key={id} className="">
                                    <td className="border-t p-2">
                                        {id}
                                    </td>
                                    <td className="border-t p-2">
                                            {name}
                                    </td>
                                    <td className="border-t p-2">
                                            {email}
                                    </td>
                                    <td className="border-t p-2">
                                            {created_at}
                                    </td>
                                    <td className="border-t p-2">
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t p-2"
                                        colSpan="4"
                                    >
                                        No contacts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table><br/>
                </div>
        </div>
    );
}

export default Home;