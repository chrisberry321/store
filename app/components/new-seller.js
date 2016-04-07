import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false) : this.set('isSelected', true);
    },
    submitSeller(){
      var random = Math.floor(Math.random()*100);
      var random10 = Math.floor(Math.random()*9)+1;
      var params = {
        name: this.get('name')? this.get('name'): 'store ' + random,
        feedback: random,
        description: 'bestStoreEVER ' + random,
        image: 'http://lorempixel.com/400/400/fashion/' + random10
      };
      this.set('name', '');
      this.set('isSelected', false);
      this.sendAction('sendSeller', params);
    }
  }
});
