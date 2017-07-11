import template from './completedListForm.component.html';
import thisController from './completedListForm.controller.js';
import './completedListForm.component.scss';

let completedListFormComponent = {
  restrict: 'E',
  bindings: {
    list: '<',
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
export default completedListFormComponent;