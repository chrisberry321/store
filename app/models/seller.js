import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  feedback: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
