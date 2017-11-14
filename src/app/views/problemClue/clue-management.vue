<template>
<el-form :model="registForm" ref="ruleForm2" label-position="left" label-width="0px">
  <el-row class="management" :gutter="20" type="flex" id="div_print" justify="center">
    <el-col :span="20">
        <h1>如皋市纪委监察局反映问题线索处置呈批表</h1>
        <div class="title">
            <h3>如皋市纪委、监察局</h3>
            <h3 class="right">2017年1月19日</h3>
        </div>
        <div class="el-table el-table--border">
             <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
                <tbody>
                    <tr>
                        <td class="lab border-right">提供部门</td>
                        <td class="td-padding border-right" colspan="2">
                            <textarea class="my-area" v-model="registForm.source" maxlength="200" id="area1"></textarea>
                        </td>
                        <td class="lab border-right">线索来源</td>
                        <td class="td-padding" colspan="2">
                            <textarea class="my-area" v-model="registForm.source" maxlength="200" id="area1"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="lab border-right" rowspan="2">被反映人姓名</td>
                        <td class="td-padding border-right" rowspan="2">
                            <input data-v-2b091381="" maxlength="10" type="text">
                        </td>
                        <td class="lab border-right">
                            单位
                        </td>
                        <td class="td-padding" colspan="3">
                            <input v-model="registForm.name" maxlength="10" type="text">
                        </td>
                    </tr>
                    <tr>
                        <td class="lab border-right">
                            职务
                        </td>
                        <td class="td-padding border-right">
                            <input v-model="registForm.name" maxlength="10" type="text">
                        </td>
                        <td class="lab border-right">
                            级别
                        </td>
                        <td class="td-padding">
                            <input v-model="registForm.name" maxlength="10" type="text">
                        </td>
                    </tr>
                    <tr>
                        <td class="lab border-right" rowspan="2" colspan="2">
                            线索反映主要问题性质
                        </td>
                        <td class="border-right lab" colspan="2">
                            一级
                        </td>
                        <td class="lab" colspan="2">
                            二级
                        </td>
                    </tr>
                    <tr>
                        <td class="td-padding border-right" colspan="2">
                            <input v-model="registForm.name" maxlength="10" type="text">
                        </td>
                        <td class="td-padding" colspan="2">
                            <input v-model="registForm.name" maxlength="10" type="text">
                        </td>
                    </tr>
                    <tr>
                        <td class="lab border-right" colspan="2">
                            主体身份核证情况
                        </td>
                        <td class="td-padding" colspan="4">
                            <textarea class="my-area" v-model="registForm.source" maxlength="200" id="area1"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div class="flex-main">
                                <div class="remaid">
                                    问题线索登记号:
                                </div>
                                <div style="flex: 1 1 0%; padding-top: 1px;">
                                    <textarea data-v-2b091381="" maxlength="500" class="my-area" ></textarea>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div class="flex-main">
                                <div class="remaid">
                                    线索提供部门意见:
                                </div>
                                <div style="flex: 1 1 0%; padding-top: 1px;">
                                    <textarea data-v-2b091381="" maxlength="500" class="my-area" ></textarea>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="lab" colspan="6">
                            <div class="flex-main">
                                <div class="remaid">
                                    案件管理室意见:
                                </div>
                                <div style="flex: 1 1 0%; padding-top: 1px;">
                                    <textarea data-v-2b091381="" maxlength="500" class="my-area"></textarea>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="lab" colspan="6" style="border-bottom: none;">
                            <div class="flex-main">
                                <div class="remaid">
                                    领导会签:
                                </div>
                                <div style="flex: 1 1 0%; padding-top: 1px;">
                                    <textarea maxlength="500" class="my-area other-area" style="resize: none;height: 208px;overflow-y: hidden;"></textarea>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="el-form-item__content">
            <el-button class="right" @click.native.prevent="submit" type="primary" :loading="logining">提交</el-button>
        </div>
    </el-col>
  </el-row>
