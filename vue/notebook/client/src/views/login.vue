<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="data:image/jpeg;base64,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"
                    alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>

        </div>
        <div class="register" @click="register">新用户？点击这里注册</div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from '../api'

const router = useRouter()
const state = reactive({    // 将对象变成响应式
    username: '',
    password: '',
})

const onSubmit = async() => {
    // 发请求， 
    console.log(state.username, state.password);
    const res = await axios.post('/login', {
        username: state.username,
        password: state.password
    })
    console.log(res);
    // 保存用户信息
    sessionStorage.setItem('userInfo', JSON.stringify(res.data))
    router.push('/noteClass')
}

const register = () => {
    router.push('/register')
}

</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    h1 {
        height: 0.6933rem;
        text-align: center;
        margin-top: 1.12rem;
        font-size: 0.48rem;
    }

    .login-wrapper {
        width: 7.44rem;
        height: 10.77rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);

        .avatar {
            width: 2.4rem;
            height: 2.4rem;
            overflow: hidden;
            border-radius: 50%;
            margin: 1rem auto 0.77rem;

            img {
                width: 100%;
            }
        }
    }

    .register {
        position: absolute;
        bottom: 30px;
        width: 80%;
        left: 50%;
        text-align: center;
        font-size: 0.374rem;
        transform: translateX(-50%);
        height: 0.6rem;
        line-height: 0.6rem;
        color: rgba(16, 16, 16, 1);
    }
}
</style>
<style>
.van-cell__title.van-field__label{
    width: 45px;
}
</style>