JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function() {
    this.listenTo(
      JournalApp.Collections.posts,
      "add change remove reset",
      this.render
    );
  },

  events: {
    "click .post-delete": "deletePost"
  },

  deletePost: function(event) {
    var id = $(event.target).attr("data-id")
    var post = JournalApp.Collections.posts.getOrFetch(id)

    post.destroy();
  },

  render: function () {
    this.$el.html(this.template({
      posts: JournalApp.Collections.posts.models
    }));
  }
});
