import Ember from 'ember';

export default Ember.Component.extend({
  contentHeight: 200,
  editingDisabled: false,

  actions: {
    changeHeight(someObject) {
      var height = someObject.doSomeCalculationToGetHeight();
      this.set('contentHeight', height);
    }
  }
});
