JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow",
    "posts/:id/edit": "postUpdate"
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
  },

  postUpdate: function(id) {
    var post = JournalApp.Collections.posts.getOrFetch(id);
    var updateView = new JournalApp.Views.PostForm({
      model: post
    })

    updateView.render();
    $("#container").html(updateView.$el)
  }
});