import angular from 'angular';
    import CompletedListFormModule from './completedListForm/completedListForm.module';

const ComponentsModule = angular.module('app.components',[
       CompletedListFormModule.name, 
]);

export default ComponentsModule;