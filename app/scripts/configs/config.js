"use strict";
/* How to use a route: .config with the name of the route, then a function
that takes the named route as a parameter.*/
angular
  .module("app")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/reservations", {
        template: `
        <reservations></reservations>
        `
    })
    .when("/menu", {
        template: `
        <menu></menu>
        `
    })
    .when("/confirm", {
        template: `
        <confirmation></confirmation>
        `
    })
    .when("/home", {
        template: `
        <home></home>
        `
    })
    .otherwise({
        redirectTo: "/home"
    })
  }])