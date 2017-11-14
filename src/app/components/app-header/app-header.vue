<template>
	<el-col :span="24" class="header">
		<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
			{{collapsed?'':sysName}}
		</el-col>
		<el-col :span="10">
			<div class="tools" @click.prevent="collapse">
				<i class="fa fa-align-justify"></i>
			</div>
		</el-col>
		<el-col :span="4" class="userinfo">
			<el-dropdown trigger="click">
				<span class="el-dropdown-link userinfo-inner"><img src="../../../assets/images/user.png" /> {{sysUserName}}</span>
				<el-dropdown-menu slot="dropdown">
					<!-- <el-dropdown-item>我的消息</el-dropdown-item>
					<el-dropdown-item divided>设置</el-dropdown-item> -->
					<el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-col>
</template>
<script>
    export default {
		name : 'AppHeader',
		computed: {
			collapsed () {
				return this.$store.state.collapsed
			}
		},
        data() {
			return {
				sysName:'ELEMENT',
				sysUserName: '',
				sysUserAvatar: ''
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					sessionStorage.removeItem('access-token');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			//折叠导航栏
			collapse:function(){
				this.$store.commit('changeCollapsed');
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				// this.sysUserAvatar = user.avatar || '';
			}

		}
    }
</script>
<style scoped lang="scss">
   @import './app-header.scss';
</style>