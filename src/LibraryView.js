var LibraryView = Backbone.View.extend({

  tagName: "table",

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

    this.$el.html('<table><tr><th>Play</th><th>Artist</th><th>Title (add to queue)</th><th>Play Count</th><th>Like</th></tr></table>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render().el;
      })
    );
    return this;
  }

});
