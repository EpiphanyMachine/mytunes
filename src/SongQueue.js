var SongQueue = Songs.extend({

  initialize: function(songData){
    this.add(songData);

    this.on('ended', function(){
      this.shift();
    });
  },

  playFirst: function(){
    this.at(0).play();
    console.log("played", this.models[0].attributes.title);
  },
  add: function(){
    Songs.prototype.add.apply(this, arguments);
    if (this.length === 1){
      this.playFirst();
    }
  }


});