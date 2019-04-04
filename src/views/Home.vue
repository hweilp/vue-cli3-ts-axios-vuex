<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="imgClick(2)">
    <button @click="doLogin">登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { UserInfoData } from '@/types/user.interface'
import user from '@/store/module/user'
interface LoginData {
  pageName: string
}
@Component({
  components: {}
})
export default class Home extends Vue {
  @Getter('UserName') public user!: string
  // data
  data: LoginData = {
    pageName: 'login'
  }
  // 计算属性
  get loginInfo(): any {
    return this.$store.getters.UserInfo
  }

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    console.log(this.user)
    console.log('loginInfo=', this.loginInfo)
  }

  // 初始化函数
  init() {
    //
  }
  doLogin() {
    const data = {
      account: 'ybl_admin',
      password: 'pass513',
      verificationCode: '2323',
      endSn: new Date().getTime()
    }
    this.$store.dispatch('loginInfoChange', data)
    console.log('loginInfo=', this.loginInfo)
    const baseUrl = process.env.VUE_APP_BASEURL
  }
  imgClick(val: number) {
    console.log(val)
  }
}
</script>
<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