</el-form>
</template>
<script>
import { create, getClueFormById, update, downLoad } from "./clue-service";
import { statusValid } from "../../utils/status-valid";
import { autoTextarea } from "../../utils/auto-textarea";
import { apiConfig } from "../../global/api.config";
import { timeoutText } from "../../global/base.config";
const $ = require("jQuery");
import { formatData } from "../../utils/formatData";
export default {
  data() {
    return {
      fileList: [],
      registForm: {
        id: "",
        dept: "",
        source: "",
        name: "",
        sex: "",
        age: "",
        company: "",
        duty: "",
        level: "",
        politicalStatus: "",
        joinTimeStr: "",
        question: "",
        nature: "",
        opinion: "",
        filePath: "",
        sender: "",
        receiver: "",
        receiveTimeStr: "",
        clueCode: "",
        remark: ""
      },
      actionUrl: `${apiConfig.base_api_host}file/upload`,
      logining: false,
      headers: {},
      canDownload: false
    };
  },
  mounted() {
    var _this = this;
    let token = sessionStorage.getItem("access-token");
    _this.headers = { "access-token": token };
    let areaArr = $(".my-area");
    for (let i = 0, len = areaArr.length; i < len; i++) {
      autoTextarea(areaArr[i], 0, 243);
    }
    if (_this.$route.query.id) {
      let params = `?id=${_this.$route.query.id}`;
      getClueFormById(params).then(res => {
        let { code, data } = res;
        //请求校验
        if (statusValid(_this, code)) {
          if (data) {
            _this.registForm = {
              id: data.id,
              dept: data.dept,
              source: data.source,
              name: data.name,
              sex: data.sex,
              age: data.age,
              company: data.company,
              duty: data.duty,
              level: data.level,
              politicalStatus: data.politicalStatus,
              joinTimeStr: data.joinTime
                ? formatData.getSmpFormatDateByLong(data.joinTime, false)
                : "",
              question: data.question,
              nature: data.nature,
              opinion: data.opinion,
              filePath: data.filePath,
              sender: data.sender,
              receiver: data.receiver,
              receiveTimeStr: data.receiveTime
                ? formatData.getSmpFormatDateByLong(data.receiveTime, true)
                : "",
              clueCode: data.clueCode,
              remark: data.remark
            };
            if (data.filePath) {
              _this.fileList.push({ name: data.filePath, url: data.filePath });
              _this.canDownload = true;
            }
          }
        }
      });
    }
  },
  methods: {
    submit() {
      var _this = this;
      this.logining = true;
      let paramsData = _this.registForm;
      let requireSuccess = (res, clear) => {
        _this.logining = false;
        let { code, data } = res;
        //请求校验
        if (statusValid(_this, code)) {
          if (data) {
            _this.$message({
              message: "保存成功",
              type: "success"
            });
            if (clear) {
              _this.registForm = {
                id: "",
                dept: "",
                source: "",
                name: "",
                sex: "",
                age: "",
                company: "",
                duty: "",
                level: "",
                politicalStatus: "",
                joinTimeStr: "",
                question: "",
                nature: "",
                opinion: "",
                filePath: "",
                sender: "",
                receiver: "",
                receiveTimeStr: "",
                clueCode: "",
                remark: ""
              };
              _this.fileList = [];
              _this.canDownload = false;
            }
          }
        }
      };
      if (_this.$route.query.id) {
        update(paramsData).then(res => {
          requireSuccess(res);
        });
      } else {
        create(paramsData).then(res => {
          requireSuccess(res, true);
        });
      }
    },
    download() {
      var that = this;
      var id = that.$route.query.id;
      if (id) {
        let params = `?id=${id}`;
        downLoad(params);
      }
    },
    handleRemove(file, fileList) {
      this.registForm.filePath = "";
      this.fileList = [];
      this.canDownload = false;
    },
    handleSuccess(res) {
      let _this = this;
      let { path, result } = res;
      if (result) {
        _this.registForm.filePath = path;
        _this.canDownload = true;
      }
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
      );
    },
    handleError(err) {
      var that = this;
      if (err.status === 403) {
        that.$message({
          message: timeoutText,
          type: "warning",
          duration: 2000,
          onClose: () => {
            that.$router.replace({ path: "/login" });
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: #000;
.management {
  td input{
      border: none;
      width: 100%;
  }
  h1 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    letter-spacing: 4px;
  }
  .full-input {
    width: 196px;
  }
  .dowload-div {
    position: absolute;
    width: 260px;
    height: 25px;
    top: 42px;
    left: 165px;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }
  }
  .title {
    padding-bottom: 10px;
    h3 {
      display: inline-block;
    }
    input {
      display: inline-block;
      border: none;
      font-size: 1.17em;
      border-bottom: 1px solid;
    }
  }
  .flex-main {
    display: flex;
    position: relative;
  }
  .el-table {
    margin-top: 0;
  }
  .two-area {
    height: 36px;
  }
  .other-area {
    height: 117px;
  }
  .el-table--border td {
    border: none;
  }
  table {
    width: 100%;
    .lab {
      width: 150px;
      text-align: center;
      font-weight: bold;
      font-size: 15px;
    }
    textarea {
      width: 100%;
      font-size: 15px;
      height: 18px;
      vertical-align: middle;
    }
  }

  .child {
    text-align: center;
    height: 41px;
    line-height: 41px;
    input {
      width: 100%;
      height: 21px !important;
      border: none;
      text-align: center;
    }
  }
  .remaid {
    width: 150px;
    text-align: right;
    padding-right: 15px;
    font-weight: 700;
    float: left;
  }
  .remaid-input {
    width: 100%;
    border: none;
  }
  .people-row {
    input {
      font-size: 1.17em;
      border: none;
      width: 100%;
      line-height: 24px;
    }
  }
  .flex-coin {
    display: flex;
  }
  .menu-width {
    width: 80px;
    line-height: 1px;
  }
  .flex-full {
    flex: 1;
  }
  .bottom-tit {
    margin-top: 10px;
  }
  .td-padding {
    padding-left: 15px;
    padding-right: 15px;
  }
  .remark-box {
    position: relative;
    padding-left: 45px;
    .remark-title {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .upload-demo {
    width: 300px;
  }
  .el-table--border,
  .el-table--group {
    border: 1px solid $border-color;
  }

  .el-table--border th {
    border-right: 1px solid $border-color;
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid $border-color;
  }
  .el-table--border::after,
  .el-table--group::after {
    width: 0;
  }
  .el-table::before {
    height: 0;
  }
  .border-right {
    border-right: 1px solid $border-color !important;
  }
  .border-bottom {
    border-bottom: 1px solid $border-color;
  }
  .child-td {
    height: 41px;
    line-height: 41px;
    text-align: center;
  }
}
</style>

