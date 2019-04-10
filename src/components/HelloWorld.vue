<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="addCount" style="margin-bottom:50px;">子组件触发事件 更新值 父组件count值</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  count: number = 0
  name: string = ''
  @Prop() private msg!: string
  /**
   * @Emit() 向父组件传递
   * @param string 字符串对应的回调函数 返回一个值（需要向上传递的值）若不传 对应函数名的 '-' 拼接
   * 回调函数必须放在@Emit()后
   */
  @Emit()
  addName(name: string) {
    this.name = name
  }
  @Emit('addToCount')
  addToCount(n: number) {
    this.count = n
  }
  addCount() {
    this.count++
    this.addToCount(this.count)
  }
  mounted() {
    this.addName('子组件的名字 - 光明')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
