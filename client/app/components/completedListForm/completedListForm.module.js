import angular from 'angular';
import completedListFormComponent from './completedListForm.component';

const completedListFormModule = angular.module('completedListForm', [])
  .component('completedListForm', completedListFormComponent);
export default completedListFormModule;