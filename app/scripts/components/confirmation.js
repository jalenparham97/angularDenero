"use strict";

const confirmation = {
  template: `
    <header class="reservation__header">

    <nav class="nav">
      <div class="branding">
        <a href="#" class="logo">Denero</a>
      </div>

      <ul class="nav_items">
        <li><a href="#!/home" class="nav_item">Home</a></li>
        <li><a href="#!/reservations" class="nav_item">Reservations</a></li>
        <li><a href="#!/menu" class="nav_item">Menu</a></li>
        <li><a href="#contact" class="nav_item btn">Contact</a></li>
        <li><a href="#" class="menu_btn"><i class="fas fa-bars"></i></a></li>
      </ul>
    </nav>

    <div class="slogan_container">
      <div class="slogan">
        <p class="slogan_title">Thank You</p>
      </div>
    </div>

  </header>

  <section class="confirm">

    <p>Name: {{ $ctrl.reservation.firstName }} {{ $ctrl.reservation.lastName }}</p>
    <p>Email: {{ $ctrl.reservation.email }}</p>
    <p>Company: {{ $ctrl.reservation.company }}</p>
    <p>Party Size: {{ $ctrl.reservation.party }}</p>

    <div>
      <button class="confirm__buttton--confirm">Confirm Reservation</button>
      <button class="confirm__buttton--edit">Edit Reservation</button>
    </div>
    
  </section>

  `,

  controller: ["ReservationService", "$location", function(ReservationService, $location) {
    const vm = this;

    vm.reservation = ReservationService.getReservation();

    vm.location = () => $location.url("/reservations")
  }]

  
}

angular
  .module("app")
  .component("confirmation", confirmation);