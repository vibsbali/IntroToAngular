"use strict";
(function () {
    var app = angular.module("myApp", []);

    app.controller("DepartmentController", function($http) {
        var vm = this;

        vm.getDepartments = function() {
            $http.get("/api/department")
                .then(function(response) {
                    vm.departments = response.data;
                });
        };
    });


    app.controller("EmployeeController", function ($http) {
        var vm = this;

        vm.getEmployees = function (departmentId) {
            alert(departmentId);
            $http.get("/api/employee/GetEmployeesByDepartmentId?departmentId="+departmentId)
                .then(function (response) {
                    vm.employees = response.data;
                });
        };
    });
}())