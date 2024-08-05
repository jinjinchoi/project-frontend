document.querySelector(".banner-searchBar-container").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputData = document.querySelector(".banner-search-input");
    const word = inputData.value;
    window.location.href = `../search/search.html?word=${word}`;
});
