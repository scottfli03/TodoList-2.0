import angular from 'angular';
import listTablesComponent from './listTables.component';

const listTablesModule = angular.module('listTables', [])
  .component('listTables', listTablesComponent);
export default listTablesModule;