<template>
  <div class="login">
    <h1>This is an login page</h1>
    <div>
      <button @click="doLogin">登录</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { login, loginOut } from '@/api/login'
import { Getter, Action } from 'vuex-class'
@Component({
  components: {}
})
export default class LoginPage extends Vue {
  @Action('loginInfoChange') public loginInfoChange: any
  doLogin() {
    const formData = {
      account: 'ybl_admin',
      password: 'Pass513',
      verificationCode: '2323',
      endSn: new Date().getTime()
    }
    login(formData)
      .then(res => {
        window.sessionStorage.token = res.data.token
        this.loginInfoChange(res.data)
        this.$router.replace({ name: 'HomePage' })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>