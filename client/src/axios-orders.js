import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-sandwich-shoppe.firebaseio.com/'
});

export default instance;