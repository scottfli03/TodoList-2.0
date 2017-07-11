class tabSetController {
    constructor($scope, $element, $attrs) {
      this.name = 'tabSet';
      console.log("Entered tabSet controller.");
      var self = this;
      self.tabs = [];

      self.addTab = function(tabController) {
        console.log("Tab Added.");
        var i;
        var old = false;
        for(i = 0; i < self.tabs.length; i++) {
          if (self.tabs[i].header === tabController.header) {
            old = true;
          }
        }
        if (!old) {
          self.tabs.push(tabController);
          if (self.tabs.length === 1) {
            self.selectTab(tabController);
          }
        }
      };
      
      self.selectTab = function(tabController) {
        angular.forEach(self.tabs, function(tabController) {
          tabController.active = false;
        });
        tabController.active = true;
      };
    }
  }

  export default tabSetController;