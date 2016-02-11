/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({

  title() { return 'test'; },
  author() { return 'David Robson'; },
  payload() {
    return {
      'editor': {
        'content': '<p>Loads of awesome content</p>',
        'header': 'Awesome Example'
      }
    };
  },
  template() {
    return "<h1>{{model.title}}</h1><div>{{wysiwyg-editor content=model.payload.editor.content header=model.payload.editor.header}}</div>";
  }


});
