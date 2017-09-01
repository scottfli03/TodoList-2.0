import template from './listTables.component.html';
import thisController from './listTables.controller.js';
import './listTables.component.scss';

let listTablesComponent = {
  restrict: 'E',
  bindings: {
    lists: '<',
    newItem: '<',
    listType: '<',
    incompleteFilter: '&',
    addListItem: '&',
    removeList: '&',
    removeListItem: '&',
    updateListItem: '&',
    updateList: '&',
    setFocus: '&',
    copyListItem: '&',
    toggleCompleted: '&',
    toggleEdit: '&',
    toggleVisible: '&'
  },
  template,
  controller: thisController
};
export default listTablesComponent;
