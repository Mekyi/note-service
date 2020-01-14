const SenecaWeb = require('seneca-web')
const Express = require('express')
const Router = Express.Router
const context = new Router()

const senecaWebConfig = {
  context: context,
  adapter: require('seneca-web-adapter-express'),
  options: {
    parseBody: false
  }
}

const app = Express()
  .use(require('body-parser').json())
  .use(context)
  .listen(3000)

const seneca = require('seneca')()
  .use(SenecaWeb, senecaWebConfig)
  .use('ApiPlugin')
  .client({type: 'tcp', pin: 'role:notes'})
  .client({type: 'tcp', pin: 'role:info'})