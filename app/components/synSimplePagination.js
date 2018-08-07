'use strict';

app.component("synSimplePagination", {
    template: `
        <div>
            <button ng-click="$ctrl.changePage('prev')" ng-disabled="$ctrl.currentPage==1"><<</button>
            {{$ctrl.currentPage}}/{{$ctrl.totalPage}}
            <button ng-click="$ctrl.changePage('next')" ng-disabled="$ctrl.currentPage==$ctrl.totalPage">>></button>
        </div>
    `,
    bindings:{
        currentPage:"<",
        itemsPerPage:"<",
        totalItems:"<",
        loadFun:"&"
    },
    controller: ['$scope', function ($scope) {
        var ctrl=this;

        var timerHandle=null;
        ctrl.changePage=function(type){
            if(type=="prev"){
                ctrl.currentPage-=1;
            }else if(type=="next"){
                ctrl.currentPage+=1;
            }
            if(timerHandle){
                clearTimeout(timerHandle);
                timerHandle=null;
            }
            timerHandle=setTimeout(function(){
                ctrl.loadFun({
                    currentPage:ctrl.currentPage,
                    itemsPerPage:ctrl.itemsPerPage
                })
            },200)
        }

        ctrl.$onInit=function(){
            console.log("初始化");
            ctrl.totalPage=Math.floor(ctrl.totalItems/ctrl.itemsPerPage);
        }

        ctrl.$onChanges=function(changesObj){
            ctrl.totalPage=Math.floor(ctrl.totalItems/ctrl.itemsPerPage);
        }

        ctrl.$onDestroy=function(){
            console.log("onDestroy");
        }
    }]
})