'use strict';

app.component('heroDetail',{
    templateUrl:'app/templates/heroDetailTemplate.html',
    bindings:{
        hero:'<',
        onDelete:'&',
        onUpdate:'&'
    },
    controller:function(){
        var ctrl=this;
        ctrl.delete=function(){
            ctrl.onDelete({hero:ctrl.hero});
        };

        ctrl.update=function(prop,value){
            ctrl.onUpdate({
                hero:ctrl.hero,
                prop:prop,
                value:value
            })
        }

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