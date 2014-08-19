JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function() {
    this.listenTo(
      JournalApp.Collections.posts,
      "add change:title remove reset",
      this.render
    );
  },

  events: {
    "click .post-delete": "deletePost"
  },

  deletePost: function(event) {
    var id = $(event.target).attr("data-id")
    var post = JournalApp.Collections.posts.get(id)

    post.destroy();
  },

  render: function () {
    this.$el.html(this.template({
      posts: JournalApp.Collections.posts.models
    }));
  }
});
