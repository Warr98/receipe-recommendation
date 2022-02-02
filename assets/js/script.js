let mainIngredientTxtE = document.getElementById("mainIngredientInput");
let mealTypeElement = document.getElementById("MealType");
let dietElement = document.getElementById("diet");
let timeElement = document.getElementById("time")
let searchButton = document.getElementById("buttonSearch");
let errorLog = document.getElementById("errorLog");

searchButton.addEventListener("click", formSubmitHandler);

let queryUrl;

// Handler for search recipe user form submission
function formSubmitHandler(event) {
    event.preventDefault();

    // API Id for Edamam recipe search API
    let appId = "3f548913";
    // API key for Edamam recipe search API
    let appKey = "9d558572444afeba08f4059681e7376b"

    // Gets the user entered values
    let mainIngredient = mainIngredientTxtE.value;
    let mealType = mealTypeElement.value;
    let diet = dietElement.value;
    let time = timeElement.value;

    // Clears the text input field
    mainIngredientTxtE.textContent = "";

    // Query URL with user selected query parameters
    queryUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=" + mainIngredient + "&app_id=" + appId + "&app_key=" + appKey
        + "&diet=" + diet + "&mealType=" + mealType + "&time=" + time;
    // Fetches the Edamam recipe API
    fetch(queryUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                errorLog.textContent = "Error: " + response.statusText;
            }
        })
        .then(function (data) {
            console.log(data);
            displayRecipeCards(data.hits)
        })
        .catch(function (error) {
            errorLog.textContent = "Unable to connect to server: " + error;
        })
}

function displayRecipeCards(recipes) {

}

