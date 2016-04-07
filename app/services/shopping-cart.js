import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: Ember.computed('items.[]', function(){
    var total = 0;
    this.get('items').forEach(function(item){
      total += parseInt(item.get('price'));
    });
    return total;
  }),
  remove(item){
    var index = this.get('items').indexOf(item);
    this.get('items').removeAt(index, 1);
  },
  add(item) {
    this.get('items').pushObject(item);
  }
});
