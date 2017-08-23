class listsController {
    constructor($scope,
                $http,
                $localStorage,
                $state,
                $ngBootbox,
                $timeout,
                $window) {
      this.name = 'lists';
      var self = this;
      self.itemCopy = {};
      self.listTitle = "";
      self.modalResponse = undefined;
      self.listType = $state.current.data.listType;

      self.getLists = function() {
        $http.get('http://www.todolist.com:8081/mvcapp/list/all').then(function(res){
          self.lists = res.data;
          self.initializeLists();
        });
      }

      // var listItem = {};
      // var list = {};
      self.initializeLists = function() {
        for (var i = 0; i < self.lists.length; i++) {
          self.lists[i].visible = true;
          for (var a = 0; a < self.lists[i].listItems.length; a++) {
            self.lists[i].listItems[a].completed = false;
            self.lists[i].listItems[a].editingTitle = false;
            self.lists[i].listItems[a].editingDesc = false;
          }
        }
        console.log(self.lists);
      }

      // Gets the lists either from local storage or from the JSON file.
      // self.getLists = function() {
      //   if (typeof $localStorage.lists === "undefined") {
      //     $http.get('assets/json/lists.json').then(function(res){
      //       self.lists = res.data;
      //       self.saveListData();
      //     });
      //   } else {
      //     self.lists = localStorage.lists;
      //   }
      // };

      // Sets if the list should be visible in the view.
      self.toggleVisible = function(list) {
        if (list.visible === undefined) {
          list.visible = false;
        } else if (list.visible) {
          list.visible = false;
        } else {
          list.visible = true;
        }
      }

      // Can be used to filter to incomplete items or if a list is new.
      self.incompleteFilter = function() {
        return function(list) {
          return !list.listItems.completed || list.isNew;
        };
      };

      // // Sets lists from local storage as lists in controller.
      // self.loadListData = function() {
      //   self.lists = $localStorage.lists;
      // };
      //
      // // Saves list data from controller to local storage.
      // self.saveListData = function() {
      //   $localStorage.lists = self.lists;
      // };

      // Adds a new, empty list that should be visible and sets the title.
      self.addList = function(listTitle) {
        self.lists.push({title: listTitle,
          isNew: true,
          listItems: [],
          visible: true
        });
        self.listTitle = undefined;
      };

      // Removes the specified list
      self.removeList = function(list) {
        $ngBootbox.confirm("Delete '" + list.title + "' list?")
          .then(function() {
            // var index = self.lists.indexOf(list);
            // self.lists.splice(index, 1);
            $http.post('http://www.todolist.com:8081/mvcapp/list/delete/'+ list.listID).then(function(res){
              console.log(res);
            });
          }, function() {
          })
      };

      // Adds a list item by passing the list
      // with a newItem variable contained in it.
      self.addListItem = function(list) {
        var newItem = list.newItem;
        newItem.isSelected = false;
        newItem.completed = false;
        newItem.editingTitle = false;
        newItem.editingDesc = false;
        list.isNew = false;
        var newItemCopy = angular.copy(newItem);
        list.listItems.push(newItemCopy);
        list.newItem.title = undefined;
        list.newItem.description = undefined;
      };

      // Toggles whether the listItem should be in edit mode.
      // If num=1 then title is set to edit, 2 then description.
      self.toggleEdit = function(num, list, listItem) {
        console.log(listItem);
        if (!listItem.editingTitle && num === 1) {
          listItem.editingTitle = true;
        } else if (!listItem.editingDesc && num === 2){
          listItem.editingDesc = true;
        } else {
          listItem.editingTitle = false;
          listItem.editingDesc = false;
        }
        self.updateListItem(list, listItem);
      };

      self.copyListItem = function(listItem) {
        self.itemCopy = angular.copy(listItem);
        console.log(self.itemCopy);
      };

      // Updates the list item in the specified list.
      self.updateListItem = function(list, listItem) {
        var listIndex = self.lists.indexOf(list);
        var itemIndex = list.listItems.indexOf(listItem);

        if (listItem.title === "" || listItem.title === undefined) {
          listItem.title = self.itemCopy.title;
        }
        if (listItem.description === "" || listItem.description === undefined) {
          listItem.description = self.itemCopy.description;
        }
        var listItemCopy = angular.copy(listItem);
        self.lists[listIndex].listItems[itemIndex] = listItem;
      };

      //Used to set focus on items in the view based on their ID.
      self.setFocus = function(id) {
        console.log("Focusing on: "+id);
        return $timeout(function() {
          var element = $window.document.getElementById(id);
          if (element) {
            element.focus();
          }
        });
      }

      self.removeListItem = function(list, listItem) {
        var listIndex = self.lists.indexOf(list);
        var itemIndex = list.listItems.indexOf(listItem);
        self.lists[listIndex].listItems.splice(itemIndex, 1);
      };

      self.toggleCompleted = function(listItem) {
        console.log(listItem);
        if (!listItem.completed) {
          listItem.completed = true;
        } else {
          listItem.completed = false;
        }
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
    };
  }

  export default listsController;
