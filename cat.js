const recipes = [
    {
      name: "Spaghetti Carbonara",
      category: "Main Course",
      ingredients: [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g pecorino cheese",
        "Salt and pepper",
        "Fresh parsley"
      ],
      instructions: "Cook spaghetti. Fry pancetta. Beat eggs with cheese, add to pasta off heat. Mix in pancetta. Serve with parsley."
    },
    {
      name: "Vegetable Stir-Fry",
      category: "Main Course",
      ingredients: [
        "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
        "2 tablespoons soy sauce",
        "1 tablespoon olive oil",
        "1 clove garlic, minced",
        "Salt and pepper"
      ],
      instructions: "Heat oil, add garlic, and stir-fry vegetables for 5-7 minutes. Add soy sauce and cook for another minute."
    },
    {
      name: "Garlic Bread",
      category: "Appetiser",
      ingredients: [
        "1 baguette",
        "3 tablespoons butter, softened",
        "2 cloves garlic, minced",
        "Fresh parsley"
      ],
      instructions: "Mix butter, garlic and parsley. Spread on sliced baguette and bake at 200°C for 8-10 minutes."
    },
    {
      name: "Pili Pili Chicken Wings",
      category: "Spicy",
      ingredients: [
        "500g chicken wings",
        "2 fresh bird's eye chillies",
        "1 tablespoon lemon juice",
        "2 cloves garlic",
        "Salt"
      ],
      instructions: "Blend chillies, garlic, lemon juice and salt. Coat the wings and roast at 200°C for 35 minutes, turning once."
    },
    {
      name: "Banana Bread",
      category: "Sweets",
      ingredients: [
        "3 ripe bananas",
        "250g flour",
        "100g sugar",
        "75g melted butter",
        "1 egg",
        "1 teaspoon baking soda"
      ],
      instructions: "Mash bananas, mix in butter, sugar and egg. Fold in flour and baking soda. Bake at 175°C for 60 minutes."
    }];

//for each loops through the array (returns nothing)
//.map creates new array
const recipeNames = recipes.map(recipe => recipe.name);
console.log(recipeNames);

//.filter creates a new array with only the items that pass the test
function recipesInCategory(category) {
    return recipes.filter(recipe => recipe.category === category);
}

//getting elements: document.getElementById(id) gets the one element with that id
function renderRecipes(category, containerId) {
    const container = document.getElementById(containerId);
    const matches = category ? recipesInCategory(category) : recipes;

    if (matches.length === 0) {
        container.textContent = "No recipes in this category yet.";
        return;
    }

    matches.forEach(recipe => {
        const card = document.createElement("article");
        card.className = "recipe";

        const title = document.createElement("h3");
        title.textContent = recipe.name;

        const list = document.createElement("ul");
        recipe.ingredients.forEach(ingredient => {
            const item = document.createElement("li");
            item.textContent = ingredient;
            list.appendChild(item);
        });

        const steps = document.createElement("p");
        steps.textContent = recipe.instructions;

        card.append(title, list, steps);
        container.appendChild(card);
    });
}
