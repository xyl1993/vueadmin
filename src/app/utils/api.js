import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
import {apiConfig} from '../global/api.config';

const timeout = 30000;
const allowUrls = new RegExp(apiConfig.allowUrls);//'g'
var status = 200;
function createAuthorizationHeader(url) {
    if(!allowUrls.test(url)){
        let token = sessionStorage.getItem('access-token');
        return {
            "access-token":token,
            // "Content-Type":"application/json;charset=UTF-8"
        }
    }
    return {}
  }

//请求时的拦截器
axios.interceptors.request.use(config => {
    NProgress.start()
    return config
}, error => {
    return Promise.reject(error)
})

//求完成后的拦截器
axios.interceptors.response.use(response => response, 
    error => {
        return Promise.resolve(error.response)
    }
)

function checkStatus(response) {
    NProgress.done()
    if(response.status===403){
        return {
            data:{
                code:-403
            }
        }
    }
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
}

//针对返回status为false的处理
// function checkCode(res) {
//     console.log(res);
//     // if (!res.data.status) {
//     //     alert(res.data.message)
//     // }
//     return res
// }

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url:apiConfig.base_api_host+url,
            data: qs.stringify(data),
            timeout: timeout,
            headers: createAuthorizationHeader(url)
        }).then(checkStatus)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url:apiConfig.base_api_host+url,
            timeout: timeout,
            headers: createAuthorizationHeader(url)
        }).then(checkStatus)
    }
}