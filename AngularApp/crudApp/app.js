"use strict";

(function() {
    var app = angular.module("myApp", []);

    app.factory("CrudEmployeeService", function($http) {
        var crudEmployee = {};

        crudEmployee.getEmployees = function() {
            var result = $http({
                method: 'GET',
                url: '/api/employee'
            }).then(function(response) {
                return response.data;
            });
            return result;
        };

        return crudEmployee;
    });

    app.controller("employeesController", function (CrudEmployeeService) {
        var vm = this;

        CrudEmployeeService.getEmployees().then(function (result) {
            vm.employees = result;
        },function(error) {
            vm.error = error;
        });
    });
}())