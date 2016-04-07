import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
      var date = moment();
      console.log(date);
      var expireDate = moment(this.get('expireDate'));
      this.set('counter', moment.duration(expireDate.diff(date)));
      console.log(this.get('counter'));
      var self = this;
      function running() {
        Ember.run.later(function() {
          running();
          self.set('counter', self.get('counter') - 1000);
        }, 1000);

      }
      running();
  },
  timer: Ember.computed('counter.@each', function() {
    return this.get('counter');
  })
});
