JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],

  initialize: function () {
  },

  render: function () {
    this.$el.html(this.template({ post: this.model }))
  }
})