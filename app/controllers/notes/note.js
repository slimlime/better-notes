import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNote() {
      this.get('model').save();
    },
    deleteNote() {
      this.get('model').destroyRecord()
        .then(this.transitionTo('notes'));
    }
  }
});
