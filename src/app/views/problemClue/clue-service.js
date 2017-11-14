import api from '../../utils/api.js';
import {apiConfig} from '../../global/api.config';
const $ = require("jQuery");
export const create = (data) => { return api.post(`clueForm/create`, data).then(res => res.data); };

export const listAll = (params) => { return api.post(`clueForm/listAll${params}`).then(res => res.data); };

export const deleteRecord = (params) => { return api.post(`clueForm/delete${params}`).then(res => res.data); };

export const getClueFormById = (params) => { return api.post(`clueForm/getClueFormById${params}`).then(res => res.data); };

export const update = (data) => { return api.post(`clueForm/update`,data).then(res => res.data); };

export const downLoad = (params) =>{
    var url=apiConfig.base_api_host+`file/downLoad${params}`;
    if ($('#exportFile').length <= 0){
        $('body').append("<iframe id=\"exportFile\" style=\"display:none\"></iframe>");
    }
    $('#exportFile').attr('src', url);
};