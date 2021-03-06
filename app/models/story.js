import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  category: DS.attr()
});
