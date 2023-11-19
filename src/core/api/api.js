import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:4000',

    headers: { 'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('authorizationToken')}`
             },
});