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
    <HelloWordld msg="子组件" @addToCount="methodFromParent" @add-name="addNames"></HelloWordld>
    <div>{{sonName}}</div>
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
      <el-button @click="editInfo">修改个人资料</el-button>
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
import HelloWordld from '@/components/HelloWorld.vue'
import { UserInfoData } from '@/interface'
import user from '@/store/module/user'
import { login, loginOut } from '@/api/login'
import { userStatusEnum, getPrivilegeRoles, EditPersonalInfo } from '@/api/user'
@Component({
  components: {
    HelloWordld
  }
})
export default class Home extends Vue {
  // @Getter 拿取vuex中的state  @Action 获取vuex中的action
  @Getter('UserInfo') public user!: string
  @Getter('token') public token!: string
  @Action('loginInfoChange') public loginInfoChange: any
  // data
  count: number = 0
  sonName: string = ''
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
  async getUserStatus() {
    const data = await userStatusEnum()
    const prrvilegeRolesdata = await getPrivilegeRoles()
    console.log(data, prrvilegeRolesdata)
  }
  async editInfo() {
    const params = {
      id: 54,
      email: '18902022322@163.com',
      username: 'powerTest',
      mobile: '18902022322',
      realName: '权限测试'
    }
    let data = await EditPersonalInfo(params)
    if (data.msg) {
      this.$message.success(data.msg)
    }
  }

  imgClick(val: number) {
    console.log(val)
  }

  methodFromParent(val: number) {
    console.log(`父组件= ${val}`)
  }

  addNames(val: string) {
    console.log('fu=' + val)
    this.sonName = val
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
