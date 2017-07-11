import template from './incompleteListForm.component.html';
import thisController from './incompleteListForm.controller.js';
import './incompleteListForm.component.scss';

let incompleteListFormComponent = {
  restrict: 'E',
  bindings: {
    list: '<',
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
export default incompleteListFormComponent;