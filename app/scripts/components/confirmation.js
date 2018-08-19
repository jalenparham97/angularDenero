"use strict";

const confirmation = {
  template: `

  <section class="confirm">

    <h3 class="confirm--title">thank you for your reservation</h3>

    <p class="confirmation">Name: {{ $ctrl.reservation.firstName }} {{ $ctrl.reservation.lastName }}</p>
    <p class="confirmation">Email: {{ $ctrl.reservation.email }}</p>
    <p class="confirmation">Company: {{ $ctrl.reservation.company }}</p>
    <p class="confirmation">Party Size: {{ $ctrl.reservation.party }}</p>

    <div>
      <button ng-click="$ctrl.locationConfirm()">Confirm Reservation</button>
      <button ng-click="$ctrl.locationReservation()">Edit Reservation</button>
      <p class="confirm--message">When you confirm your reservation you will recieve a confirmation email.</p>
    </div>
    
  </section>

  `,

  controller: ["ReservationService", "$location", function(ReservationService, $location) {
    const vm = this;

    vm.reservation = ReservationService.getReservation();

    vm.locationReservation = () => $location.url("/reservations");
    vm.locationConfirm = () => $location.url("/home");
  }]

  
}

angular
  .module("app")
  .component("confirmation", confirmation);