import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      mode: { name: 'handlebars', base: 'text/html'},
      theme: 'monokai'
    };
  }

});
