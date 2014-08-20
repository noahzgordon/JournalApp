JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function() {
    this.listenTo(
      JournalApp.Collections.posts,
      "add change remove reset",
      this.render
    );
  },

  render: function () {
    this.$el.html(this.template({
      posts: JournalApp.Collections.posts.models
    }));
  }
});
