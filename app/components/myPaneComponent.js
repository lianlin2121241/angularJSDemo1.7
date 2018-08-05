'use strict';

app.component("myPane", {
    templateUrl: 'app/templates/myPaneTemplate.html',
    require: {
        tabsCtrl: '^myTabs'
    },
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: function () {
        this.$onInit = function () {
            this.tabsCtrl.addPane(this);
            console.log(this);
        };
    }
})