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
      },
      delete(params){
        console.log(params);
        params.item.destroyRecord();
        this.transitionTo('index');
      },
      addReview(params){
        var newReview = this.store.createRecord('review', params);
        var product = params.product;
        newReview.save().then(function(){
          product.get('reviews').addObject(newReview);
          product.save();
        })
      }
    }
});
