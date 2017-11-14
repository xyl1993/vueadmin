<template>
	<div id="app">
		<transition name="fade" mode="out-in">
            <router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	},
	mounted() {
		if(!sessionStorage.getItem("access-token")){
			this.$router.push({ path: '/login' });
		}
	}
}

</script>

<style lang="scss">
*{
	margin: 0px;
	padding: 0px;
}
body {
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}
input,button,select,textarea,a{outline:none;}
textarea{
    border: none;
    resize: none;
}
.toolbar {
    background: #f2f2f2;
    padding: 10px;
    margin: 18px 0;
}
.hidden{
	display: none;
}
.right{
	float: right;
}
#app {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
.el-table{
	margin-top: 30px;
	margin-bottom: 15px;
}
.el-pagination{
	text-align: right;
}
.el-submenu [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.el-menu-item [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}

</style>