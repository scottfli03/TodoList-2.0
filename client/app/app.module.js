import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import ngStorage from 'ngstorage';
import * as uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import ComponentsModule from './components/components';

angular.module('app', [
  ComponentsModule.name,
  'ui.router'
])
.factory('ngStorage', function(){
  return ngStorage;
})
.factory('uiRouter', function(){
  return uiRouter;
})
.component('app', appComponent)
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '',
    component: 'lists',
    data: {
      listType: 'incomplete'
    }
  }
  var incompleteState = {
    name: 'incomplete',
    url: '/incomplete',
    component: 'lists',
    data: {
      listType: 'incomplete'
    }
  }
  var completedState = {
    name: 'completed',
    url: '/completed',
    component: 'lists',
    data: {
      listType: 'completed'
    }
  }
  var aboutState = {
    name: 'about',
    url: '/about',
    component: 'about',
  }
  $stateProvider.state(homeState);
  $stateProvider.state(incompleteState);
  $stateProvider.state(completedState);
  $stateProvider.state(aboutState);
}]);
