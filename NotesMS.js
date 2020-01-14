require('seneca')()
  .use('NotesPlugin')
  .listen({
    type: 'tcp',
    pin: 'role:notes'
  });