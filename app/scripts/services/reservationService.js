"use strict";

function ReservationService() {
  const vm = this;
  vm.reservation = null;

  vm.setReservation = newReservation => vm.reservation = angular.copy(newReservation);
    
  vm.getReservation = () => {return vm.reservation;}
}
angular
  .module("app")
  .service("ReservationService", ReservationService);