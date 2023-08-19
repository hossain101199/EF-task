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

export function offAdvanceSearch(element) {
  const hideSearch = () => {
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
    `;
    onAdvanceSearch(document.querySelector(".search-button"));
  };
  element.addEventListener("click", () => hideSearch());
}
