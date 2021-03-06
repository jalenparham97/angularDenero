"use strict";

const reservations = {
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
        <li><a href="" class="menu_btn" ng-click="$ctrl.slideMenu()"><i class="fas fa-bars"></i></a></li>
      </ul>
    </nav>

    <nav class="nav--slide">
      <ul class="nav_items--slide" id="nav_items--slide">
        <div class="nav_items--li">
          <li><a href="#!/home" class="nav_item--slide">Home</a></li>
          <li><a href="#!/reservations" class="nav_item--slide">Reservations</a></li>
          <li><a href="#!/menu" class="nav_item--slide">Menu</a></li>
          <li><a href="#contact" class="nav_item--slide btn">Contact</a></li>
        </div>
        <div>
          <a href="" class="menu_btn-x" ng-click="$ctrl.closeMenu()"><i class="fas fa-times"></i></a>
        </div>
      </ul>
    </nav>

    <div class="slogan_container">
      <div class="slogan">
        <p class="slogan_title">Reserve</p>
      </div>
    </div>

  </header>

  <section class="form__section">

    <div class="form__section--title"><h1>Make Your Reservation</h1></div>
    <!-- Form Section -->
    <form class="form" ng-submit="$ctrl.setReservationInfo($ctrl.newReservation)">

      <input type="text" class="form--input" placeholder="First Name" ng-model="$ctrl.newReservation.firstName">
      <input type="text" class="form--input" placeholder="Last Name" ng-model="$ctrl.newReservation.lastName">
      <input type="email" class="form--input" placeholder="Email" ng-model="$ctrl.newReservation.email">
      <input type="text" class="form--input" placeholder="Company Name" ng-model="$ctrl.newReservation.company">
      <input type="number" class="form--input" placeholder="Party Size" ng-model="$ctrl.newReservation.party">
    
      <button class="form--button">Send</button>

    </form>
  </section>
  `,

  controller: ["ReservationService", "$location", function(ReservationService, $location) {
    const vm = this;
    
    vm.setReservationInfo = (newReservation) => {
      ReservationService.setReservation(newReservation);
      $location.url("/confirm");
    }

    vm.slideMenu = () => document.getElementById("nav_items--slide").style.display = "block";

    vm.closeMenu = () => document.getElementById("nav_items--slide").style.display = "none";
    
  }]

  
}

angular
  .module("app")
  .component("reservations", reservations);