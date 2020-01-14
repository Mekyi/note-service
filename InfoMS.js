require('seneca')()
  .use('InfoPlugin')
  .listen({
    type: 'tcp',
    pin: 'role:info'
  });