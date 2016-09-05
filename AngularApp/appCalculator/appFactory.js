"use strict";

(function() {
    var app = angular.module("myCalc", []);

    app.factory("myCalcService", function () {
        var factory = {};
        factory.add = function (a, b) {
            return a + b;
        };

        factory.substract = function (a, b) {
            return a - b;
        };

        return factory;
    });

    //myCalcService passed to the controller is called dependency injection
    app.controller("myCalcController", function (myCalcService) {
        var vm = this;

        vm.add = function (a, b) {
            vm.result = myCalcService.add(parseInt(a), parseInt(b));
        };

        vm.substract = function (a, b) {
            vm.result = myCalcService.substract(a, b);
        };

    });
}());