import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
      var date = moment();
      var expireDate = moment(this.get('expireDate'));
      this.set('counter', moment.duration(expireDate.diff(date)));
      var self = this;
      function running() {
        Ember.run.later(function() {
          if(self.get('counter')){
            running();
            self.set('counter', self.get('counter') - 1000);
        }
        }, 1000);

      }
        running();
  },
  counter: 0,
  timer: Ember.computed('counter.@each', function() {
    var params = {
      item: this.get('product')
    }
    if(this.get('counter')< 0){
      this.sendAction('deleteProduct', params);
    }
    return this.get('counter');
  })
});
