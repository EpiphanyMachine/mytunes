var SongQueueView = Backbone.View.extend({

  initialize: function(){

    this.collection.on('add', function(){
      this.render();
    }, this);

    this.collection.on('remove', function(){
      this.render();
    }, this);
  },

  tagName: "table",

  render: function(){
    this.$el.children().detach();

    return this.$el.html('<th>Queued</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render().el;
      })
    );
  }

});
