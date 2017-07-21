import angular from 'angular';
import listsComponent from './lists.component';

const listsModule = angular.module('lists', ['ngStorage'])
  .component('lists', listsComponent);
export default listsModule;
