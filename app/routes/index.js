import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      sellers: this.store.findAll('seller'),
      products: this.store.findAll('product')
    });
  }
});
