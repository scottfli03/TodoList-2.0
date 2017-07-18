import template from './newListForm.component.html';
import controller from './newListForm.controller.js';
import './newListForm.component.scss';

let newListFormComponent = {
  restrict: 'E',
  bindings: {
    listTitle: '<',
    addList: '&'
  },
  template,
  controller
};
export default newListFormComponent;
