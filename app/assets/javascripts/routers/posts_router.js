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
        $("#container").html(indexView.$el);
      }
    })
  },

  postShow: function(id) {
    var post = JournalApp.Collections.posts.getOrFetch(id);
    var showView = new JournalApp.Views.PostShow({
      model: post
    });
    showView.render();
    $("#container").html(showView.$el)
  }
});