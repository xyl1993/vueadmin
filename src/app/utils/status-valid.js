import {timeoutText} from '../global/base.config';
export const statusValid = (that,code) =>{
    if(code === -403){
        that.$message({
          message: timeoutText,
          type: 'warning',
          duration:2000,
          onClose:()=>{
             that.$router.replace({ path: '/login' });
          }
        });
        return false
    }
    if(code === -404){
        that.$message({
            message: '服务器出错',
            type: 'error'
        });
        return false
    }
    return true
}