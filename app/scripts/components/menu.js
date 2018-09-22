"use strict";

const menu = {
  template: `
  <!-- Header and navigation -->
  <header class="menu__header">
    <nav class="nav">
      <div class="branding">
        <a href="#" class="logo">Denero</a>
      </div>
  
      <ul class="nav_items">
        <li><a href="#!/home" class="nav_item">Home</a></li>
        <li><a href="#!/reservations" class="nav_item">Reservations</a></li>
        <li><a href="#!/menu" class="nav_item">Menu</a></li>
        <li><a href="#contact" class="nav_item btn">Contact</a></li>
        <li><a href="#" class="menu_btn" id="menu_btn"><i class="fas fa-bars"></i></a></li>
      </ul>
    </nav>

    <div class="slogan_container">
      <div class="slogan">
        <p class="slogan_title">Menu</p>
      </div>
    </div>
  </header>

  <main class="menu__container">
    <section class="menu">
      <p class="menu__title--section">Menu</p>
      <section class="breakfast menu__section">
        <h4>Breakfast</h4>
        <ul>
          <li>Pancake Lagoon Breakfast</li>
          <li>Glazed French Toast</li>
          <li>Handmade Eggs Benedict</li>
          <li>Toast and Bacon</li>
          <li>Sausage, Egg, Cheese Burrito</li>
        </ul>
      </section>

      <section class="lunch menu__section">
        <h4>Lunch</h4>
        <ul>
          <li>Big BLT</li>
          <li>Classic Chicken</li>
          <li>BBQ Chicken Salad</li>
          <li>Crunchy BBQ Burger</li>
          <li>Bacon Cheese Burger</li>
        </ul>
      </section>

      <section class="dinner menu__section">
        <h4>Dinner</h4>
        <ul>
          <li>Bourbon Street Chicken</li>
          <li>Cedar Grilled Chicken</li>
          <li>Mustard Glazed Salmon</li>
          <li>Cheese Chicken Penne</li>
          <li>Shrimp Wonton Stirfry</li>
        </ul>
      </section>

      <section class="happy__hour menu__section">
        <h4>Happy Hour</h4>
        <ul>
          <li>Strawberry Lemonade Sangria</li>
          <li>Pinnaple Express</li>
          <li>The Manhattan Spice Edition</li>
          <li>Welch's Coctail</li>
          <li>The Ultimate Bloody Denero</li>
        </ul>
      </section>
    </section>
  </main>
  `,
}

angular
  .module("app")
  .component("menu", menu);