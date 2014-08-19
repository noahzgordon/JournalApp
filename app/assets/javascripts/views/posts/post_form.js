JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],

  initialize: function () {
  },

  events: {
    "submit #update-form": "updatePost"
  },

  updatePost: function (event) {
    event.preventDefault();
    var data = $(event.currentTarget).serializeJSON();
    _.extend(this.model.attributes, data)

    this.model.save();
    Backbone.history.navigate("/", { trigger: true });
  },

  render: function () {
    this.$el.html(this.template({ post: this.model }))
  }
})