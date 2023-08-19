import { onAdvanceSearch } from "./src/scripts/search";
import "./src/styles/main.scss";

document.querySelector("#app").innerHTML = `
    <div>
      
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

onAdvanceSearch(document.querySelector(".search-button"));
