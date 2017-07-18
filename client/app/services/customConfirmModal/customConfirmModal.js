class customConfirmModalService {
  constructor($ngBootbox) {
    'ngInject';
    var self = this;
    self.response = undefined;
    self.customDeleteConfirm = function(title) {
      var options = {
        message: "Are you sure you'd like to delete the '" + title + "' list?",
        title: "Delete?",
        className: 'delete-modal',
        buttons: [{
          label: 'Yes',
          value: 'yes',
          callBack: function(result) {
          }
        }, {
          label: 'No',
          value: 'yes',
          callBack: function(result) {
          }
        }]
      }
      $ngBootbox.customDialog(options);
    }
  }
}

export default customConfirmModalService;
