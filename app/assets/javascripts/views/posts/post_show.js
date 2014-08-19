JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],

  initialize: function () {
  },

  events: {
    "dblclick #post-title": "selectTitle",
    "dblclick #post-body": "selectBody",
    "blur #title-input": "editTitle",
    "blur #body-input": "editBody"
  },

  selectTitle: function (event) {
    $(event.currentTarget).replaceWith("<input type='text' id='title-input'>");
    $("#title-input").val(this.model.get("title")).focus();
  },

  selectBody: function (event) {
    $(event.currentTarget).replaceWith("<input type='text' id='body-input'>");
    $("#body-input").val(this.model.get("body")).focus();
  },

  editTitle: function(event) {
    var newTitle = $(event.currentTarget).val();
    this.model.set("title", newTitle);
    this.model.save();
    this.render();
  },

  editBody: function(event) {
    var newBody = $(event.currentTarget).val();
    this.model.set("body", newBody);
    this.model.save();
    this.render();
  },

  render: function () {
    this.$el.html(this.template({ post: this.model }))
  }
})