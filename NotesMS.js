require('seneca')()
  .use('NotesPlugin')
  .listen({ port: 9000, host: 'localhost', pin:'role:notes' 
  })