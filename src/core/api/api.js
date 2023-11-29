import axios from 'axios';

export const baseUrl = 'http://localhost:4000';
// export const baseUrl = 'https://cryptocaps-728e9.web.app/public/db.json';

export default axios.create({
    baseURL: baseUrl,

    headers: { 'accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': `${localStorage.getItem('authorizationToken')}`
             },
});