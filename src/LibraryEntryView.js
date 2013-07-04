var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: Handlebars.compile($("#EntryView-template").html()),

  events: {
    'click': function() {
      this.model.play();
    }
  },

  render: function(){
    // var source = $("#libraryEntryView-template").html();
    // var source = "<td> {{ artist }} </td> <td> {{ title }} </td>";
    // var template = Handlebars.compile(source);
    // $el = $(this.el);
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
