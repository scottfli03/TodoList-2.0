class tabController {
    constructor($scope, $element, $attrs) {
      this.name = 'tab';
      console.log("Entered tab controller");
      var self = this;
      self.$onInit = function() {
        self.tabSet.addTab(this);
      };
    }
  }

  export default tabController;