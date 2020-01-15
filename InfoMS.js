require('seneca')()
  .use('InfoPlugin')
  .listen({ port: 9001, host: 'localhost', pin:'role:info' })