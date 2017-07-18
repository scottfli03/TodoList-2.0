class listsController {
    constructor($scope, $http, $localStorage, $state, $ngBootbox) {
      this.name = 'lists';
      var self = this;
      self.listTitle = "";
      self.modalResponse = undefined;
      self.listType = $state.current.data.listType;
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

      self.toggleVisible = function(list) {
        if (list.visible === undefined) {
          list.visible = false;
        } else if (list.visible) {
          list.visible = false;
        } else {
          list.visible = true;
        }
      }

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

      self.addList = function(listTitle) {
        self.lists.push({title: listTitle,
          isNew: true,
          listItems: [],
          visible: true
        });
        self.listTitle = undefined;
      };

      self.removeList = function(list) {
        $ngBootbox.confirm("Delete '" + list.title + "' list?")
          .then(function() {
            var index = self.lists.indexOf(list);
            self.lists.splice(index, 1);
          }, function() {
            console.log("Ignore delete request.");
          })
      };

<<<<<<< HEAD
      self.addListItem = function(list, newItem) {
=======
      self.addListItem = function(list) {
        var newItem = list.newItem;
>>>>>>> fb032ccf4f8c41fe6605f1f59d48fe3d8bf17d95
        newItem.isSelected = false;
        newItem.completed = false;
        newItem.editingTitle = false;
        newItem.editingDesc = false;
        list.isNew = false;
        var newItemCopy = angular.copy(newItem);
        console.log(newItemCopy);
        list.listItems.push(newItemCopy);
        list.newItem.title = undefined;
        list.newItem.description = undefined;
      };

      self.toggleEdit = function(num, list, listItem) {
        console.log("Called toggleEdit");
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

      self.updateListItem = function(list, listItem) {
        console.log("new");
        console.log(listItem);
        var listIndex = self.lists.indexOf(list);
        var itemIndex = list.listItems.indexOf(listItem);
        console.log("old");
        console.log(self.lists[listIndex].listItems[itemIndex]);
        if (listItem.title === "") {
          console.log("title");
          listItem.title = self.lists[listIndex].listItems[itemIndex].title;
        }
        if (listItem.description === "") {
          console.log("desc");
          listItem.description = self.lists[listIndex].listItems[itemIndex].description;
        }
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
