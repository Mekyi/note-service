module.exports = function NotesPlugin(options) {
  const noteData = require('./data/mockdata.json');

  this.add('role:notes,cmd:categories', function categories(msg, respond) {
    const categories = noteData.categories
      .map(obj => ({ 
        categoryId: obj.categoryId,
        name: obj.name 
      }))
    respond(null, { categories });
  })

  this.add('role:notes,cmd:notes', function notes(msg, respond) {
    const categoryNotes = noteData.categories
      .filter(obj => obj.categoryId == msg.id)
      .map(obj => obj.notes)
    respond(null, { notes: categoryNotes[0] });
  })

  this.add('role:notes,cmd:note', function note(msg, respond) {
    let notes = [] 
    noteData.categories.forEach(element => {
      notes.push(element.notes);
    });
    notes = [].concat.apply([], notes);
    respond(null, notes.filter(obj => obj.id == msg.id)[0]);
  })
}