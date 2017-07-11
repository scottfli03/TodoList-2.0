import template from './tabSet.component.html';
import thisController from './tabSet.controller.js';
import './tabSet.component.scss';

let tabSetComponent = {
  restrict: 'E',
  bindings: {
    lists: '<',
    incompleteFilter: '&',
    addListItem: '&',
    removeList: '&',
    removeListItem: '&',
    updateListItem: '&',
    toggleCompleted: '&',
    listType: '<'
  },
  template,
  controller: ['$scope', '$element', '$attrs', thisController],
  transclude: true
};
export default tabSetComponent;