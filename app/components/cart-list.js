import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeCartItem(item) {
      this.get('shoppingCart').remove(item);
    }
  }
});
