# cnpm install 初始化
# npm start 启动项目
# 访问地址 http://localhost:3000/
# 打包时将global>api.config.js中的base_api_host改为‘../’,
# npm run build 打包(dist为打包目录),将dist复制到tomcat中
# utils>api中为ajax请求通用配置
# 修改webpack.dev.config中的devProxyPath（本机ip,调用本地接口）与 buildProxyPath（调用外网接口）注意看devServer配置（省得麻烦写了两个变量）
------
# 界面尚未完善，结构初步成型