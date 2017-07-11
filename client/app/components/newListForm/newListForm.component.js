import template from './newListForm.component.html';
import thisController from './newListForm.controller.js';
import './newListForm.component.scss';

let newListFormComponent = {
  restrict: 'E',
  bindings: {
    addList: '&'
  },
  template,
  thisController
};
export default newListFormComponent;