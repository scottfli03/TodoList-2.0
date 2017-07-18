class listsFormController {
    constructor() {
      var self = this;
      self.name = 'listsForm';
      self.addThisListItem = addThisListItem;

      function addThisListItem(thisL) {
        self.addListItem({'list': thisL});
      }
    }
  }

  export default listsFormController;
