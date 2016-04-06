import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false) : this.set('isSelected', true);
    },
    submitSeller(){
      var params = {
        name: this.get('name'),
        feedback: 0,
        description: 'bestStoreEVER'
      };
      this.set('name', '');
      this.set('isSelected', false);
      this.sendAction('sendSeller', params);
    }
  }
});
