var Song = Backbone.Model.extend({
  initialize: function(){
    this.set('count', localStorage.getItem('count' + this.get('url')) || 0);
    this.set('vote', localStorage.getItem('vote' + this.get('url')) || "null");
    this.on('play', function(){
      this.set('count', parseInt(this.get('count')) + 1);
      localStorage.setItem('count' + this.get('url') , this.get('count'));
    });
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
  },
  voteUp: function(){
    this.get('vote') === "true" ? this.set('vote', "null") : this.set('vote', "true");
    localStorage.setItem('vote' + this.get('url') , this.get('vote'));
    this.trigger('vote', this);
  },
  voteDown: function(){
    this.get('vote') === "false" ? this.set('vote', "null") : this.set('vote', "false");
    localStorage.setItem('vote' + this.get('url') , this.get('vote'));
    this.trigger('vote', this);
  }

});
