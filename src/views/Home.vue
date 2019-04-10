<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link>
    </div>
    <div style="margin-bottom:20px;">
      <el-button>element</el-button>
    </div>
    <el-select v-model="data.value" placeholder="请选择">
      <el-option
        v-for="item in data.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <div>{{user.username + count || 0}}</div>
    <div>
      <!-- <button @click="doLogin">登录</button> -->
    </div>
    <div>
      <button @click="doLoginOut">退出</button>
    </div>
    <div>
      <button @click="getUserStatus">获取用户状态数据</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { UserInfoData } from '@/interface'
import user from '@/store/module/user'
import { login, loginOut } from '@/api/login'
import { userStatusEnum } from '@/api/user'
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
    pageName: 'login',
    value: '',
    options: [
      {
        value: '选项1',
        label: '黄金糕'
      },
      {
        value: '选项2',
        label: '双皮奶'
      },
      {
        value: '选项3',
        label: '蚵仔煎'
      },
      {
        value: '选项4',
        label: '龙须面'
      },
      {
        value: '选项5',
        label: '北京烤鸭'
      }
    ]
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
    // console.log(this.user, this.token)
    // console.log('loginInfo=', this.loginInfo)
  }

  // 初始化函数
  init() {
    //
  }
  doLogin() {
    this.count++
    const formData = {
      account: 'ybl_admin',
      password: 'pass513',
      verificationCode: '2323',
      endSn: new Date().getTime()
    }
    login(formData)
      .then(res => {
        window.sessionStorage.token = res.data.token
        this.loginInfoChange(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  doLoginOut() {
    loginOut()
      .then(res => {
        this.$router.push({ name: 'LoginPage' })
        window.sessionStorage.clear()
      })
      .catch(err => {
        console.log(err)
      })
  }
  getUserStatus() {
    userStatusEnum()
      .then((res: any) => {
        console.log(res)
      })
      .catch((err: any) => {
        console.log(err)
      })
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
#nav {
  a {
    color: rgb(23, 139, 255);
    text-decoration: underline;
  }
}
</style>
