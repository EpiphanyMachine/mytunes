var LibraryView = Backbone.View.extend({

  tagName: "table class='library'",
  template: Handlebars.compile($("#libraryView-template").html()),

  initialize: function(){
    this.collection.on('play', function(){
      this.render();
    }, this);
    this.collection.on('vote', function(){
      this.render();
    }, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html(this.template(this.collection.attributes)).append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render().el;
      })
    );
    return this;
  }

});
