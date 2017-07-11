import angular from 'angular';
import tabSetComponent from './tabSet.component';

const tabSetModule = angular.module('tabSet', [])
  .component('tabSet', tabSetComponent);
export default tabSetModule;