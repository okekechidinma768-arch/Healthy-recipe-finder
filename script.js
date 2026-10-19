const recipes = [
  {
    id: 1, title: "Mediterranean Chickpea Salad", description: "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    servings: 2, prep: 10, cook: 0, ingredients: ["1 can chickpeas, rinsed and drained", "1 cup cherry tomatoes, halved", "1 cucumber, diced", "¼ red onion, finely chopped", "2 tbsp olive oil", "Juice of ½ lemon", "Fresh parsley, salt and pepper"],
    steps: ["Add chickpeas, tomatoes, cucumber and red onion to a large bowl.", "Whisk olive oil, lemon juice, salt and pepper in a small bowl.", "Pour the dressing over the salad, toss gently and finish with chopped parsley."]
  },
  {
    id: 2, title: "Avocado & Tomato Wholegrain Toast", description: "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    servings: 1, prep: 5, cook: 5, ingredients: ["2 slices wholegrain bread", "1 ripe avocado", "6 cherry tomatoes, quartered", "1 tsp lemon juice", "1 tsp extra-virgin olive oil", "Salt, pepper and chilli flakes (optional)"],
    steps: ["Toast the wholegrain bread until golden and crisp.", "Mash the avocado with lemon juice, salt and pepper.", "Spread avocado over the toast, add tomatoes and drizzle with olive oil."]
  },
  {
    id: 3, title: "One-Pan Lemon Garlic Salmon with Asparagus", description: "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
    servings: 2, prep: 5, cook: 12, ingredients: ["2 salmon fillets", "1 bunch asparagus, trimmed", "2 garlic cloves, minced", "1 lemon, sliced", "1 tbsp olive oil", "Salt, black pepper and fresh dill"],
    steps: ["Season salmon with salt, pepper, garlic and a squeeze of lemon.", "Heat olive oil in a skillet and cook salmon for 4–5 minutes per side.", "Add asparagus and lemon slices; cook until asparagus is tender and salmon flakes easily."]
  },
  {
    id: 4, title: "Quinoa Veggie Power Bowl", description: "A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=85",
    servings: 2, prep: 10, cook: 15, ingredients: ["1 cup cooked quinoa", "1 sweet potato, cubed", "1 avocado, sliced", "1 cup baby spinach", "½ cup chickpeas", "1 tbsp pumpkin seeds", "Lemon-tahini dressing"],
    steps: ["Roast sweet potato cubes at 200°C / 400°F until tender, about 15 minutes.", "Divide cooked quinoa and spinach between two bowls.", "Top with sweet potato, chickpeas, avocado and pumpkin seeds; drizzle with dressing."]
  },
  {
    id: 5, title: "Sweet Potato Black Bean Tacos", description: "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
    image: "https://images.unsplash.com/photo-1551505983-df976f4c0abb?auto=format&fit=crop&w=900&q=85",
    servings: 3, prep: 10, cook: 15, ingredients: ["2 small sweet potatoes, cubed", "1 can black beans, rinsed", "6 small corn tortillas", "1 tsp smoked paprika", "½ tsp cumin", "1 lime", "Fresh coriander and salsa"],
    steps: ["Toss sweet potato cubes with olive oil, paprika and cumin.", "Roast at 200°C / 400°F for 15 minutes or until tender.", "Warm the tortillas and fill with sweet potato, black beans, salsa and coriander. Serve with lime."]
  },
  {
    id: 6, title: "Greek Yogurt Berry Parfait", description: "Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    servings: 1, prep: 5, cook: 0, ingredients: ["¾ cup plain Greek yogurt", "½ cup mixed berries", "¼ cup rolled oats or low-sugar granola", "1 tsp honey", "½ tsp chia seeds"],
    steps: ["Spoon half the yogurt into a glass or small bowl.", "Add a layer of berries and oats, then top with the remaining yogurt.", "Finish with the rest of the berries, chia seeds and a light drizzle of honey."]
  },
  {
    id: 7, title: "Lentil & Spinach Soup", description: "A hearty 30-minute soup rich in plant protein and iron.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    servings: 4, prep: 10, cook: 20, ingredients: ["1 cup red lentils, rinsed", "1 onion, diced", "2 garlic cloves, minced", "1 carrot, diced", "4 cups vegetable stock", "2 cups baby spinach", "1 tsp cumin and ½ tsp paprika"],
    steps: ["Soften onion and carrot in a pot with a little olive oil for 4 minutes.", "Add garlic, spices, lentils and stock. Simmer for 15–20 minutes until lentils are soft.", "Stir in spinach until wilted, season to taste and serve with lemon."]
  },
  {
    id: 8, title: "Banana Oat Pancakes", description: "Flour-free pancakes sweetened naturally with ripe bananas.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    servings: 2, prep: 5, cook: 10, ingredients: ["1 ripe banana", "1 cup rolled oats", "2 eggs", "¼ cup milk of choice", "½ tsp baking powder", "½ tsp cinnamon", "Fresh berries to serve"],
    steps: ["Blend banana, oats, eggs, milk, baking powder and cinnamon until smooth.", "Warm a lightly oiled pan over medium-low heat.", "Pour small rounds of batter and cook for 2 minutes per side. Serve with berries."]
  }
];

