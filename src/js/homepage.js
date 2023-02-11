const BASE_URL = "https://www.themealdb.com/api";
const API_KEY = "1";

const getTopMeal = async () => {
    const response = await fetch(`${BASE_URL}/json/v1/${API_KEY}/random.php`, {method: "get"});
    return response.json();
}
const TM = async () => {
    const TopMeal = await getTopMeal();
    const nameTM = TopMeal.meals[0].strMeal;
    const imgTM = TopMeal.meals[0].strMealThumb;
    const TMS = document.getElementById("topmealstr");
    TMS.innerHTML = nameTM;
    const TMI = document.getElementById("topmealimg");
    TMI.src = imgTM;
    const TM = document.getElementById("todaysrecipe");
    TM.querySelector("a").href = "detailmenu.html?id=" + TopMeal.meals[0].idMeal;
}
const getListMeal = async (x) =>{
    const response = await fetch(`${BASE_URL}/json/v1/${API_KEY}/search.php?f=${x}`, {method: "get"});
    return response.json();
}

const concatList = async () =>{ 
    const listA = await getListMeal("a");
    const arrA = listA.meals;
    const listB = await getListMeal("b");
    const arrB = listB.meals;
    const listC = await getListMeal("c");
    const arrC = listC.meals;
    const listD = await getListMeal("d");
    const arrD = listD.meals;
    const listE = await getListMeal("e");
    const arrE = listE.meals;
    const listF = await getListMeal("f");
    const arrF = listF.meals;
    const listG = await getListMeal("g");
    const arrG = listG.meals;
    const listH = await getListMeal("h");
    const arrH = listH.meals;
    const listI = await getListMeal("i");
    const arrI = listI.meals;
    const listJ = await getListMeal("j");
    const arrJ = listJ.meals;
    const listK = await getListMeal("k");
    const arrK = listK.meals;
    const listL = await getListMeal("l");
    const arrL = listL.meals;
    const listM = await getListMeal("m");
    const arrM = listM.meals;
    const listN = await getListMeal("n");
    const arrN = listN.meals;
    const listO = await getListMeal("o");
    const arrO = listO.meals;
    const listP = await getListMeal("p");
    const arrP = listP.meals;
    const listR = await getListMeal("r");
    const arrR = listR.meals;
    const listS = await getListMeal("s");
    const arrS = listS.meals;
    const listT = await getListMeal("t");
    const arrT = listT.meals;
    const listV = await getListMeal("v");
    const arrV = listV.meals;
    const listW = await getListMeal("w");
    const arrW = listW.meals;
    const listY = await getListMeal("y");
    const arrY = listY.meals;
    const arrMeals = arrA.concat(arrB,arrC,arrD,arrE,arrF,arrG,arrH,arrI,arrJ,arrK,arrL,arrM,arrN,arrO,arrP,arrR,arrS,arrT,arrV,arrW,arrY);
    return arrMeals;
}

function search() {
    const container = document.getElementById("boxes");
    const meal = container.getElementsByClassName("box");
    const mealname = container.getElementsByTagName("p");
    let searchInput = document.getElementById("search-input").value;
    searchInput = searchInput.toLowerCase();
    let noResults=true;
    for (let i = 0; i < container.length; i++) {
      if(!mealname[i].innerHTML.toLowerCase().includes(searchInput)) {
        meal[i].style.display="none";
        continue;
      } else{
        meal[i].style.display="flex";
        noResults=false;
      }
    }
    if (noResults) {
        alert("No results found");
    }
}

function search2(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("boxes");
    li = ul.getElementsByClassName("box");
    var noResults=true;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            noResults=false;
        } else {
            li[i].style.display = "none";
        }
        }
    // var count =0;
    // for (i=0;i<li.length;i++){
    //     if(li[i].style.display==""){
    //         count++;
    //     }
    // }
    // if (count==0){
    //     // alert("No results found");
    //     const noresults = document.createElement("p");
    //     noresults.innerHTML = "No results found";
    //     noResults.className = "noresults";
    //     noresults.style.textAlign = "center";
    //     noresults.style.fontSize = "20px";
    //     noresults.style.fontWeight = "bold";
    //     noresults.style.color = "white";
    //     noresults.style.marginTop = "20px";
    //     noresults.style.marginBottom = "100px";
    //     document.getElementById("boxes").appendChild(noresults);
    // }
    // if (noResults) {
    //     const noresults = document.createElement("p");
    //     noresults.innerHTML = "No results found";
    //     noResults.className = "noresults";
    //     noresults.style.textAlign = "center";
    //     noresults.style.fontSize = "20px";
    //     noresults.style.fontWeight = "bold";
    //     noresults.style.color = "white";
    //     noresults.style.marginTop = "20px";
    //     noresults.style.marginBottom = "100px";
    //     document.getElementById("boxes").appendChild(noresults);
    // } 
    // var existingNoResultMsg = document.getElementsByClassName(".noresults");
    // if(existingNoResultMsg.length>1){
    //     for (let i = 0; i < existingNoResultMsg.length; i++) {
    //         existingNoResultMsg[i].remove();
    //     }
    // }
        // else{
    //     var existingNoResultMsg = document.querySelector(".noresults");
    //     if(existingNoResultMsg){
    //         existingNoResultMsg.remove();
    //     }
    // }
}
const main = async () => {
    TM();
    const meals = await concatList();
    for (let i = 0; i < meals.length-1; i++) {
        const node = document.getElementById("frameMeal");
        const clone = node.cloneNode(true);
        clone.querySelector("a").href = "detailmenu.html?id=" + meals[i+1].idMeal;
        const target = document.getElementById("boxes");
        target.appendChild(clone);
    }
    const boxes = document.getElementById("boxes");
    const images = boxes.getElementsByTagName("img");
    const names = boxes.getElementsByTagName("p");
    for (let i = 0; i < images.length; i++) {
        images[i].src = meals[i].strMealThumb;
        names[i].innerHTML = meals[i].strMeal;
    }
    const firstMeal = document.getElementById("frameMeal");
    firstMeal.querySelector("a").href = "detailmenu.html?id=" + meals[0].idMeal;

}
main();