import angular from 'angular';
import pageHeaderComponent from './pageHeader.component';

const pageHeaderModule = angular.module('pageHeader', [])
  .component('pageHeader', pageHeaderComponent);
export default pageHeaderModule;