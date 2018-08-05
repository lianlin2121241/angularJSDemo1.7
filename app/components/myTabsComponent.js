'use strict';

app.component("myTabs", {
    templateUrl: 'app/templates/myTabsTemplate.html',
    transclude: true,
    controller: ['$scope', function MyTabsController($scope) {
        var panes = this.panes = [];

        this.select = function (pane) {
            angular.forEach(panes, function (pane) {
                pane.selected = false;
            });
            pane.selected = true;
        };

        this.addPane = function (pane) {
            if (panes.length === 0) {
                this.select(pane);
            }
            panes.push(pane);
        };
    }]
})