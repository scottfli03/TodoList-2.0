import template from './listsForm.component.html';
import controller from './listsForm.controller.js';
import './listsForm.component.scss';

let listsFormComponent = {
  restrict: 'E',
  bindings: {
    list: '<',
    newItem: '<',
    incompleteFilter: '&',
    addListItem: '&',
    removeList: '&',
    removeListItem: '&',
    updateListItem: '&',
    toggleCompleted: '&',
    toggleVisible: '&',
    listType: '<'
  },
  template,
  controller
};
export default listsFormComponent;
