window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.Collections.posts.fetch({
      success: function () {
        var indexView = new JournalApp.Views.PostsIndex();
        indexView.render();
        $("#sidebar").html(indexView.$el);

        new JournalApp.Routers.Posts();
        Backbone.history.start();
      }
    })
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
