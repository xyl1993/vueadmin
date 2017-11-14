<template>
<el-form :model="registForm" ref="ruleForm2" label-position="left" label-width="0px">
  <el-row class="registration" :gutter="20" type="flex" id="div_print" justify="center">
    <el-col :span="20">
        <h1>反映问题线索登记表</h1>
        <div class="title">
            <h3>线索提供部门:</h3>
            <input class="full-input" v-model="registForm.dept" maxlength="50" type="text">
        </div>
        <div class="el-table el-table--border">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
                <tbody>
                    <tr>
                        <td class="lab">线索来源</td>
                        <td class="td-padding">
                            <textarea class="my-area" v-model="registForm.source" maxlength="200" id="area1"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="lab" style="padding:0 0">被反映人基本情况</td>
                        <td style="padding:0 0">
                            <div class="border-bottom flex-coin">
                                <div class="menu-width">
                                    <div class="child-td  border-right">
                                        姓名
                                    </div>
                                </div>
                                <div class="flex-full">
                                    <div class="child border-right">
                                        <input v-model="registForm.name" maxlength="10" type="text">
                                    </div>
                                </div>
                                <div class="menu-width">
                                    <div class="child-td border-right">
                                        性别
                                    </div>
                                </div>
                                <div class="flex-full">
                                    <div class="child border-right">
                                        <input v-model="registForm.sex" maxlength="1" type="text">
                                    </div>
                                </div>
                                <div class="menu-width">
                                    <div class="child-td border-right">
                                        年龄
                                    </div>
                                </div>
                                <div class="flex-full">
                                    <div class="child">
                                        <input v-model="registForm.age" maxlength="11" type="number">
                                    </div>
                                </div>
                            </div>
                            <div class="border-bottom flex-coin">
                                <div class="menu-width">
                                    <div class="child-td border-right">
                                        单位
                                    </div>
                                </div>
                                <div class="flex-full">
                                    <div class="child border-right">
                                        <input v-model="registForm.company" maxlength="100" type="text">
                                    </div>
                                </div>
                                <div class="menu-width">
                                    <div class="child-td border-right">
                                        职务
                                    </div>
                                </div>
                                <div class="flex-full">
                                    <div class="child border-right">
                                        <input v-model="registForm.duty" maxlength="100" type="text">
                                    </div>
                                </div>
                                <div class="menu-width">
                                    <div class="child-td border-right">
                                        级别
                                    </div>
                                </div>
                                <div class="flex-full">
                                    <div class="child">
                                        <input v-model="registForm.level" maxlength="100" type="text">
                                    </div>
                                </div>
                            </div>
                            <el-row>
                                <el-col :span="5" class="child-td border-right">
                                    政治面貌
                                </el-col>
                                <el-col :span="7" class="child border-right">
                                    <input v-model="registForm.politicalStatus" maxlength="100" type="text">
                                </el-col>
                                <el-col :span="5" class="child-td border-right">
                                    入党时间
                                </el-col>
                                <el-col :span="7" class="registration-child child join-child" style="padding:0">
                                    <el-date-picker
                                        v-model="registForm.joinTimeStr"
                                        type="date"
                                        value-format="yyyy-MM-dd"
                                        >
                                    </el-date-picker>
                                </el-col>
                            </el-row>
                        </td>
                    </tr>
                    <tr>
                        <td class="lab">反映的主要问题</td>
                        <td class="td-padding">
                            <textarea v-model="registForm.question" class="other-area my-area" maxlength="500" id="area1"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="lab">问题性质</td>
                        <td class="td-padding">
                            <textarea v-model="registForm.nature" class="my-area" maxlength="500"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="lab">线索提供部门意见</td>
                        <td class="td-padding">
                            <textarea v-model="registForm.opinion" maxlength="500" class="my-area other-area"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="flex-main">
                                <div class="remaid">
                                     附:
                                </div>
                                <div style="flex:1;padding-top:1px;">
                                    <textarea v-model="registForm.remark" maxlength="500" class="my-area"></textarea>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="border-bottom:none;">
                            <div class="flex-main">
                                <div class="remaid">
                                     附件:
                                </div>
                                <div  v-if="canDownload" class="dowload-div" v-on:click="download">

                                </div>
                                <div style="flex:1;padding-top:1px;">
                                    <el-upload
                                        class="upload-demo"
                                        :headers="headers"
                                        :action="actionUrl"
                                        :on-remove="handleRemove"
                                        :on-success="handleSuccess"
                                        :on-error="handleError"
                                        :limit="1"
                                        :on-exceed="handleExceed"
                                        :file-list="fileList">
                                        <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <el-row class="people-row">
            <el-col :span="2" style="width:73px;">
                <h3>送件人:</h3>
            </el-col>
            <el-col :span="6">
                <input v-model="registForm.sender" maxlength="20" type="text" />
            </el-col>
            <el-col :span="2" style="width:73px;">
                <h3>收件人:</h3>
            </el-col>
            <el-col :span="6">
                <input v-model="registForm.receiver" maxlength="20" type="text" />
            </el-col>
            <el-col :span="2" style="width:87px;">
                <h3>收件日期:</h3>
            </el-col>
            <el-col :span="6" class="revice-child">
                <el-date-picker
                    v-model="registForm.receiveTimeStr"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    >
                </el-date-picker>
            </el-col>
        </el-row>
        <div class="title bottom-tit">
            <h3>案件线索登记号:</h3>
            <input  contenteditable="true" v-model="registForm.clueCode" class="full-input" maxlength="200" type="text">
        </div>
        <div class="remark-box">
            <div class="remark-title">备注：</div>
            <div>1、线索来源请按:上级交办、信访举报、巡察中发现、公检法等机关移送、监督检查工作中发现、审计中发现、纪律审查中发现、其他问题线索填写。</div>
            <div>2、问题性质一栏按照新《条例》中的“六大纪律违纪行为”写明“违反**纪律行为”，如是其他情形请写明“其他违纪行为”。</div>
        </div>
        <div class="el-form-item__content">
            <el-button class="right" @click.native.prevent="submit" type="primary" :loading="logining">提交</el-button>
        </div>
    </el-col>
  </el-row>
