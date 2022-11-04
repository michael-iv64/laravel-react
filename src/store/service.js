import Axios from 'axios';

export const axios = Axios.create({
    headers: {
        Authorization: sessionStorage.getItem('token')
    }
});