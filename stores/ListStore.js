import { EventEmitter } from 'events';
import _ from 'lodash';

let ListStore = _.extend({}, EventEmitter.prototype, {

  items: [
    {
      name: 'Item 1',
      id: 0
    },
    {
      name: 'Item 2',
      id: 1
    }
  ],

  getItems: function() {
    return this.items;
  }
});

export default ListStore;
