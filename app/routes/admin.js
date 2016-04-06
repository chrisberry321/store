import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveSeller(params){
      var newSeller = this.store.createRecord('seller', params);
      newSeller.save();
      this.transitionTo('admin');
    }
  }
});
