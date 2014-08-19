JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "posts",
  model: JournalApp.Models.Post
});

JournalApp.Collections.posts = new JournalApp.Collections.Posts();