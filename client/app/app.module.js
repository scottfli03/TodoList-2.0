import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import ngStorage from 'ngstorage';
import appComponent from './app.component';
import ComponentsModule from './components/components';

angular.module('app', [
  ComponentsModule.name
])
.factory('ngStorage', function(){
  return ngStorage;
})
.component('app', appComponent);