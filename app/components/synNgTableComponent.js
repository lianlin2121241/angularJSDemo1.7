'use strict';

app.component("synNgTable", {
    templateUrl: 'app/templates/synNgTableTemplate.html',
    transclude: true,
    controller: ['$scope','apifactory','NgTableParams', function ($scope,apifactory,NgTableParams) {

        var ctrl=this;
        this.paginationParam={
            currentPage:1,
            itemsPerPage:10,
            totalItems:0
        }

        this.tableParams = new NgTableParams({}, {
            counts:[],
            getData: function (params) {
                return apifactory.getIssues.query({
                    page: ctrl.paginationParam.currentPage,
                    per_page: ctrl.paginationParam.itemsPerPage,

                    state: 'all',
                    username: 'esvit',
                    repo: 'ng-table'
                }, function (data, headersGetter) {
                    var headers = headersGetter(),
                        pages = headers['link'].split(', '),
                        totalPages = 1;

                    // get total pages count
                    angular.forEach(pages, function (page) {
                        var parts = page.split(' rel=');
                        if (parts[1] == '"last"') {
                            totalPages = parseInt(parts[0].match(/page=(\d+)/)[1], 10);
                        }
                        if (totalPages == 1 && parts[1] == '"prev"') { // if last page
                            totalPages = parseInt(parts[0].match(/page=(\d+)/)[1], 10) + 1;
                        }
                    });
                    params.total(totalPages * ctrl.paginationParam.itemsPerPage);
                    ctrl.paginationParam.totalItems=totalPages * ctrl.paginationParam.itemsPerPage;
                    return data;
                }).$promise;
            }
        });

        this.loadData=function(currentPage,itemsPerPage){
            this.paginationParam.currentPage=currentPage;
            this.paginationParam.itemsPerPage=itemsPerPage;
            console.log(currentPage,itemsPerPage);
            this.tableParams.reload();
        }
    }]
})