document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("categoryFilter");
    const searchBar = document.getElementById("searchBar");
    const resourceCards = document.querySelectorAll(".resource-card");

    function filterResources() {
        const selectedCategory = filterSelect.value;
        const searchText = searchBar.value.toLowerCase();

        resourceCards.forEach(card => {
            const category = card.getAttribute("data-category");
            const title = card.querySelector("h3").innerText.toLowerCase();
            if ((selectedCategory === "all" || category === selectedCategory) && title.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    filterSelect.addEventListener("change", filterResources);
    searchBar.addEventListener("keyup", filterResources);
});
