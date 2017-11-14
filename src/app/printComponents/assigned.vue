<!-- 交办单打印模板 -->
<template>
  <div style="padding:20px;font-size:17px;height:500px;border:1px solid #000;" id="div_print">
       <div style="text-align: center;
            margin-bottom: 20px;
            font-size:24px;
            letter-spacing: 4px;">纪检监察机关问题线索交办单</div>
        <div style="text-align: center;
            margin-bottom: 10px;
            ">线索编号:</div>
        <div style="text-align: center;
            margin-bottom: 30px;
            ">交办流水号:</div>
        <div>
			<label style="width:150px;border-bottom:1px solid #000;float:left;height:20px;"></label>
			<label style="float:left;">:</label>
        </div>
        <div style="margin-bottom:60px;clear:both;    text-indent: 26px;
    padding-top: 10px;">
            现将[线索来源]移送的有关案件线索交给你们，请认真组织核查，请在<label style="border-bottom:1px solid #000;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月
            </label>之前完成结果核查并及时上报。
        </div>
        <div>
            -------------------------  回执  -----------------------------
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