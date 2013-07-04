var Song = Backbone.Model.extend({
  initialize: function(){
    this.set('count', localStorage.getItem(this.get('url')) || 0);
    this.on('play', function(){
      this.set('count', this.get('count') + 1);
      this.updateLocalStorage();
    });
  },

  updateLocalStorage: function(){
    localStorage.setItem(this.get('url'), this.get('count'));
  },

  play: function(){
    this.trigger('play', this);
  },
  ended: function(){
    this.trigger('ended', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  }

});
