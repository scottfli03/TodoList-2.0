import $ from 'jquery';
import jQuery from 'jquery';
import 'bootstrap';
import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import ngStorage from 'ngstorage';
import * as uiBootstrap from 'angular-ui-bootstrap';
import * as uiRouter from 'angular-ui-router';
import * as ngBootbox from 'ngbootbox';
import appComponent from './app.component';
import ComponentsModule from './components/components';

angular.module('app', [
  ComponentsModule.name,
  'ui.router',
  'ngBootbox'
])
.factory('ngStorage', function(){
  return ngStorage;
})
.factory('uiBootstrap', function(){
  return uiBootstrap;
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
  $urlRouterProvider.when('', '/incomplete')
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
    data: {
      listType: 'about'
    }
  }
  $stateProvider.state(homeState);
  $stateProvider.state(incompleteState);
  $stateProvider.state(completedState);
  $stateProvider.state(aboutState);
}]);
