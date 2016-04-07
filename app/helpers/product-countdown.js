import Ember from 'ember';

export function productCountdown(params) {
  var date =params[0];
  return moment.duration(date).asHours();
}

export default Ember.Helper.helper(productCountdown);
