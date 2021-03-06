import template from './lists.component.html';
import thisController from './lists.controller.js';
import ngStorage from 'ngstorage';
import './lists.component.scss';

let listsComponent = {
  restrict: 'E',
  bindings: {
    listType: '@'
  },
  template,
  controller: ['$scope', '$http', '$localStorage', thisController]
};
export default listsComponent;