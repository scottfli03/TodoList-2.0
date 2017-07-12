import angular from 'angular';
    import CompletedListFormModule from './completedListForm/completedListForm.module';    import IncompleteListFormModule from './incompleteListForm/incompleteListForm.module';    import ListTablesModule from './listTables/listTables.module';    import ListsModule from './lists/lists.module';    import NewListFormModule from './newListForm/newListForm.module';    import TabModule from './tab/tab.module';    import TabSetModule from './tabSet/tabSet.module';    import PageHeaderModule from './pageHeader/pageHeader.module';

const ComponentsModule = angular.module('app.components',[
       CompletedListFormModule.name,      IncompleteListFormModule.name,      ListTablesModule.name,      ListsModule.name,      NewListFormModule.name,      TabModule.name,      TabSetModule.name,      PageHeaderModule.name 
]);

export default ComponentsModule;