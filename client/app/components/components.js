import angular from 'angular';
    import AboutModule from './about/about.module';    import ListTablesModule from './listTables/listTables.module';    import ListsModule from './lists/lists.module';    import ListsFormModule from './listsForm/listsForm.module';    import NewListFormModule from './newListForm/newListForm.module';    import PageHeaderModule from './pageHeader/pageHeader.module';

const ComponentsModule = angular.module('app.components',[
       AboutModule.name,      ListTablesModule.name,      ListsModule.name,      ListsFormModule.name,      NewListFormModule.name,      PageHeaderModule.name 
]);

export default ComponentsModule;

  