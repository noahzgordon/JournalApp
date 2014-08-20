JournalApp.Views.Root = Backbone.View.extend({
  template: JST['root'],

  initialize: function() {},

  render: function () {
    this.$el.html(this.template());
  }
});
