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
        <li><a href="#" class="menu_btn"><i class="fas fa-bars"></i></a></li>
      </ul>
    </nav>

    <div class="slogan_container">
      <div class="slogan">
        <p class="slogan_title">denero</p>
      </div>
    </div>

  </header>

  <section class="form__section">

    <div class="form__section--title"><h1>Make Your Reservation</h1></div>
    <!-- Form Section -->
    <form class="form">

      <input type="text" class="form--input" placeholder="First Name">
      <input type="text" class="form--input" placeholder="Last Name">
      <input type="email" class="form--input" placeholder="Email">
      <input type="text" class="form--input" placeholder="Company Name">
    
      <button class="form--button">Send</button>

    </form>
  </section>
  `

  
}

angular
  .module("app")
  .component("reservations", reservations);