import DS from 'ember-data'
import CachedShoe   from 'ember-cached-shoe'

export default DS.RESTAdapter.extend(CachedShoe, {
  host: 'https://jsonplaceholder.typicode.com'
});
