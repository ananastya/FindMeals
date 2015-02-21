var app = angular.module('app', []);
app.controller("tabsCtrl", ["$scope", function($scope) {
    this.activeTab=0;
    this.tabs = [
        {
            name: 'первая',
            items: [
                {id: 1,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 2,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 3,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 4,address: 'ул.Ленина, 52',phone: '89232983456'},
            ]
        },
        {
            name: 'вторая',
            items: [
                {id: 5,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 6,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 7,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 8,address: 'ул.Ленина, 52',phone: '89232983456'},
            ]
        },
        {
            name: 'третья',
            items: [
                {id: 9,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 10,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 11,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 12,address: 'ул.Ленина, 52',phone: '89232983456'},
            ]
        },
        {
            name: 'четвертая',
            items: [
                {id: 13,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 14,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 15,address: 'ул.Ленина, 52',phone: '89232983456'},
                {id: 16,address: 'ул.Ленина, 52',phone: '89232983456'},
            ]
        }

    ]
    this.moveItem = function(itemIndex, tabIndex){
        var removed = this.tabs[this.activeTab].items.splice(itemIndex,1);
        console.log(removed);
        this.tabs[tabIndex].items = this.tabs[tabIndex].items.concat(removed);
    }
}])