import angular from 'angular';
import listsFormComponent from './listsForm.component';

const listsFormModule = angular.module('listsForm', [])
  .component('listsForm', listsFormComponent);
export default listsFormModule;