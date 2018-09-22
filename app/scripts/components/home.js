"use strict";

const home = {
  template: `
  <!-- Header and navigation -->
  <header class="home">
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
        <p class="slogan_title">denero</p>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    <!-- About Section -->
    <section class="about" id="about">
      <div class="about_container">
        <h1 class="about_title">Fresh Ingrediants. Great Taste. Top Chefs.</h1>
        <p class="about_paragraph">
          Fresh Ingrediants from all of our local farms that bring nutritious benefits and great tasting food that will leave your taste buds wanting more. Our award winning chefs have made exsquisite delicious cuisine that you can try here at Denero.
        </p>
      </div>

      <div class="about_imges">
        <img class="img_1" src="app/img/img_2.jpg" alt="">
      </div>
    </section>

    <!-- Menu Section -->
    <section class="menu_section">
      <div class="menu_title">
        <h1>Our Menu</h1>
      </div>
      <div class="menu_classes">
        <a href="#" class="menu_class">Breakfast</a>
        <a href="#" class="menu_class">lunch</a>
        <a href="#" class="menu_class">Dinner</a>
        <a href="#" class="menu_class">Happy Hour</a>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature_title">
        <h1>Features</h1>
      </div>

      <div class="lunch_specials feature">
        <h2>Donna's Lunch Specials</h2>
        <p>Five different entrees available Monday to Friday for just 9.95 each.</p>
      </div>

      <div class="happy_hour feature">
        <h2>Happy Hour</h2>
        <p>Happy Hour starts everyday from 3:00pm - 6:00pm, only availiable at the bar and lounge. No reservations are accepted.</p>
        <p>Enjoy select Cocktail Hour food items, $5 feature drinks, and our famous $1 feature popcorn shrimp.</p>
      </div>

      <div class="wine_dine feature">
        <h2>Wine and Dine</h2>
        <p>Enjoy a five course dinner at a reasonable price. Its availiable seven days a week after 3:00pm. Ask your server for more details.</p>
      </div>
    </section>

    <!-- Private Dining Section -->
    <section class="private_dining">
      <h1 class="private_dining--title">
        Private Dining
      </h1>
      <p class="private_dining--sub">
        Your Event, Your Way
      </p>
      <p class="private_dining--p">
        A brunch for 10 or a dinner for 340, Denero is the perfect venue for your next gathering. Choose from a selection of our private dining halls, lounge spaces, or reception areas.
      </p>
    </section>

    <!-- Private Areas -->
    <section class="private_area--1">
      <div class="lounge-img">
        <img class="img" src="app/img/loung-1.jpg" alt="">
      </div>

      <div class="lounge_description">
        <h2>Blue Lounge</h2>
        <p>Semi-private room with multiple arrangements. It includes special group menus for up to 55 people.</p>
      </div>
    </section>

    <section class="private_area--2">
      <div class="lounge-img">
        <img class="img" src="app/img/lounge-2.jpg" alt="">
      </div>

      <div class="lounge_description">
        <h2>The Oak Room</h2>
        <p>Fully private room with semi-private arrangements. It includes special group menus for up to 94 people.</p>
      </div>
    </section>

    <section class="private_area--3">
      <div class="lounge-img">
        <img class="img" src="app/img/lounge-3.jpg" alt="">
      </div>

      <div class="lounge_description">
        <h2>Full Buy-Out</h2>
        <p>You can have the entire restaurant for your next even! It includes special group menus for up to 340 people.</p>
      </div>
    </section> 
  </main>
  `,

  controller: function() {
    const vm = this;

    vm.slideMenu = () => document.getElementById("nav_items--slide").style.display = "block";

    vm.closeMenu = () => document.getElementById("nav_items--slide").style.display = "none";
  }
}

angular
  .module("app")
  .component("home", home);