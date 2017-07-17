class customConfirmModalService {
  constructor(ngBootbox) {
    'ngInject';
    var self = this;
    self.customDeleteConfirm = function(title) {
      var options = {
        message: "Are you sure you'd like to delete the '" + title + "' list?",
        title: "Delete?",
        className: 'delete-modal',
        buttons: [{
          label: 'Yes',
          value: 'yes'
        }, {
          label: 'No',
          value: 'yes'
        }],
        callback: function(result) { console.log(result); }
      }
      ngBootbox.customDialog(options);
    }
  }
}

export default customConfirmModalService;
