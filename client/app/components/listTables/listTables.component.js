import template from './listTables.component.html';
import thisController from './listTables.controller.js';
import './listTables.component.scss';

let listTablesComponent = {
  restrict: 'E',
  bindings: {
    lists: '<',
    incompleteFilter: '&',
    addListItem: '&',
    removeList: '&',
    removeListItem: '&',
    updateListItem: '&',
    toggleCompleted: '&',
    listType: '<'
  },
  template,
  thisController
};
export default listTablesComponent;