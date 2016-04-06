import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params)
    return Ember.RSVP.hash({
      seller: this.store.findRecord('seller', params.seller_id)
    });
  },
  actions: {
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      var store = params.seller;
      newProduct.save().then(function(){
        store.get('products').addObject(newProduct);
        return store.save();
      })
    }
  }
});
