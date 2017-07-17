import template from './pageHeader.component.html';
import thisController from './pageHeader.controller.js';
import './pageHeader.component.scss';

let pageHeaderComponent = {
  restrict: 'E',
  bindings: {
    page: '<'
  },
  template,
  controller: thisController
};
export default pageHeaderComponent;
