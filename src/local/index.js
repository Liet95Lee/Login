import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: (field, length) => field + '长度要求大于' + length,
      length: (field, length) => field + '长度要求为' + length
    },
    attributes: {
      email: '邮件',
      password: '密码',
      name: '账号',
      code: '验证码'
    }
  }
}

Validator.localize(dictionary)
