import Ember from 'ember';

export function productCountdown(params) {
  var date =params[0];
  if(date < 0){
    return 'expired';
  }
  return moment.duration(date).asMinutes().toPrecision(4);
}

export default Ember.Helper.helper(productCountdown);
