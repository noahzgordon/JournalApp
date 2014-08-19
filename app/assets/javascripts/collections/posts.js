JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "posts",

  model: JournalApp.Models.Post,
  getOrFetch: function (id) {
    var that = this;
    if (!this.get(id)) {
      var post = new JournalApp.Models.Post({ id: id });
      post.fetch({
        success: function () {
          that.add(post);
        }
      });
    }

    return this.get(id);
  }
});

JournalApp.Collections.posts = new JournalApp.Collections.Posts();