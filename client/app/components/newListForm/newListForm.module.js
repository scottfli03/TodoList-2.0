import angular from 'angular';
import newListFormComponent from './newListForm.component';

const newListFormModule = angular.module('newListForm', [])
  .component('newListForm', newListFormComponent);
export default newListFormModule;