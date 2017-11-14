<template>
    <!-- <strong class="title">{{$route.name}}</strong> -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
            {{ item.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .breadcrumb-container {
        .title {
            width: 200px;
            float: left;
            color: #475669;
        }
        .breadcrumb-inner {
            float: right;
        }
    }
</style>

