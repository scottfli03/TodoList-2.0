import angular from 'angular';
import tabComponent from './tab.component';
import tabSet from '../tabSet/tabSet.module';

const tabModule = angular.module('tab', ['tabSet'])
  .component('tab', tabComponent);
export default tabModule;