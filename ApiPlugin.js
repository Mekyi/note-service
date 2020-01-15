module.exports = function ApiPlugin(options) {
  this.add('role:api,path:categories', function(msg, respond) {
    this.act('role:notes', {
      cmd: 'categories'
    }, respond)
  })

  this.add('role:api,path:notes', function(msg, respond) {
    var id = msg.args.params.id
    this.act('role:notes', {
      cmd: 'notes',
      id: id,
    }, respond)
  })

  this.add('role:api,path:note', function(msg, respond) {
    var id = msg.args.params.id
    this.act('role:notes', {
      cmd: 'note',
      id: id,
    }, respond)
  })

  this.add('role:api,path:info', function(msg, respond) {
    this.act('role:info', {
      cmd: 'info'
    }, respond)
  })

  this.add('init:ApiPlugin', function(msg, respond) {
    this.act('role:web', {
      routes: {
        prefix: '/api',
        pin: 'role:api,path:*',
        map: { 
          categories: { GET: true },
          notes: { GET: true, suffix: '/:id' },
          note: { GET: true, suffix: '/:id' },
          info: { GET: true }
        }
      }
    }, respond)
  })
}