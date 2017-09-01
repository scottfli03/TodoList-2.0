class listsController {
    constructor($scope,
                $http,
                $localStorage,
                $state,
                $ngBootbox,
                $timeout,
                $window,
                listCRUDService) {
      this.name = 'lists';
      var self = this;
      self.itemCopy = {};
      self.listTitle = "";
      self.modalResponse = undefined;
      self.listType = $state.current.data.listType;
      self.getLists = function() {
        listCRUDService.getAllListData().then(function(result) {
          self.lists = result;
          self.initializeLists();
        });
      };

      self.initializeLists = function() {
        for (var i = 0; i < self.lists.length; i++) {
          if (self.lists[i].visible === undefined) {
            self.lists[i].visible = true;
          }
          for (var a = 0; a < self.lists[i].listItems.length; a++) {
            self.lists[i].listItems[a].editingTitle = false;
            self.lists[i].listItems[a].editingDesc = false;
          }
        }
      }

      self.initializeNewList = function(list) {
        list.isNew = true;
        list.visible = true;
      }

      self.initializeNewListItem = function(listItem) {
        listItem.isSelected = false;
        listItem.editingTitle = false;
        listItem.editingDesc = false;
      }

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

      // Adds a new, empty list that should be visible and sets the title.
      self.addList = function(listTitle) {
        var list = {title: listTitle};
        listCRUDService.addList(list).then(function() {
          self.getLists();
        });
      };

      // Removes the specified list
      self.removeList = function(list) {
        $ngBootbox.confirm("Delete '" + list.title + "' list?")
          .then(function() {
              listCRUDService.deleteList(list.listID).then(function(result) {
                self.getLists();
              });
            });
      };


      self.addListItem = function(list) {
        list.newItem.completed = false;
        var newItemCopy = angular.copy(list.newItem);
        var itemID;
        listCRUDService.addListItem(newItemCopy, list.listID).then(function(listItemID) {
          self.getLists();
        });
        setTimeout(function() {
        }, 500);
      };

      // Toggles whether the listItem should be in edit mode.
      // If num=1 then title is set to edit, 2 then description.
      self.toggleEdit = function(num, list, listItem) {
        if (!listItem.editingTitle && num === 1) {
          listItem.editingTitle = true;
        } else if (!listItem.editingDesc && num === 2){
          listItem.editingDesc = true;
        } else {
          listItem.editingTitle = false;
          listItem.editingDesc = false;
        }
      };

      self.copyListItem = function(listItem) {
        self.itemCopy = angular.copy(listItem);
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
        listCRUDService.updateListItem(listItemCopy, list.listID).then(function() {
          self.getLists();
        });
      };

      self.updateList = function(list) {
        $ngBootbox.confirm("Enter new title")
          .then(function() {
            listCRUDService.updateList(list).then(function(result) {
              self.getLists();
            });
          });
      }

      //Used to set focus on items in the view based on their ID.
      self.setFocus = function(id) {
        return $timeout(function() {
          console.log("Attempting to set focus on:");
          console.log(id);
          var element = $window.document.getElementById(id);
          if (element) {
            element.focus();
          }
        });
      }

      self.removeListItem = function(list, listItem) {
        listCRUDService.deleteListItem(listItem.itemID).then(function() {
          self.getLists();
        });
      };

      self.toggleCompleted = function(listItem, listID) {
        if (!listItem.completed) {
          listItem.completed = true;
        } else {
          listItem.completed = false;
        }
        var listItemCopy = angular.copy(listItem);
        listCRUDService.updateListItem(listItemCopy, listID).then(function() {
          self.getLists();
        });
      };

      // var setUnSelected = function() {
      //   var listsLength = self.lists.length;
      //   var i, a, theList, liLength;
      //   for (i = 0; i < listsLength; i++) {
      //     self.lists[i].listItems.length;
      //     for (a = 0; a < liLength; a++) {
      //       theList.listItems[a].isSelected = false;
      //     }
      //   }
      // };
      self.getLists();
    };
  }

  export default listsController;
