class newListFormController {
    constructor() {
      var vm = this;
      vm.name = 'newListForm';
      vm.addNewList = addNewList;

      function addNewList(name) {
        vm.addList({'listTitle': name})
      }

    }
  }

  export default newListFormController;
