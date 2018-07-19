<template>
    <!-- 登录页面 -->
    <div class="login">
        <Head :title="title" :show="true" />
        <div class="formShadow">
            <div class="loginForm">
                <div class="row">
                    <div class="rowLeft">
                        <span>+</span>
                        <select>
                            <option value="86">86</option>
                            <option value="86">62</option>
                            <option value="86">60</option>
                        </select>
                    </div>
                    <input type="text" :placeholder="placeholder" />
                </div>
                <div class="row">
                    <div class="rowLeft">
                        <p>{{code}}</p>
                    </div>
                    <input type="text" :placeholder="codeHolder" />
                </div>
                <div class="row">
                    <p class="tips">{{massage}}</p>
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" @click="submitForm()">{{button}}</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "大学生",
                button: "开始",
                code: "验证码",
                placeholder: "请输入手机号",
                massage: "请输入您的手机号码，登录或注册您的XX账号.",
                codeHolder: "请输入验证码"
            }
        },
        methods: {
            submitForm() {
                window.location.href = "/#/signUp"
            }
        }
    }
</script>