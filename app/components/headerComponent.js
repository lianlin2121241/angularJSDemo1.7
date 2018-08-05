'use strict';

app.component("header",{
    // template:'<div>{{headerTitle}}</div>',
    templateUrl:'app/templates/headerTemplate.html',
    bindings:{
        headerTitle:'@'
    },
    controller:function($scope){
        console.log($scope.vm);
        // console.log($ctrl);
        console.log(this.headerTitle);

        this.$onInit=function(){
            console.log("初始化");
            console.log(this.headerTitle);
        }

        this.$onChanges=function(changesObj){
            console.log("onChanges");
        }

        this.$onDestroy=function(){
            console.log("onDestroy");
        }

        this.$doCheck=function(){
            console.log("doCheck");
        }

        this.$postLink=function(){
            console.log("postLink");
        }
    }
})