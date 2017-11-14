<template>
  <div>
    <div class="toolbar el-col el-col-24">
      <el-form :inline="true"  class="demo-form-inline">
        <el-form-item>
          <el-input v-model="keyword" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="search">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="add">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
        :data="dataTable"
        v-loading="listLoading"
        style="width: 100%">
        <el-table-column
        type="index"
        style="width:35px"
        :index="indexMethod">
        </el-table-column>
        <el-table-column
        prop="dept"
        label="提供部门"
        >
        </el-table-column>
        <el-table-column
        prop="source"
        label="线索来源"
        >
        </el-table-column>
        <el-table-column
        prop="nature"
        label="问题性质"
        >
        </el-table-column>
        <el-table-column
        prop="sender"
        width="90"
        label="送件人">
        </el-table-column>
        <el-table-column
        prop="receiver"
        width="90"
        label="收件人">
        </el-table-column>
        <el-table-column
        prop="receiveTimeStr"
        width="180"
        label="收件日期">
        </el-table-column>
        <el-table-column
        prop="clueCode"
        label="线索登记号">
        </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="success"
              @click="handlePrint(scope.$index, scope.row)">打印</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :total="total"
        layout="total, prev, pager, next"
    >
    </el-pagination>
    <clue-print-template class="hidden" ref="print-template"></clue-print-template>
  </div>
</template>
<script>
  import {listAll,deleteRecord} from './clue-service';
  import {statusValid} from '../../utils/status-valid';
  import {pageSize} from '../../global/base.config';
  require('../../jsplug/jquery.jqprint');
  const $ = require("jQuery");
  import cluePrintTemplate from '../../printComponents/cluePrintTemplate'; 
  const findlist = (_this)=>{
    let params = `?keyword=${_this.keyword}&currentPage=${_this.currentPage}`;
    listAll(params).then(res => {
      _this.listLoading = false;
      let { data,totalItems,code } = res;
      //请求校验
      if(statusValid(_this,code)){
        _this.dataTable=data;
        _this.total = totalItems;
      }
    });
  }

  export default {
    data() {
      return {
        listLoading:true,
        pageSize:pageSize,
        keyword:'',
        currentPage:1,
        dataTable: []
      }
    },
    components: {
      'clue-print-template': cluePrintTemplate,
    },
    mounted() {
        findlist(this);
    },
    methods: {
      indexMethod(index) {
        return index+1;
      },
      search(){
        findlist(this);
      },
      add(){
        this.$router.push({ path: '/registration' });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        findlist(this);
      },
      handleEdit(index, row) {
        this.$router.push({ path: '/registration',query: {id: `${row.id}`} });
      },
      handleDelete(index, row) {
        var _this = this;
				this.$confirm('确认删除吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					let params = `?id=${row.id}`;
          deleteRecord(params).then(res=>{
            let { data,code } = res;
            if(statusValid(_this,code)){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              findlist(this);
            }
          })
				}).catch(() => {
        
        });
      },
      handlePrint(index,row){
        this.dataTable[index].printLoading = true;
        this.$refs['print-template'].formData = row;
        setTimeout(function() {
          $("#div_print").jqprint();
        }, 500);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .el-form-item{
    margin-bottom: 0;
  }
</style>
