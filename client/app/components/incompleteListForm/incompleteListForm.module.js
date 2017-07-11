import angular from 'angular';
import incompleteListFormComponent from './incompleteListForm.component';

const incompleteListFormModule = angular.module('incompleteListForm', [])
  .component('incompleteListForm', incompleteListFormComponent);
export default incompleteListFormModule;