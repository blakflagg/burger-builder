import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-c2863.firebaseio.com/'
});

export default instance;
