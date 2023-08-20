export function onAdvanceFilter(elements) {
  const onFilter = () => {
    const filterContainer = document.querySelector("#filter-container");

    if (filterContainer?.classList.contains("hidden")) {
      filterContainer.classList.remove("hidden");
    } else {
      filterContainer?.classList.add("hidden");
    }
  };

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", onFilter);
  }
}
