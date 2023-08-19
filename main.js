import "./src/styles/main.scss";

document.querySelector("#app").innerHTML = `
<div>
<nav id="navbar">
<div id="links-container">
  <img src="/logo.webp" alt="" />

  <ul id="navigation-links">
    <li><a href="#">Trending</a></li>
    <li><a href="#">Pre-orders</a></li>
    <li><a href="#">Upcoming</a></li>
    <li><a href="#">Support 24/7</a></li>
  </ul>

  <div id="cart-and-user-container">
    <img
      src="/conversation-svgrepo-com.svg"
      alt=""
      style="width: 35px; height: 35px; color: white"
    />
    <img
      src="/user-svgrepo-com.svg"
      alt=""
      style="width: 35px; height: 35px"
    />
  </div>
</div>
</nav>
<section id="hero-section">
<div class="background-container"></div>
<div id="hero-info">
  <div class="info-container container">
    <p class="days-badge">In 15 days</p>
    <h1>
      Starfield Digital Premium <br />
      Edition + Early Access <br />
    </h1>
    <div class="price-container">
      <div class="discount-badge">
        <div class="discount-shape"></div>
        <p>-25%</p>
      </div>
      <span class="price">73.89 €</span>
    </div>
  </div>
</div>
</section>

</div>
`;

// setupCounter(document.querySelector("#counter"));
