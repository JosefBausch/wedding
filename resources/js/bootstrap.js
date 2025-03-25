import axios from 'axios';
window.axios = axios;

window.axios.defaults.baseURL = 'https://josefplusrose.life';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
