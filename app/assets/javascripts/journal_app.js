window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.Collections.posts.fetch({
      success: function() {
        var indexView = new JournalApp.Views.PostsIndex();
        indexView.render()
        $('body').append(indexView.$el)
      }
    });
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
