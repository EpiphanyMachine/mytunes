var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    this.$el.html([
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render().el,
      new SongQueueView({collection: this.model.get('songQueue')}).render()
    ]);
  return this;
  }

});
