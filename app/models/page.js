import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  template: DS.attr(),
  payload: DS.attr()
});
