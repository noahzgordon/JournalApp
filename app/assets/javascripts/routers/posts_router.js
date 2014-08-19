JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postCreate",
    "posts/:id": "postShow",
    "posts/:id/edit": "postUpdate"
  },

  postsIndex: function () {
    JournalApp.Collections.posts.fetch({
      success: function () {
        var indexView = new JournalApp.Views.PostsIndex();
        indexView.render();
        $("#sidebar").html(indexView.$el);
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
    });

    updateView.render();
    $("#container").html(updateView.$el)
  },

  postCreate: function() {
    var post = new JournalApp.Models.Post()
    var createView = new JournalApp.Views.PostForm({
      model: post,
      collection: JournalApp.Collections.posts
    });

    createView.render();
    $("#container").html(createView.$el);
  }
});