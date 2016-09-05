"use strict";

(function() {
    var app = angular.module("myCalc", []);

    app.service("myCalcService", function() {
        this.add = function(a, b) {
            return a + b;
        };

        this.substract = function(a, b) {
            return a - b;
        };
    });

    //myCalcService passed to the controller is called dependency injection
    app.controller("myCalcController", function(myCalcService) {
        var vm = this;

        vm.add = function (a, b) {
            vm.result = myCalcService.add(parseInt(a), parseInt(b));
        };

        vm.substract = function(a, b) {
            vm.result = myCalcService.substract(a, b);
        };

    });

}())