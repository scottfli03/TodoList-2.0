import template from './lists.component.html';
import controller from './lists.controller.js';
import ngStorage from 'ngstorage';
import './lists.component.scss';

let listsComponent = {
  restrict: 'E',
  bindings: {
    listType: '<'
  },
  template,
  controller: ['$scope', '$http', '$localStorage', '$state', '$ngBootbox', '$timeout', '$window', 'listCRUDService', controller]
};
export default listsComponent;
