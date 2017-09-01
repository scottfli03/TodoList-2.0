class listCRUDService {
  constructor($http, $q) {
    'ngInject';

    //INIT DEPENDENCIES
    this.$http = $http;
    this.$q = $q;
  }

  //
  // Methods for Lists
  //
  getAllListData() {
    const defer = this.$q.defer();
    this.$http.get('http://www.mvcapp.com:8081/v1/lists')
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  getListData(listID) {
    const defer = this.$q.defer();
    this.$http.get('http://www.mvcapp.com:8081/v1/'+listID)
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  deleteList(listID) {
    const defer = this.$q.defer();
    this.$http.delete('http://www.mvcapp.com:8081/v1/'+listID)
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  updateList(list) {
    const defer = this.$q.defer();
    this.$http.patch('http://www.mvcapp.com:8081/v1/lists', list)
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  addList(list) {
    const defer = this.$q.defer();
    this.$http.post('http://www.mvcapp.com:8081/v1/lists',
                    JSON.stringify(list),
                    {transformResponse: function(response)
                             {
                                      return response;
                             }})
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  //
  // Methods for ListItems
  //
  getListItemData(itemID) {
    const defer = this.$q.defer();
    this.$http.get('http://www.mvcapp.com:8081/v1/listitems/'+itemID)
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  getItemsInList(listID) {
    const defer = this.$q.defer();
    this.$http.get('http://www.mvcapp.com:8081/v1/'+listID+'/listitems/')
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  addListItem(item, listID) {
    const defer = this.$q.defer();
    this.$http.post('http://www.mvcapp.com:8081/v1/'+listID, item,
                    {transformResponse: function(response)
                      {
                        return response;
                    }})
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  deleteListItem(itemID) {
    const defer = this.$q.defer();
    this.$http.delete('http://www.mvcapp.com:8081/v1/listitems/'+itemID)
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }

  updateListItem(listItem, listID) {
    const defer = this.$q.defer();
    this.$http.patch('http://www.mvcapp.com:8081/v1/'+listID+'/listitems/', listItem)
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }
}

export default listCRUDService;
