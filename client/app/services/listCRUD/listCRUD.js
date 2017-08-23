class listCRUDService {
  constructor($http, $q) {
    'ngInject';

    //INIT DEPENDENCIES
    this.$http = $http;
    this.$q = $q;
  }

  getAllListData() {
    const defer = this.$q.defer();
    this.$http.get('http://www.todolist.com:8081/mvcapp/list/all')
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
