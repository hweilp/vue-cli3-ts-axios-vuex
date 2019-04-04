<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="imgClick(2)">
    <div>{{user.account + user.count || 0}}</div>
    <button @click="doLogin">登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { UserInfoData } from '@/interface'
import user from '@/store/module/user'
@Component({
  components: {}
})
export default class Home extends Vue {
  // @Getter 拿取vuex中的state  @Action 获取vuex中的action
  @Getter('UserInfo') public user!: string
  @Getter('token') public token!: string
  @Action('loginInfoChange') public loginInfoChange: any
  // data
  count: number = 0
  data = {
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
    console.log(this.user, this.token)
    console.log('loginInfo=', this.loginInfo)
  }

  // 初始化函数
  init() {
    //
  }
  doLogin() {
    this.count++
    const data = {
      count: this.count,
      account: 'ybl_admin',
      password: 'pass513',
      verificationCode: '2323',
      endSn: new Date().getTime()
    }
    this.loginInfoChange(data)
    // this.$store.dispatch('loginInfoChange', data)
    console.log('loginInfo=', this.loginInfo)
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
