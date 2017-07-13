import angular from 'angular';
    import ListTablesModule from './listTables/listTables.module';    import ListsModule from './lists/lists.module';    import ListsFormModule from './listsForm/listsForm.module';    import NewListFormModule from './newListForm/newListForm.module';    import PageHeaderModule from './pageHeader/pageHeader.module';    import TabModule from './tab/tab.module';    import TabSetModule from './tabSet/tabSet.module';

const ComponentsModule = angular.module('app.components',[
       ListTablesModule.name,      ListsModule.name,      ListsFormModule.name,      NewListFormModule.name,      PageHeaderModule.name,      TabModule.name,      TabSetModule.name 
]);

export default ComponentsModule;

  