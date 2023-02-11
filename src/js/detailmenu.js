const BASE_URL = "https://www.themealdb.com/api";
const API_KEY = "1";

const getMealById = async (ID) => {
    const response = await fetch(`${BASE_URL}/json/v1/${API_KEY}/lookup.php?i=${ID}`, {method: "get"});
    return response.json();
}


const main = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const meal = await getMealById(id);
    const name = meal.meals[0].strMeal;
    const img = meal.meals[0].strMealThumb;
    const content = document.getElementById("contents");
    content.getElementsByTagName("h1")[0].innerHTML = name;
    content.getElementsByTagName("img")[0].src = img;
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal.meals[0][`strIngredient${i}`];
        const measure = meal.meals[0][`strMeasure${i}`];
        if (ingredient) {
            const ingr = document.getElementById("ingredient").cloneNode(true);
            ingr.innerHTML = "<input type='checkbox' class='checkmark'>" + measure +" "+ ingredient;
            content.getElementsByTagName("ul")[0].appendChild(ingr);
        }
    }
    const method = meal.meals[0].strInstructions;
    const newText = method.replace(/\r\n/g, "<br><br>");
    const newText2 = newText + "<br><br><br><br>"
    content.getElementsByTagName("p")[0].innerHTML = newText2;
}
main()