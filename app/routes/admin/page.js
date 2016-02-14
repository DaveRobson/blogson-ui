import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      mode: { name: 'handlebars', base: 'text/html'},
      theme: 'monokai',
      page: {title: '', author: '', name: ''}
    };
  },
  actions: {
    create(model) {

      const template = Ember.$('.template')[0].value;
      const page = model.page;

      this.store.createRecord('page', {
        id: page.name,
        title: page.name,
        author: page.author,
        template: template,
        payload: {
          editor: {
            content: '<p>Dave Test content</p>',
            header: 'Whatever'
          }
        }
      }).save();

    }
  }


});
