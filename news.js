//-------- arrow function ------------
const categories = () => {
  //------------ data fetch and  try catch -----------
  try {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => categoriesdisplay(data.data.news_category));
  } catch (err) {
    alert(err);
  }
};

// -------------All Categories display --------------
//-------------Arrow function----------
const categoriesdisplay = (categories) => {
  const newsContainer = document.getElementById("news-container");
  for (const categori of categories) {
    //console.log(categori);
    const newele = document.createElement("div");
    newele.classList.add("col");
    newele.classList.add("col-3");
    newele.classList.add("col-sm-3");
    newele.classList.add("col-md-2");
    newele.classList.add("col-lg-1");
    newele.innerHTML = `
    <p onclick="newsload('${categori.category_id}','${categori.category_name}')">${categori.category_name}</p>
    `;
    newsContainer.appendChild(newele);
    //------------------spainer end----------------
    document.getElementById("loder").style.display = "none";
  }
};

categories();
//------------spainer start ------------------
document.getElementById("loder").style.display = "block";

// -------------All newspaper load ---------------
//-------------arrow function-------------
const bydefaultnews = () => {
  //------------data fetch and try catch--------
  try {
    const url = `https://openapi.programming-hero.com/api/news/category/08`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => defaultnewsdisplay(data.data));
  } catch (err) {
    console.log(err);
  }
};

//---------------All news display -------------
function defaultnewsdisplay(defaults) {
  const newsContainer = document.getElementById("news-containerall");
  const number = defaults.length;
  document.getElementById("num").innerText = number;
  document.getElementById("types").innerText = "News All";
  newsContainer.innerHTML = " ";
  for (const news of defaults) {
    //console.log(news);
    const newelement = document.createElement("div");
    newelement.classList.add("card");
    newelement.innerHTML = `
    <div class="row g-0 full">
    <div class="col-md-2">
      <img src="${
        news.thumbnail_url
      }" class="img-fluid rounded-start news-img" alt="..." />
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">
        ${news.details.slice(0, 200)}....
        </p>

        <div class="news-foot">
        <div class="footfirst">
          <img src="${news.author.img}" alt="" />
          <div class="first-text">
            <h5>${news.author.name ? news.author.name : "not found"}</h5>
            <p>${
              news.author.published_date
                ? news.author.published_date
                : "Not found"
            }</p>
          </div>
        </div>
        <div class="mid">
          <i class="fa-regular fa-eye"></i>
          <h3>${news.total_view ? news.total_view : "not found"}</h3>
        </div>
        <div class="star-icon">
          <i class="fa-solid fa-star-sharp-half-stroke"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>

        </div>
        <div class="detals">
        <button onclick="loaddetalinfo('${
          news._id
        }')" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      </div>
    </div>
  </div>
    `;
    newsContainer.appendChild(newelement);
    // ---------------spainer ending -----------------
    document.getElementById("loder").style.display = "none";
  }
}
bydefaultnews();

// ----------------spainer start -------------
document.getElementById("loder").style.display = "block";

//---------------Categories wise news load ------------------
function newsload(id, name) {
  try {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => newsloaddetal(data.data, name));
  } catch (err) {
    console.log(err);
  }
}
//--------------categories wise news display -------------
function newsloaddetal(newss, name) {
  const newsContainer = document.getElementById("news-containerall");
  const number = newss.length;
  document.getElementById("num").innerText = number;
  document.getElementById("types").innerText = name;

  newsContainer.innerHTML = " ";
  for (const news of newss) {
    //console.log(news);
    const newelement = document.createElement("div");
    newelement.classList.add("card");
    newelement.innerHTML = `
    <div class="row g-0 full">
    <div class="col-md-2">
      <img src="${
        news.thumbnail_url
      }" class="img-fluid rounded-start news-img" alt="..." />
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">
        ${news.details.slice(0, 200)}....
        </p>

        <div class="news-foot">
        <div class="footfirst">
          <img src="${news.author.img}" alt="" />
          <div class="first-text">
            <h5>${news.author.name ? news.author.name : "Not found"}</h5>
            <p>${
              news.author.published_date
                ? news.author.published_date
                : "not found"
            }</p>
          </div>
        </div>
        <div class="mid">
          <i class="fa-regular fa-eye"></i>
          <h3>${news.total_view ? news.total_view : "not found"}</h3>
        </div>
        <div class="star-icon">
          <i class="fa-solid fa-star-sharp-half-stroke"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>

        </div>
        <div class="detals">
        <button onclick="loaddetalinfo('${
          news._id
        }')" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-arrow-right"></i></button>
          
         
        </div>
      </div>

      </div>
    </div>
  </div>
    `;
    newsContainer.appendChild(newelement);
  }
}
// ------------- load detals information---------------
function loaddetalinfo(id) {
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => modaldetals(data.data));
}
//-----------------display detals information------------
function modaldetals(detals) {
  for (const detal of detals) {
    document.getElementById("exampleModalLabel").innerText = `${detal.title}`;
    const modalbody = document.getElementById("modal-body");
    modalbody.innerHTML = `
    <img class="img-fluid w-100" src="${detal.image_url}" alt="">
    <p>${detal.details}</p>
    <p>${detal.author.published_date}</p>
  `;
  }
}
