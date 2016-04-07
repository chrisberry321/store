import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false) : this.set('isSelected', true);
    },
    submitProduct(){
      var random = Math.floor(Math.random()*100);
      var params = {
        name: this.get('name')? this.get('name'): 'product ' + random,
        price: random,
        image: 'http://lorempixel.com/400/200/',
        description: 'bestProductEVER ' + random,
        seller: this.get('seller'),
        date: new Date()
      };
      this.set('name', '');
      this.set('isSelected', false);
      console.log(params);
      this.sendAction('sendProduct', params);
    }
  }
});
