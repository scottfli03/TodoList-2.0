import template from './tab.component.html';
import thisController from './tab.controller.js';
import './tab.component.scss';

let tabComponent = {
  restrict: 'E',
  bindings: {
    header: '@'
  },
  template,
  controller: ['$scope', '$element', '$attrs', thisController],
  transclude: true,
  require: {
    tabSet: '^tabSet'
  }
};
export default tabComponent;