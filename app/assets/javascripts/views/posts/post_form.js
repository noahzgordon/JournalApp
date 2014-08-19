JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],

  initialize: function () {
  },

  events: {
    "submit #update-form": "updatePost"
  },

  updatePost: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    _.extend(this.model.attributes, formData);

    this.model.save({}, {
      success: function () {
        Backbone.history.navigate("/", { trigger: true });
      },

      error: function (model, response) {
        var errorHtml = "<ul>";
        JSON.parse(response.responseText).forEach(function(error){
          errorHtml += "<li>" + error + "</li>";
        })
        errorHtml += "</ul>";

        $(".error-bar").html(errorHtml);
      }
    });
  },

  render: function () {
    this.$el.html(this.template({ post: this.model }))
  }
})