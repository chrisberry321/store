import Ember from 'ember';

export default Ember.Component.extend({
  topSellers: Ember.computed('sortedSellers', function() {
      return this.get('sortedSellers').filter(function(seller, index) {
        return index < 10;
      });
    }),
    sortedSellers: Ember.computed.sort('sellers', 'sorting'),
    sorting: ['feedback:desc']
});
