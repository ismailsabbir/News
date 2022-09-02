function categories() {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => categoriesdisplay(data.data.news_category));
}
function categoriesdisplay(categories) {
  const newsContainer = document.getElementById("news-container");
  for (const categori of categories) {
    console.log(categori);
    const newele = document.createElement("div");
    newele.classList.add("col");
    newele.classList.add("col-3");
    newele.classList.add("col-sm-3");
    newele.classList.add("col-md-2");
    newele.classList.add("col-lg-1");

    newele.innerHTML = `
    <p>${categori.category_name}</p>
    `;

    newsContainer.appendChild(newele);
  }
}
categories();
