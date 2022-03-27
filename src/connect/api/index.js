import axios from 'axios';
// const API = axios.create({ baseURL: 'https://mern-stock.herokuapp.com' });


export const fetchPost = (id) => API.get(`/posts/${id}`);
