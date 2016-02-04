/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({

  title() { return 'test'; },
  author() { return 'David Robson'; },
  content() { return 'Loads of awsome content'; },
  name() {
    return 'content-test';
  },
  template() {
    return '<h1>{{model.title}}</h1><div>{{content-test content=model.content}}</div>';
  }


  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});
