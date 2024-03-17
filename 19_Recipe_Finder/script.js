const recipeName = document.querySelector('#user-text');
const searchButton = document.querySelector('.search');
const result = document.querySelector('.result');
const detials = document.querySelector('.details');
const close = document.querySelector('.close');

const fetchRecipe = async (recipe) => {
    const fetchRecipe = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`);
    const fetchedRecipeData = await fetchRecipe.json();
    separateDetails(fetchedRecipeData.meals[0]);
}

// using destructuring meal-name,instructions,meail-image,youtube-link,article-link is extracted
const separateDetails = (meal) => {
    const { strMeal, strInstructions, strMealThumb, strYoutube, strSource } = meal;
    const obj = seperateIngredientsAndQuantities(meal);
    displaySearchedDetails(strMeal, strMealThumb, strYoutube, strSource);
    displayCompleteDetails(strInstructions,obj)
}

// extracts all ingredients and measurement and stores in array
const seperateIngredientsAndQuantities = (meal) => {
    let ingredientsArr = [];
    let ingridentMeasureArr = [];

    for (i in meal) {
        if (i.startsWith('strIngredient') && meal[i] !== "") {
                ingredientsArr.push(meal[i])
        }
        if (i.startsWith('strMeasure') && meal[i]) {
                ingridentMeasureArr.push(meal[i])
        }
    }

    return {
        ingredients: ingredientsArr,
        measure: ingridentMeasureArr
    }

}

const displaySearchedDetails = (mealName, img, articleLink, youtubeLink) => {
    result.innerHTML = `<img src="${img}" alt="" class="meal-img">
    <span class="meal-name">${mealName}</span>
    <a href="${youtubeLink}" class="youtube-link" target="_blank">Watch Video</a>
    <a href="${articleLink}" class="article-link" target="_blank">Read Article</a>
    <button class="read" onclick="display()">Read</button>
  `
}

// displays details such as ingredients , measurement and instruction to cook
const displayCompleteDetails = (instruction, object) =>{
    const instructionArray = instruction.split('.');
    const ingridentsArray = object.ingredients;
    const measurementArray = object.measure;

    detials.innerHTML = ''

    detials.innerHTML += `<span>Ingregients</span>`
    ingridentsArray.forEach((value,index)=>{
        detials.innerHTML += `<li>${value} - ${measurementArray[index]}</li>`
    })

    detials.innerHTML += `<span>Instructions</span>`
    instructionArray.forEach((value)=>{
        detials.innerHTML += `<li>${value}</li>`;
    })
    
}

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchRecipe(recipeName.value);
})


const hideDetails = () =>{
    close.style.transform = "translateX(350%)"
}
const display = () =>{
    close.style.transform = "translateX(0%)"
}