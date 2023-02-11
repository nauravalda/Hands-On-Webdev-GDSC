// const BASE_URL = "https://www.themealdb.com/api";
// const API_KEY = "1";

// const searchBtn = document.querySelector('#search-button');
// searchBtn.addEventListener('click', searchMeal);

// const searchInput = document.querySelector('#search-input');
// searchInput.addEventListener("input", (event) => {
//   let value= event.target.value;
//   if (value && value.trim().length > 0) {
//     searchfunc(value);
//   }
//   else {
//   }

// });

// const searchMeal = async (keyword) => {
//   const response = await fetch(
//     `${BASE_URL}/json/v1/${API_KEY}/search.php?s=${keyword}`, {method: "get"});
//   const responseJson = await response.json();
//   if (responseJson.meals) {
//     return responseJson.meals;
//   }
//   return [];
// };

// const searchfunc = async (keyword) => {
//   const meals = await searchMeal(keyword);
//   const meal= meals[0];
// };

// function search() {
//   let listContainer = document.getElementById("boxes");
//   let list = listContainer.getElementsByTagName("p");
//   let searchInput = document.getElementById("search-input").value;
//   searchInput = searchInput.toLowerCase();
//   let noResults=true;
//   for (let i = 0; i < list.length; i++) {
//     if(!listItems[i].innerHTML.toLowerCase().includes(searchInput)) {
//       listItems[i].style.display="none";
//       continue;
//     } else{
//       listItems[i].style.display="flex";
//       noResults=false;
//     }
//   }
//   listContainer.style.display=noResults?"none":"block";
// }