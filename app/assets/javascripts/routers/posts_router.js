JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow"
  },

  postsIndex: function () {
    JournalApp.Collections.posts.fetch({
      success: function () {
        var indexView = new JournalApp.Views.PostsIndex();
        indexView.render();
        $("body").append(indexView.$el);
      }
    })
  }
});