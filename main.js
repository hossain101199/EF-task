import { hideSearch } from "./src/scripts/search";
import "./src/styles/main.scss";

document.querySelector("#app").innerHTML = `
<div>
      <nav id="navbar">
        <div id="links-container">
          <img id="logo" src="/logo.webp" alt="Logo" />

          <div id="nav-content">
            <ul id="navigation-links">
              <li><a href="#">Trending</a></li>
              <li><a href="#">Pre-orders</a></li>
              <li><a href="#">Upcoming</a></li>
              <li><a href="#">Support 24/7</a></li>
            </ul>

            <div id="search-and-secondary-nav"></div>
          </div>

          <div id="cart-and-user-container">
            <img class="icon" src="/cart.svg" alt="cart" />
            <img class="icon" src="/user-svgrepo-com.svg" alt="User" />
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

      <section class="container" id="trending-products">
        <div id="trending-products-header">
          <h2>Trending</h2>
          <button class="view-all-button">View all</button>
        </div>
        <div class="products">
          <div class="products-card">
            <div class="card-img-top">
              <img src="/maxresdefault.jpg" alt="Product Image" />
              <div class="discount-badge">
                <div class="discount-shape"></div>
                <p>-25%</p>
              </div>
            </div>
            <div class="card-details">
              <p>Product Description</p>
              <p class="product-price">73.89 €</p>
            </div>
          </div>

          <div class="products-card">
            <div class="card-img-top">
              <img src="/maxresdefault.jpg" alt="Product Image" />
              <div class="discount-badge">
                <div class="discount-shape"></div>
                <p>-25%</p>
              </div>
            </div>
            <div class="card-details">
              <p>Product Description</p>
              <p class="product-price">73.89 €</p>
            </div>
          </div>

          <div class="products-card">
            <div class="card-img-top">
              <img src="/maxresdefault.jpg" alt="Product Image" />
              <div class="discount-badge">
                <div class="discount-shape"></div>
                <p>-25%</p>
              </div>
            </div>
            <div class="card-details">
              <p>Product Description</p>
              <p class="product-price">73.89 €</p>
            </div>
          </div>
        </div>
      </section>
    </div>
`;

hideSearch();
