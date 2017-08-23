import angular from 'angular';
import listCRUDService from './listCRUD/listCRUD';
const ServicesModule = angular.module('app.services', [])
  .service('listCRUDService', listCRUDService);
export default ServicesModule;
