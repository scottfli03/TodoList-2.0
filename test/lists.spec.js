describe('lists', function() {
  beforeEach(function() {
    module('app');
    module(function ($provide) {
    $provide.value('listCRUDService', serviceMock);
});
  })
  it('should find 1 to equal 1', function() {
    expect(1).toEqual(1);
  });
// // beforeEach(module('app'));
// // beforeEach(module('angular'));
// // beforeEach(module('ngStorage'));
// // beforeEach(module('jquery'));
// var ctrl;
// var $scope;
// var lists;
// beforeEach(function() {
//   lists = [
//     {"title":"Hygiene Products",
//     "isNew":false,
//     "listItems": [
//       {"title": "Soap",
//       "description": "Kind that smells good.",
//       "isSelected": true,
//       "completed": false},
//       {"title": "Comb",
//       "description": "A giant one!",
//       "isSelected": false,
//       "completed": false},
//       {"title": "Shaving cream",
//       "description": "Sensitive Skin",
//       "isSelected": false,
//       "completed": false}]},
//     {"title": "School Supplies",
//     "isNew": false,
//     "listItems": [
//       {"title": "Computer",
//       "description": "Laptop",
//       "isSelected": false,
//       "completed": false},
//       {"title": "Notebooks",
//       "description": "Just in case you take notes by hand.",
//       "isSelected": true,
//       "completed": true}]}
//   ];
// });
});
