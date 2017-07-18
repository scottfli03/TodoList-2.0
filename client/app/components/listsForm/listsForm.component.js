import template from './listsForm.component.html';
import thisController from './listsForm.controller.js';
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
    toggleEdit: '&',
    toggleVisible: '&',
    listType: '<'
  },
  template,
  thisController
};
export default listsFormComponent;
