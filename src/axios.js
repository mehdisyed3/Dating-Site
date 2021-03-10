import axios from 'axios';

// this is how we hook/connect our backend to frontend.
const instance = axios.create({
	baseURL: 'http://localhost:8001/',
});

export default instance;
