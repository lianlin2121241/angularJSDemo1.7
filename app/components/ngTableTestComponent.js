'use strict';

app.component("ngtableTest", {
    templateUrl: 'app/templates/ngTableTestTemplate.html',
    transclude: true,
    controller: ['$scope','apifactory','NgTableParams', function ($scope,apifactory,NgTableParams) {
        
    }]
})