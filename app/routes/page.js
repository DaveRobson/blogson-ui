import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('page', params.page_id);
  },
  afterModel: function(page) {
    var input = Ember.HTMLBars.compile(page.get('template'), false);

    Ember.TEMPLATES['dynamic'] = Ember.HTMLBars.template(input);
  },
  renderTemplate: function() {
    this.render('dynamic', {
      outlet: 'main',
      view: 'page'
    });
  }
});
