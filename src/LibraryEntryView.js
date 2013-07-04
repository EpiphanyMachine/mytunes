var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: Handlebars.compile($("#libraryEntryView-template").html()),

  events: {
    'click #title': function() {
      this.model.enqueue();
    },
    "click #voteUp": function(){
      this.model.voteUp();
    },
    "click #voteDown": function(){
      this.model.voteDown();
    },
    "click #topOfQueue": function(){
      this.model.topOfQueue();
    }
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));

    // thumbs actions
    this.$el.find('.vote').removeClass('active');
    this.model.get('vote') === "true" && this.$el.find('#voteUp').addClass('active');
    this.model.get('vote') === "false" && this.$el.find('#voteDown').addClass('active');

    return this;
  }

});
