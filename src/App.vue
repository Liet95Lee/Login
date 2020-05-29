<template>
  <div id="app">
    <div class="layui-container">
    <form class="layui-form layui-form-pane" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <validation-provider rules="required|email" name="用户名" v-slot="{errors}">
        <div class="layui-input-inline">
          <input type="text" name="name" v-model.trim="name" placeholder="请输入标题" autocomplete="off"
            class="layui-input">
        </div>
        <div class="error layui-form-mid">{{errors[0]}}</div>
        </validation-provider>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <validation-provider rules="required|min:6" name="密码" v-slot="{errors}">
        <div class="layui-input-inline">
          <input type="password" name="password" v-model="password" placeholder="请输入标题" autocomplete="off"
            class="layui-input">
        </div>
        <div class="error layui-form-mid">{{errors[0]}}</div>
        </validation-provider>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <validation-provider rules="required|length:4" name="验证码" v-slot="{errors}">
        <div class="layui-input-inline">
          <input type="text" name="code" v-model="code" placeholder="请输入标题" autocomplete="off"
            class="layui-input">
        </div>
        <div class="error layui-form-mid">{{errors[0]}}</div>
        </validation-provider>
        <div class="layui-form-mid svg" @click="getCaptcha()" v-html="svg"></div>
      </div>
      <button type="button" class="layui-btn" @click="checkForm()">点击登陆</button>
<a href="http://www.layui.com" class="imooc-link">忘记密码</a>
    </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  })
}

export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMsg: []
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      // console.log(res)
      })
    },
    checkForm () {
      this.errorMsg = []
      // regEx email
      if (!this.name) {
        this.errorMsg.push('登陆名为空!')
      }
      if (!this.password) {
        this.errorMsg.push('密码不得为空!')
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: #f2f2f2;
}
.layui-container {
  background-color: #ffffff;
}
input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover{
    color: #009688;
  }
}
.svg {
  position: relative;
  top: -15px;
}
.error {
  color: red;
}
</style>
