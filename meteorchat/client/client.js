Template.messages.messages = function() {
  return Messages.find({}, {sort: {time:-1}})
}

Template.input.events = {
  'keydown input#message': function(event) {
    if (event.which == 13) {
      var name = 'unknown'
      var message = document.getElementById('message').value

      if (message != '') {
        Messages.insert({
          name: name,
          message: message,
          time: Date.now()
        })
      }

      message = ''
      document.getElementById('message').value = ''
    }
  }
}