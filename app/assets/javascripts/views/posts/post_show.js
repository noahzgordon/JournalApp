JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],

  initialize: function (id) {
    this.post = JournalApp.Collections.posts.getOrFetch(id);
  },

  render: function () {
    this.$el.html({ post: this.post })
  }
})