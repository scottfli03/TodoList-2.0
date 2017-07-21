import template from './about.component.html';
import controller from './about.controller.js';
import './about.component.scss';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'aboutController'
};
export default aboutComponent;