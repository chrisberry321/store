import Ember from 'ember';

export function dateHelper(params) {
  var date = params[0];
  return moment(date).format('MMM Do YY');
}

export default Ember.Helper.helper(dateHelper);
