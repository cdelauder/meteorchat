Template.links.events = {
  'click links#chat': function(event) {
    event.preventDefault()
    Messages.remove('messages')
  }
}

Template.messages.messages = function() {
  return Messages.find({}, {sort: {time:-1}})
}

Template.posts.posts = function() {
  return Posts.find({}, {sort: {time:-1}})
}

Template.input.events = {
  'keydown input#message': function(event) {
    if (event.which == 13) {
      if (Meteor.user())
        var name = Meteor.user().profile.name
      else
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

Template.newPost.events = {
  'keydown input#body': function(event) {
    if (event.which == 13) {
        var title = document.getElementById('title').value
        var body = document.getElementById('body').value

      if (Meteor.user()) {
        Session.set('error', '')
        if (title != '' && body != '') {
          Posts.insert({
            name: 'unknown',
            title: title,
            body: body,
            time: Date.now()
          })
        } else {
          Session.set('error', 'posts must have a title and body')
        }
      } else {
        Session.set('error', 'must be logged in to post')
      }

      var title = ''
      var body = ''
      document.getElementById('title').value = ''
      document.getElementById('body').value = ''
    }
  }
}

Template.errors.helpers({
  errors: function() {
    return Session.get('error')
  }
});

