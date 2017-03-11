angular
    .module('RDash')
    .directive('matchData', matchData);

function matchData() {
    var directive = {
        transclude: true,
        scope: true,
        template: '<table class="table"><thead ><tr ><th ng-repeat="item in i.filed"><button class="btn btn-sm btn-default">{{item}}</button></th></tr></thead>'+
                '<tbody><tr ng-repeat="item in i.commodities"><td ng-repeat="each in i.filed">{{item[each]}}</td></tr></tbody></table>',
        restrict: 'E'
    };
    return directive;
};
