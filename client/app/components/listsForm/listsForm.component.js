import template from './listsForm.component.html';
import controller from './listsForm.controller.js';
import './listsForm.component.scss';

let listsFormComponent = {
  restrict: 'E',
  bindings: {
    list: '<',
    newItem: '<',
    listType: '<',
    incompleteFilter: '&',
    addListItem: '&',
    removeList: '&',
    removeListItem: '&',
    updateListItem: '&',
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
