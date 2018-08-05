'use strict';

app.component("heroList",{
    templateUrl:'app/templates/heroListTemplate.html',
    controller:function(){
        var ctrl=this;
        ctrl.list=[
            {
                name:'superman',
                location:""
            },
            {
                name:"batman",
                location:"Wayne Manor"
            }
        ]

        ctrl.updateHero=function(hero,prop,value){
            hero[prop]=value;
        }

        ctrl.deleteHero=function(hero){
            var idx=ctrl.list.indexOf(hero);
            if(idx>=0){
                ctrl.list.splice(idx,1);
            }
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