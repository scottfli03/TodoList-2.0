import template from './listsForm.component.html';
import controller from './listsForm.controller.js';
import './listsForm.component.scss';

let listsFormComponent = {
  restrict: 'E',
  bindings: {
    list: '<',
    lists: '<',
    newItem: '<',
    listType: '<',
    incompleteFilter: '&',
    addListItem: '&',
    removeList: '&',
    removeListItem: '&',
    updateListItem: '&',
    updateList: '&',
    copyListItem: '&',
    setFocus: '&',
    toggleCompleted: '&',
    toggleEdit: '&',
    toggleVisible: '&'
  },
  template,
  controller
};
export default listsFormComponent;
