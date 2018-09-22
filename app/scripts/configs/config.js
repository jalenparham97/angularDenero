"use strict";
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