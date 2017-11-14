import api from '../../utils/api.js';
export const requestLogin = params => { return api.post(`sys/login`+params).then(res => res.data); };