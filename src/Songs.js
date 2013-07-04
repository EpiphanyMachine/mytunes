var Songs = Backbone.Collection.extend({
  initialize: function(){
    this.set('appState', JSON.parse(localStorage.getItem('appState')));
  },
  model: Song
  

});
