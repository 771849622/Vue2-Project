<template>
    <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
        <h3 class="login_title">系统登陆</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="submit" style="margin-left: 105px; margin-top: 10px;" type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import Mock from 'mockjs';
import Cookie from 'js-cookie';
import { getMenu } from '@/api';
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, trigger: 'blur', message: '请输入用户名' }
                ],
                password: [
                    { required: true, trigger: 'blur', message: '请输入密码' }
                ]
            }
        }
    },
    methods: {
        // 登录
        submit() {
            // // token信息
            // const token = Mock.Random.guid();

            // 校验form表单
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({data}) => {
                        if (data.code == 20000) {
                            // 将token存入Cookie用于不同页面的通信
                            Cookie.set('token', data.data.token);
                            // 提示登陆成功
                            this.$message({
                                message: '登陆成功',
                                type: 'success'
                            })
                            // 跳转至首页
                            this.$router.push('/home');
                        }else {
                            this.$message.error(data.data.message);
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;

    .login_title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }

    .el-input {
        width: 198px;
    }
}
</style>