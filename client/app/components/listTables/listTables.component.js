import template from './listTables.component.html';
import thisController from './listTables.controller.js';
import './listTables.component.scss';

let listTablesComponent = {
  restrict: 'E',
  bindings: {
    lists: '<',
    newItem: '<',
    incompleteFilter: '&',
    addListItem: '&',
    removeList: '&',
    removeListItem: '&',
    updateListItem: '&',
    setFocus: '&',
    toggleCompleted: '&',
    toggleEdit: '&',
    toggleVisible: '&',
    listType: '<'
  },
  template,
  controller: thisController
};
export default listTablesComponent;
