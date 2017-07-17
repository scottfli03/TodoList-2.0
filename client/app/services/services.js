import angular from 'angular';
import customConfirmModalService from './customConfirmModal/customConfirmModal';

const ServicesModule = angular.module('app.services', [])
  .service('customConfirmModalService', ['$ngBootbox', customConfirmModalService]);

export default ServicesModule;
