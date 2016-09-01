"use strict";
(function () {
    var app = angular.module("myApp", []);

    app.controller("DepartmentController", function($http) {
        var vm = this;

        vm.getDepartments = function() {
            alert("Hello");
        };
    });
}())