const grid = document.querySelector("#recipeGrid");
const searchInput = document.querySelector("#searchInput");
const prepFilter = document.querySelector("#prepFilter");
const cookFilter = document.querySelector("#cookFilter");
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const clearSearch = document.querySelector("#clearSearch");
const dialog = document.querySelector("#recipeDialog");

function cardMarkup(recipe) {
  return `
    <article class="recipe-card">
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}" loading="lazy">
      <div class="card-body">
        <h2 class="card-title" title="${recipe.title}">${recipe.title}</h2>
        <p class="card-description">${recipe.description}</p>
        <div class="meta">
          <span class="meta-item"><span class="meta-icon" aria-hidden="true">♟</span> Servings: ${recipe.servings}</span>
          <span class="meta-item"><span class="meta-icon" aria-hidden="true">◴</span> Prep: ${recipe.prep} mins</span>
        </div>
        <div class="meta"><span class="meta-item"><span class="meta-icon" aria-hidden="true">♨</span> Cook: ${recipe.cook} mins</span></div>
        <button class="recipe-button" type="button" data-recipe-id="${recipe.id}">View Recipe</button>
      </div>
    </article>`;
}

function renderRecipes() {
  const query = searchInput.value.trim().toLowerCase();
  const prepMax = prepFilter.value === "all" ? Infinity : Number(prepFilter.value);
  const cookMax = cookFilter.value === "all" ? Infinity : Number(cookFilter.value);
  const filtered = recipes.filter(recipe => {
    const searchable = `${recipe.title} ${recipe.description} ${recipe.ingredients.join(" ")}`.toLowerCase();
    return searchable.includes(query) && recipe.prep <= prepMax && recipe.cook <= cookMax;
  });
  grid.innerHTML = filtered.map(cardMarkup).join("");
  resultsCount.textContent = query || prepFilter.value !== "all" || cookFilter.value !== "all"
    ? `${filtered.length} ${filtered.length === 1 ? "recipe" : "recipes"} found`
    : "";
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  clearSearch.hidden = !searchInput.value;
}

function openRecipe(id) {
  const recipe = recipes.find(item => item.id === Number(id));
  if (!recipe) return;
  document.querySelector("#dialogImage").src = recipe.image;
  document.querySelector("#dialogImage").alt = recipe.title;
  document.querySelector("#dialogTitle").textContent = recipe.title;
  document.querySelector("#dialogDescription").textContent = recipe.description;
  document.querySelector("#dialogStats").innerHTML = `
    <span>♟ Serves ${recipe.servings}</span>
    <span>◴ Prep ${recipe.prep} min</span>
    <span>♨ Cook ${recipe.cook} min</span>
    <span>◷ Total ${recipe.prep + recipe.cook} min</span>`;
  document.querySelector("#dialogIngredients").innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");
  document.querySelector("#dialogSteps").innerHTML = recipe.steps.map(item => `<li>${item}</li>`).join("");
  dialog.showModal();
}

searchInput.addEventListener("input", renderRecipes);
prepFilter.addEventListener("change", renderRecipes);
cookFilter.addEventListener("change", renderRecipes);
clearSearch.addEventListener("click", () => { searchInput.value = ""; renderRecipes(); searchInput.focus(); });
document.querySelector("#resetFilters").addEventListener("click", () => {
  searchInput.value = ""; prepFilter.value = "all"; cookFilter.value = "all"; renderRecipes();
});
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-recipe-id]");
  if (button) openRecipe(button.dataset.recipeId);
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#menuToggle").addEventListener("click", () => {
  const nav = document.querySelector("#mainNav");
  const open = nav.classList.toggle("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector("#mainNav").classList.remove("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded", "false");
}));

renderRecipes();
