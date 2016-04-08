import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false) : this.set('isSelected', true);
    },
    submitReview() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        rating: this.get('rating'),
        product: this.get('product')
      }
      this.sendAction('newReview', params);
    }
  }
});
