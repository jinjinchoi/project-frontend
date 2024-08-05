// 검색창 입력시 이동하게 검색페이지로

document.querySelector(".banner-searchBar-container").addEventListener("submit", (e : SubmitEvent) => {
    e.preventDefault();
    
    const inputData = document.querySelector(".banner-search-input") as HTMLInputElement
    const word = inputData.value

    window.location.href = `../search/search.html?word=${word}`;
})