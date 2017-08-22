describe('lists', function() {

  beforeEach(module('app'));
  beforeEach(module('angular'));
  beforeEach(module('ngStorage'));
  beforeEach(module('jquery'));
  var ctrl;
  var $scope;
  beforeEach(inject(function($injector, $rootScope, $componentController, $localStorage, $http, $q) {
    store = {};
    lists = [  
      {"title":"Hygiene Products", 
      "isNew":false,
      "listItems": [
        {"title": "Soap", 
        "description": "Kind that smells good.",
        "isSelected": true, 
        "completed": false},
        {"title": "Comb", 
        "description": "A giant one!", 
        "isSelected": false,
        "completed": false},
        {"title": "Shaving cream", 
        "description": "Sensitive Skin",
        "isSelected": false, 
        "completed": false}]},
      {"title": "School Supplies",
      "isNew": false,
      "listItems": [
        {"title": "Computer", 
        "description": "Laptop",
        "isSelected": false, 
        "completed": false},
        {"title": "Notebooks", 
        "description": "Just in case you take notes by hand.",
        "isSelected": true, 
        "completed": true}]}
    ];
      $scope = $rootScope;
      deferred = $q.defer();

      $localStorage.getItem = function(key){};
      $localStorage.setItem = function(key, value) {};
      $localStorage.clear = function() {};

      spyOn($localStorage, 'getItem').and.callFake(function (key) {
          return store[key];
      });
      spyOn($localStorage, 'setItem').and.callFake(function (key, value) {
          return store[key] = value + '';
      });
      spyOn($localStorage, 'clear').and.callFake(function () {
          store = {};
      });
      spyOn($http, 'get').and.returnValue(deferred.promise);

      ctrl = $componentController('listsComponent', {$scope: $scope,
          $http: $http,
          $localStorage: $localStorage,
          $state: $state,
          $ngBootbox: $ngBootbox,
          $timeout: $timeout,
          $window: $window});
      console.log(ctrl);
      ctrl.lists = lists;
  }));

  // --- Before each test in the Component --- //
  // beforeEach(inject(function($injector, $rootScope, $componentController, $localStorage, $http, $q) {
  //   console.log("TEST");
  //   $scope = $rootScope.$new();
  //   deferred = $q.defer();
  //
  //   $localStorage.getItem = function(key){};
  //   $localStorage.setItem = function(key, value) {};
  //   $localStorage.clear = function() {};
  //
  //   spyOn($localStorage, 'getItem').and.callFake(function (key) {
  //     return store[key];
  //   });
  //   spyOn($localStorage, 'setItem').and.callFake(function (key, value) {
  //     return store[key] = value + '';
  //   });
  //   spyOn($localStorage, 'clear').and.callFake(function () {
  //     store = {};
  //   });
  //   spyOn($http, 'get').and.returnValue(deferred.promise);
  //
  //   this.ctrl = $componentController('listsComponent', {$scope: $scope,
  //                                                      $http: $http,
  //                                                      $localStorage: $localStorage,
  //                                                      $state: $state,
  //                                                      $ngBootbox: $ngBootbox,
  //                                                      $timeout: $timeout,
  //                                                      $window: $window});
  //   ctrl.lists = lists;
  //   console.log(this.ctrl);
  // }));

  // Original listApp test
  describe('lists', function() {
    it('should have a lists object that is defined', function() {
      expect(ctrl.lists).toBeDefined();
    }); 
    it('should contain a title of "Computer" in the first listItem of the second list', function() {
      expect(ctrl.lists[1].listItems[0]).toEqual(jasmine.objectContaining({title: 'Computer'}));
    });

    // --- Tests for addList function --- //
    describe('addList', function() {
      beforeEach(function() {
        ctrl.addList("test");
      });
      
      it('should have a list with 3 items after addList is called', function() {
        expect(ctrl.lists.length).toEqual(3);
      });

      it('should have a third list with a title of test', function() {
        expect(ctrl.lists[2].title).toEqual("test");
      });

      it('should have a third list where isNew is true', function() {
        expect(ctrl.lists[2].isNew).toBe(true);
      });

      it('should have a third list when listItems is an empty array', function() {
        expect(ctrl.lists[2].listItems).toEqual([]);
      });
    });

    // --- Tests for removeList function --- //
    describe('removeList', function() {
      beforeEach(function() {
        var list = {"title": "School Supplies",
          "isNew":false,
          "listItems": [
            {"title": "Computer", 
            "description": "Laptop",
            "isSelected": false, 
            "completed": false},
            {"title": "Notebooks", 
            "description": "Just in case you take notes by hand.",
            "isSelected": false, 
            "completed": true}]};
        ctrl.removeList(list);
      });

      it('should have only 1 list after removing the list', function() {
        expect(ctrl.lists.length).toEqual(1);
      });
    });

    // --- Tests for addListItem function --- //
    describe('addListItem', function() {
      beforeEach(function() {
        var newItem = {"title": "Pencils", 
        "description": "Remember a sharpener.",
        "isSelected": false, 
        "completed": false};
        ctrl.lists[1].isNew = true;
        ctrl.addListItem(ctrl.lists[1], newItem);
      });

      it('should have three listitems in the 2nd list of lists after addListItem is called.', function() {
        expect(ctrl.lists[1].listItems.length).toEqual(3);
      });

      it('should have three listitems in the 2nd list of lists after addListItem is called.', function() {
        expect(ctrl.lists[1].listItems.length).toEqual(3);
      });

      it('should set the newItems isSelected and completed to false.', function() {
        expect(ctrl.lists[1].listItems[2].isSelected).toEqual(false);
        expect(ctrl.lists[1].listItems[2].completed).toEqual(false);
      });

      it('should be contained in a list with isNew equaling false.', function() {
        expect(ctrl.lists[1].isNew).toEqual(false);
      });
    });
  
    // --- Tests for updateListItem function --- //  
    describe('updateListItem', function() {
      beforeEach(function() {
        var itemToUpdate = ctrl.lists[1].listItems[0];
        itemToUpdate.title = "New Title";
        itemToUpdate.description = "New Description";
        itemToUpdate.isSelected = true;
        itemToUpdate.completed = true;
        ctrl.updateListItem(ctrl.lists[1], itemToUpdate);
      }); 

      it('should have the properties of the item after they are updated.', function() {
        expect(ctrl.lists[1].listItems[0].title).toEqual("New Title");
        expect(ctrl.lists[1].listItems[0].description).toEqual("New Description");
        expect(ctrl.lists[1].listItems[0].isSelected).toEqual(true);
        expect(ctrl.lists[1].listItems[0].completed).toEqual(true);
      });
    });

    // --- Tests for removeListItem function --- //
    describe('removeListItem', function() {
      beforeEach(function() {
        var listWithItem = ctrl.lists[1];
        var itemToRemove = listWithItem.listItems[0];
        var previousLength = listWithItem.listItems.length;
        ctrl.removeListItem(listWithItem, itemToRemove);
      });

      it('should only have 1 less listItem in the list',function() {
        expect(ctrl.lists[1].listItems.length).toEqual(1);
      });

      it('should not contain a title of "Computer"', function() {
        expect(ctrl.lists[1].listItems[0]).not.toEqual(jasmine.objectContaining({title: 'Computer'}));
      });
    });

    // --- Tests for toggleCompleted function --- //
    describe('toggleCompleted', function() {
      it('should properly toggle the completed property if and only if it is selected and change the listItem to unselected when listType is "completed"', function() {
        expect(ctrl.lists[1].listItems[0].isSelected).toEqual(false);
        expect(ctrl.lists[1].listItems[0].completed).toEqual(false);
        expect(ctrl.lists[1].listItems[1].completed).toEqual(true);
        expect(ctrl.lists[1].listItems[1].isSelected).toEqual(true);
        ctrl.toggleCompleted("completed", ctrl.lists[1]);
        expect(ctrl.lists[1].listItems[0].isSelected).toEqual(false);
        expect(ctrl.lists[1].listItems[0].completed).toEqual(false);
        expect(ctrl.lists[1].listItems[1].completed).toEqual(false);
        expect(ctrl.lists[1].listItems[1].isSelected).toEqual(false);
      });

      it('should properly toggle the completed property if and only if it is selected and change the listItem to unselected when listType is "incomplete"', function() {
        expect(ctrl.lists[0].listItems[0].isSelected).toEqual(true);
        expect(ctrl.lists[0].listItems[0].completed).toEqual(false);
        expect(ctrl.lists[0].listItems[1].completed).toEqual(false);
        expect(ctrl.lists[0].listItems[1].isSelected).toEqual(false);
        ctrl.toggleCompleted("incomplete", ctrl.lists[0]);
        expect(ctrl.lists[0].listItems[0].isSelected).toEqual(false);
        expect(ctrl.lists[0].listItems[0].completed).toEqual(true);
        expect(ctrl.lists[0].listItems[1].completed).toEqual(false);
        expect(ctrl.lists[0].listItems[1].isSelected).toEqual(false);
      });

      it('should not toggle anything if the listType is not valid, but will unselect items', function() {
        expect(ctrl.lists[1].listItems[0].isSelected).toEqual(false);
        expect(ctrl.lists[1].listItems[0].completed).toEqual(false);
        expect(ctrl.lists[1].listItems[1].completed).toEqual(true);
        expect(ctrl.lists[1].listItems[1].isSelected).toEqual(true);
        ctrl.toggleCompleted("Invalid listType", ctrl.lists[1]);
        expect(ctrl.lists[1].listItems[0].isSelected).toEqual(false);
        expect(ctrl.lists[1].listItems[0].completed).toEqual(false);
        expect(ctrl.lists[1].listItems[1].completed).toEqual(true);
        expect(ctrl.lists[1].listItems[1].isSelected).toEqual(false);
      });
    });
  });
});