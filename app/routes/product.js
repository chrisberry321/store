import Ember from 'ember';


export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(params){
    return Ember.RSVP.hash({
      product: this.store.findRecord('product', params.product_id)
    });
  },
    actions: {
      addToCart(item) {
        this.get('shoppingCart').add(item);
      }
    }
});
