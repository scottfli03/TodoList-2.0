import angular from 'angular';
import aboutComponent from './about.component';

const aboutModule = angular.module('about', [])
  .component('about', aboutComponent);
export default aboutModule;