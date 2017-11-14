<!-- 线索登记打印模板 -->
<template>
    <div style="width:100%;font-size:17px;" id="div_print">
        <div>
            <div style="text-align: center;
            margin-bottom: 20px;
            font-size:24px;
            letter-spacing: 4px;">反映问题线索登记表</div>
        </div>
        <div class="title" style="margin-bottom:10px;">
            <div style="font-weight: bold;display: inline-block;">线索提供部门:</div>
            <div type="text" style="display: inline-block;
            border: none;min-width:196px;
            padding-top:2px;
            border-bottom: 1px solid;">{{formData.dept}}</div>
        </div>
        <table cellspacing="0" style="width:100%;border:1px solid #000;" cellpadding="0" border="0" class="el-table__body">
            <tbody>
                <tr>
                    <td class="lab" style="width: 120px;
                        text-align: center;
                        font-weight: bold;
                        border-bottom: 1px solid #000;
                        border-right: 1px solid #000;
                        padding: 12px;
                        vertical-align: middle;
                        ">线索来源</td>
                    <td style="
                        text-align: left;
                        border-bottom: 1px solid #000;
                        padding: 12px 0;
                        padding-left:15px;
                        vertical-align: middle;
                        ">
                        {{formData.source}}
                    </td>
                </tr>
                <tr>
                    <td class="lab" style="width: 120px;
                        text-align: center;
                        font-weight: bold;
                        border-bottom: 1px solid #000;
                        border-right: 1px solid #000;
                        padding: 12px 0;
                        vertical-align: middle;
                        ">被反映人基本情况</td>
                    <td style="
                        font-weight: bold;
                        border-bottom: 1px solid #000;
                        ">
                        <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
                            <tr>
                                <td style="width: 64px;
                                    text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">
                                    姓名
                                </td>
                                <td style="text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">{{formData.name}}</td>
                                <td style="width: 64px;
                                    text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">
                                    性别
                                </td>
                                <td style="text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">{{formData.sex}}</td>
                                <td colspan="2" style="width: 64px;
                                    text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">
                                    年龄
                                </td>
                                <td style="text-align: center;
                                    border-bottom: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                   ">{{formData.age}}</td>
                            </tr>
                            <tr>
                                <td style="width: 64px;
                                    text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">
                                    单位
                                </td>
                                <td colspan="2" style="text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">{{formData.company}}</td>
                                <td style="width: 64px;
                                    text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                   ">
                                    职务
                                </td>
                                <td style="text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    width:100px;
                                    vertical-align: middle;
                                    ">{{formData.duty}}</td>
                                <td style="width: 64px;
                                    text-align: center;
                                    border-bottom: 1px solid #000;
                                    border-right: 1px solid #000;
                                    padding: 12px 0;
                                    vertical-align: middle;
                                    ">
                                    级别
                                </td>
                                <td style="text-align: center;
                                    border-bottom: 1px solid #000;
                                    padding: 12px 0;
                                    width:100px;
                                    vertical-align: middle;
                                    ">{{formData.level}}</td>
                            </tr>
                            <tr>
                                <td colspan="7" style="
                                    height:45px;
                                   ">
                                    <div style="width:100%;display:flex;">
                                        <div style="float:left;width:95px;height:45px;line-height:45px;text-align:center;border-right: 1px solid #000;">
                                            政治面貌
                                        </div>
                                        <div style="flex:1;text-align:center;height:45px;line-height:45px;border-right: 1px solid #000;">
                                            {{formData.politicalStatus}}
                                        </div>
                                        <div style="float:left;width:95px;height:45px;line-height:45px;text-align:center;border-right: 1px solid #000;">
                                            入党时间
                                        </div>
                                        <div style="flex:1;text-align:center;height:45px;line-height:45px;">
                                            {{formData.joinTimeStr}}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="width: 120px;
                        text-align: center;
                        font-weight: bold;
                        border-bottom: 1px solid #000;
                        border-right: 1px solid #000;
                        min-height:150px;
                        padding: 12px 0;
                        vertical-align: middle;
                        " class="lab">反映的主要问题</td>
                    <td style="
                        border-bottom: 1px solid #000;
                        padding: 12px 0;
                        ">
                        <div style="padding-left:15px;min-height:150px;">{{formData.question}}</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 120px;
                        text-align: center;
                        font-weight: bold;
                        border-bottom: 1px solid #000;
                        border-right: 1px solid #000;
                        min-height:150px;
                        padding: 12px 0;
                        vertical-align: middle;
                        " class="lab">问题性质</td>
                    <td style="
                        border-bottom: 1px solid #000;
                        padding: 12px 0;
                        ">
                        <div style="padding-left:15px;min-height:18px;">{{formData.nature}}</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 120px;
                        text-align: center;
                        font-weight: bold;
                        border-bottom: 1px solid #000;
                        border-right: 1px solid #000;
                        min-height:150px;
                        padding: 12px 0;
                        vertical-align: middle;
                        " class="lab">线索部门提供意见</td>
                    <td style="
                        border-bottom: 1px solid #000;
                        padding: 12px 0;
                        ">
                        <div style="padding-left:15px;min-height:150px;">{{formData.opinion}}</div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="flex-main" style=" position: relative;
            padding-left: 38px;min-height:30px;padding-top:6px;">
                            <div class="remaid" style="position: absolute;
                top: 5px;
                left: 12px;font-weight: bold">
                                    附:
                            </div>
                            <div>
                                {{formData.remark}}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="display:flex;width:100%;margin-top:15px;">
            <div style="width:73px;font-weight: bold;">
                送件人:
            </div>
            <div style="width:90px;">{{formData.sender}}</div>
            <div style="width:73px;font-weight: bold;">
                收件人:
            </div>
            <div style="width:90px;">{{formData.receiver}}</div>
            <div style="width:87px;font-weight: bold;">
                收件日期:
            </div>
            <div style="flex:1;">{{formData.receiveTimeStr}}</div>
        </div>
        <div style="margin-top:5px;margin-bottom:5px;">
            <div style="display: inline-block;font-weight: bold;">案件线索登记号:</div>
            <div style="display: inline-block;
            border: none;
            min-width:196px;
            border-bottom: 1px solid;">{{formData.clueCode}}</div>
        </div>
        <div class="remark-box" style="position: relative;
            padding-left: 45px;">
            <div class="remark-title" style="position: absolute;
                top: 0;
                left: 0;">备注：</div>
            <div>1、线索来源请按:上级交办、信访举报、巡察中发现、公检法等机关移送、监督检查工作中发现、审计中发现、纪律审查中发现、其他问题线索填写。</div>
            <div>2、问题性质一栏按照新《条例》中的“六大纪律违纪行为”写明“违反**纪律行为”，如是其他情形请写明“其他违纪行为”。</div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
            formData:{}
        }
   }
}
</script>