</el-form>
</template>
<script>
import {create,getClueFormById,update,downLoad} from './clue-service';
import {statusValid} from '../../utils/status-valid';
import {autoTextarea} from '../../utils/auto-textarea';
import {apiConfig} from '../../global/api.config';
import {getElementsByClass} from '../../utils/getElementsByClass';
import {timeoutText} from '../../global/base.config';
const $ = require("jQuery");
import {formatData} from '../../utils/formatData'
export default {
    data(){
        return {
            fileList:[],
            registForm:{
                id:'',
                dept:'',
                source:'',
                name:'',
                sex:'',
                age:'',
                company:'',
                duty:'',
                level:'',
                politicalStatus:'',
                joinTimeStr:'',
                question:'',
                nature:'',
                opinion:'',
                filePath:'',
                sender:'',
                receiver:'',
                receiveTimeStr:'',
                clueCode:'',
                remark:''
            },
            actionUrl:`${apiConfig.base_api_host}file/upload`,
            logining:false,
            headers:{},
            canDownload:false
        }
    },
    mounted() {
        var _this = this;
        let token = sessionStorage.getItem('access-token');
        _this.headers = {"access-token":token};
        let areaArr =$('.my-area');
        for(let i=0,len=areaArr.length;i<len;i++){
            autoTextarea(areaArr[i],0,243);
        }
        if(_this.$route.query.id){
            let params = `?id=${_this.$route.query.id}`;
            getClueFormById(params).then(res=>{
                let { code,data } = res;
                //请求校验
                if(statusValid(_this,code)){
                    if (data) {
                        _this.registForm = {
                            id:data.id,
                            dept:data.dept,
                            source:data.source,
                            name:data.name,
                            sex:data.sex,
                            age:data.age,
                            company:data.company,
                            duty:data.duty,
                            level:data.level,
                            politicalStatus:data.politicalStatus,
                            joinTimeStr:data.joinTime?formatData.getSmpFormatDateByLong(data.joinTime,false):'',
                            question:data.question,
                            nature:data.nature,
                            opinion:data.opinion,
                            filePath:data.filePath,
                            sender:data.sender,
                            receiver:data.receiver,
                            receiveTimeStr:data.receiveTime?formatData.getSmpFormatDateByLong(data.receiveTime,true):'',
                            clueCode:data.clueCode,
                            remark:data.remark
                        }
                        if(data.filePath){
                            _this.fileList.push({name:data.filePath,url:data.filePath});
                            _this.canDownload = true;
                        }
                    }
                }
            })
        }
    },
    methods:{
        submit(){
            var _this = this;
            this.logining = true;
            let paramsData = _this.registForm;
            let requireSuccess = (res,clear)=>{
                _this.logining = false;
                let { code,data } = res;
                //请求校验
                if(statusValid(_this,code)){
                    if (data) {
                        _this.$message({
                            message: '保存成功',
                            type: 'success'
                        });
                        if(clear){
                            _this.registForm={
                                id:'',
                                dept:'',
                                source:'',
                                name:'',
                                sex:'',
                                age:'',
                                company:'',
                                duty:'',
                                level:'',
                                politicalStatus:'',
                                joinTimeStr:'',
                                question:'',
                                nature:'',
                                opinion:'',
                                filePath:'',
                                sender:'',
                                receiver:'',
                                receiveTimeStr:'',
                                clueCode:'',
                                remark:''
                            }
                             _this.fileList = [];
                             _this.canDownload = false;
                        }
                    }
                }
            };
            if(_this.$route.query.id){
                update(paramsData).then(res => {
                    requireSuccess(res);
                });
            }else{
                create(paramsData).then(res => {
                    requireSuccess(res,true);
                });
            }
        },
        download(){
            var that = this;
            var id = that.$route.query.id;
            if(id){
                let params = `?id=${id}`;
                downLoad(params);
            }
        },
        handleRemove(file,fileList){
            this.registForm.filePath = '';
            this.fileList = [];
            this.canDownload = false;
        },
        handleSuccess(res) {
            let _this = this;
            let {path,result} = res;
            if(result){
                _this.registForm.filePath = path;
                _this.canDownload = true;
            }
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        handleError(err){
            var that = this;
            if(err.status === 403){
                 that.$message({
                    message: timeoutText,
                    type: 'warning',
                    duration:2000,
                    onClose:()=>{
                        that.$router.replace({ path: '/login' });
                    }
                });
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './clue-registration.scss';
</style>
<style lang="scss">
.registration-child{
    input.el-input__inner{
        border: none;
        text-align:center;
    }
}
.join-child,.revice-child{
    .el-input__inner{
        border:none;
        padding-left:0;
    }
    .el-input__icon{
        display:none;
    }
}
.revice-child .el-input__inner{
    height:25px;
    
}
</style>

