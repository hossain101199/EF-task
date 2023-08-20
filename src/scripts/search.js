import { onAdvanceFilter } from "./filter";

export function onAdvanceSearch(element) {
  const hideSecondaryNavbar = () => {
    const secondaryNavbar = document.querySelector("#search-and-secondary-nav");
    secondaryNavbar.innerHTML = ``;
    secondaryNavbar.innerHTML = `      
    <div id="search-container">
    <div id="search-br-container">
      <input
        id="search-br"
        type="text"
        placeholder="Minecraft, RPG, multiplayer..."
      />
      <p>Advanced search</p>
    </div>
    <button class="x-button">
      <img src="/x.svg" alt="" />
    </button>
  </div>
  `;
    offAdvanceSearch(document.querySelector(".x-button"));
  };
  element.addEventListener("click", () => hideSecondaryNavbar());
}

export const hideSearch = () => {
  const secondaryNavbar = document.querySelector("#search-and-secondary-nav");
  secondaryNavbar.innerHTML = ``;
  secondaryNavbar.innerHTML = `
<div id="secondary-navbar">
<button class="secondary-nav-button">
  <img src="/computer.svg" alt="" />Pc
  <img src="/arrow.svg" alt="" />
</button>
<button class="secondary-nav-button">
  <img src="/playstation.svg" alt="" />Playstation
  <img src="/arrow.svg" alt="" />
</button>
<button class="secondary-nav-button">
  <img src="/xbox.svg" alt="" />Xbox
  <img src="/arrow.svg" alt="" />
</button>
<button class="secondary-nav-button">
  <img src="/nintendo-switch.svg" alt="" />Nintendo
  <img src="/arrow.svg" alt="" />
</button>
<button class="search-button">
  <img src="/search.svg" alt="" />
</button>
</div>
<div id="filter-container" class="hidden">
<div class="section-title-bar">
  <p>Platforms</p>
  <button class="">View all</button>
</div>

<div id="filter-platforms">
  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Steam
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Ubisoft Connect
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    EA App
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Battle.net
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Rockstar
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    GOG.com
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Microsoft Store
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Epic
  </button>
</div>

<div class="section-title-bar">
  <p>Prepaid cards</p>
  <button class="">View all</button>
</div>

<div id="filter-prepaid-cards">
  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Steam Gift Cards
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    IG Gift Cards
  </button>

  <button>
    <img src="/Steam_icon_logo.svg.png" alt="" />
    Blizzard Gift Cards
  </button>
</div>
</div>
  `;
  onAdvanceSearch(document.querySelector(".search-button"));
  onAdvanceFilter(document.getElementsByClassName("secondary-nav-button"));
};

export function offAdvanceSearch(element) {
  element.addEventListener("click", () => hideSearch());
}
