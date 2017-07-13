class listsController {
    constructor($scope, $http, $localStorage, $state) {
      this.name = 'lists';
      var self = this;
      self.listType = $state.current.data.listType;
      console.log("Entered Lists Controller");
      console.log(self.listType);
      // delete $localStorage.lists;
      self.getLists = function() {
        if (typeof $localStorage.lists === "undefined") {
          $http.get('assets/json/lists.json').then(function(res){
            console.log("Attempting to access data.");
            self.lists = res.data;
            self.saveListData();
          });
        } else {
          self.lists = localStorage.lists;
        }
      };
      self.incompleteFilter = function() {
        return function(list) {
          return !list.listItems.completed || list.isNew;
        };
      };
      self.loadListData = function() {
        self.lists = $localStorage.lists;
      };

      self.saveListData = function() {
        $localStorage.lists = self.lists;
      };

      self.addList = function(title) {
        self.lists.push({title: title,
          isNew: true,
          listItems: [],
        });
      };

      self.removeList = function(list) {
        var index = self.lists.indexOf(list);
        self.lists.splice(index, 1);
      };

      self.addListItem = function(list, newItem) {
        newItem.isSelected = false;
        newItem.completed = false;
        list.isNew = false;
        var newItemCopy = angular.copy(newItem);
        list.listItems.push(newItemCopy);
      };

      self.updateListItem = function(list, listItem) {
        var listIndex = self.lists.indexOf(list);
        var itemIndex = list.listItems.indexOf(listItem);
        var listItemCopy = angular.copy(listItem);
        self.lists[listIndex].listItems[itemIndex] = listItem;
      };

      self.removeListItem = function(list, listItem) {
        var listIndex = self.lists.indexOf(list);
        var itemIndex = list.listItems.indexOf(listItem);
        self.lists[listIndex].listItems.splice(itemIndex, 1);
      };

      self.toggleCompleted = function(listType, list) {
        var liLength = list.listItems.length;
        var index = self.lists.indexOf(list);
        var liIsSelected;
        for (var i = 0; i < liLength; i++) {
          liIsSelected = list.listItems[i].isSelected;
          if (liIsSelected === true && listType === 'incomplete') {
            list.listItems[i].completed = true;
          } else if (liIsSelected === true && listType === 'completed') {
            list.listItems[i].completed = false;
          }
        }
        setUnSelected();
        self.lists[index] = angular.copy(list);
      };

      var setUnSelected = function() {
        var listsLength = self.lists.length;
        var i, a, theList, liLength;
        for (i = 0; i < listsLength; i++) {
          theList = self.lists[i];
          liLength = theList.listItems.length;
          for (a = 0; a < liLength; a++) {
            theList.listItems[a].isSelected = false;
          }
        }
      };
      self.getLists();
      if (typeof $localStorage.lists !== "undefined") {
        self.loadListData();
      }
    }
  }

  export default listsController;
