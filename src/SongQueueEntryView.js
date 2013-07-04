var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',
  template: Handlebars.compile($("#EntryView-template").html()),
  // events: {
  // },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
