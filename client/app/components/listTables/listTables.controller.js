class listTablesController {
    constructor() {
      var self = this;
      self.name = 'listTables';
      self.addThisListItem = addThisListItem;
      function addThisListItem(list) {
        self.addListItem({'list': list});
      }
    }
  }

  export default listTablesController;
