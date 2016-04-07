import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
      var date = moment(this.get('date')).add(3, 'hours');
      this.set('counter', moment.duration(date.diff(moment(this.get('date')))));
      console.log(this.get('counter'))
      var self = this;
      function running() {
        Ember.run.later(function() {
          running();
          console.log(self.get('counter'))
          self.set('counter', self.get('counter') - 1000);
        }, 1000);

      }
      running();
  },
  timer: Ember.computed('counter.@each', function() {
    return this.get('counter');
  })
});
