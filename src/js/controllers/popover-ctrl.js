angular.module('RDash')
  .controller('popoverCtrl', ['$scope', popoverCtrl]);
function popoverCtrl() {
  $("[data-toggle='popover']").popover();
}
