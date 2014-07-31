Template.messages.messages = function() {
  return Messages.find({}, {sort: {time:-1}})
}

Template.input.events = {
  
}