import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


class NewItemForm extends React.Component {
  createItem(e) {
    e.preventDefault();

    let id = guid();

    let item_title = React.findDOMNode(this.refs.item_title).value.trim();

    React.findDOMNode(this.refs.item_title).value = '';

    AppDispatcher.dispatch({
      action: 'add-item',
      new_item: {
        id: id,
        name: item_title
      }
    });
  }

  render() {
    return <form onSubmit={ this.createItem.bind(this) }>
    <input type="text" ref="item_title" />
    <button>Add new item</button>
    </form>;
  }
}

export default NewItemForm;
