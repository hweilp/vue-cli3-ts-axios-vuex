<template>
  <div class="loginPage">
    <div class="login-header">
      <img src="@/assets/logo.png" alt>
    </div>
    <div class="login-main">
      <el-form :model="loginForm">
        <div class="login-title">雅布力后台管理</div>
        <el-form-item>
          <el-col :span="3">
            <!-- <svg-icon icon-class="people"></svg-icon> -->
          </el-col>
          <el-col :span="21" class="border-bt">
            <el-input placeholder="请输入用账号" v-model="loginForm.account" name="required"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="3">
            <!-- <svg-icon icon-class="password"></svg-icon> -->
          </el-col>
          <el-col :span="21" class="border-bt">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="loginForm.password"
              name="required"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="8">
            <el-col :span="12" @keyup.enter.native="login" class="verification">
              <el-input placeholder="请输入验证码" name="required" v-model="loginForm.verificationCode"></el-input>
            </el-col>
            <el-col :span="12" class="imgContainer">
              <img @click="changeUrl" class="verificationcodes" :src="verificationcodeUrl" alt>
            </el-col>
          </el-row>
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </div>
    <div class="login-footer">
      <div class="line"></div>
      <div class="text">版权归雅布力母婴用品有限公司所有</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import user from '@/store/module/user'
import { login } from '@/api/login'
@Component({
  components: {}
})
export default class Login extends Vue {
  loginForm = {
    account: '',
    password: '',
    verificationCode: ''
  }
  verificationcodeUrl: string = ''
  time: any = ''
  BASE_URL: string = process.env.VUE_APP_BASEURL
  login() {
    let formData: any = { ...this.loginForm }
    let isPass = true
    let noPassName = ''
    for (let key in formData) {
      if (!formData[key] && formData[key] !== 0 && formData[key] !== '0') {
        isPass = false
        switch (key) {
          case 'account':
            noPassName = '账号'
            break
          case 'password':
            noPassName = '用户密码'
            break
          case 'verificationCode':
            noPassName = '验证码'
            break
        }
        break
      }
    }

    if (!isPass) {
      this.$message.error('请输入' + noPassName + ' !')
      return
    }
    formData.endSn = this.time
    login(formData).then((data: any) => {
      const Data = data.data
      window.sessionStorage.userName = Data.username
      window.sessionStorage.userId = Data.userId
      window.sessionStorage.token = Data.token
      this.$router.push('/')
    })
  }
  changeUrl() {
    this.time = new Date().getTime()
    this.verificationcodeUrl = `${
      this.BASE_URL
    }/v1/servantmng/security/verificationcodes?endSn=
      ${this.time}`
  }
  mounted() {
    this.changeUrl()
  }
}
</script>

<style lang="less" scoped>
@import '../styles/login.less';
</style>
