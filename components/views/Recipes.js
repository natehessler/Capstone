import html from "html-literal";

export default () => html`
  <section id="Recipes">
    <div class="elements">
      <h2>Grilling Recipes</h2>
      <p>Discover our collection of delicious grilling recipes perfect for any occasion. From juicy steaks to flavorful vegetables, we've got something for every grilling enthusiast!</p>
      
      <div class="recipe-grid">
        <div class="recipe-card">
          <div class="recipe-content">
            <h3>Classic Grilled Steak</h3>
            <p><strong>Ingredients:</strong> 2 ribeye steaks, 2 tbsp olive oil, 2 cloves garlic (minced), salt and pepper to taste</p>
            <p><strong>Instructions:</strong> Let steaks reach room temperature. Rub with olive oil, garlic, salt, and pepper. Grill on high heat for 4-5 minutes each side for medium-rare.</p>
            <div class="recipe-meta">
              <span>30 minutes</span>
              <span>Not Vegetarian</span>
            </div>
          </div>
        </div>
        
        <div class="recipe-card">
          <div class="recipe-content">
            <h3>Grilled Vegetable Skewers</h3>
            <p><strong>Ingredients:</strong> Bell peppers, zucchini, mushrooms, cherry tomatoes, red onion, olive oil, balsamic glaze</p>
            <p><strong>Instructions:</strong> Cut vegetables into chunks. Toss with olive oil, salt, and pepper. Thread onto skewers. Grill for 10-12 minutes, turning occasionally. Drizzle with balsamic glaze.</p>
            <div class="recipe-meta">
              <span>20 minutes</span>
              <span>Vegetarian</span>
            </div>
          </div>
        </div>
        
        <div class="recipe-card">
          <div class="recipe-content">
            <h3>Smoked BBQ Chicken</h3>
            <p><strong>Ingredients:</strong> 4 chicken breasts, BBQ rub, BBQ sauce</p>
            <p><strong>Instructions:</strong> Rub chicken with BBQ seasonings. Smoke at 225°F for 1 hour or until internal temperature reaches 165°F. Brush with BBQ sauce in the last 15 minutes.</p>
            <div class="recipe-meta">
              <span>1 hour 15 minutes</span>
              <span>Not Vegetarian</span>
            </div>
          </div>
        </div>
        
        <div class="recipe-card">
          <div class="recipe-content">
            <h3>Grilled Portobello Mushroom Burgers</h3>
            <p><strong>Ingredients:</strong> 4 large portobello mushroom caps, olive oil, balsamic vinegar, burger buns, lettuce, tomato, onion, mayo</p>
            <p><strong>Instructions:</strong> Marinate mushrooms in olive oil and balsamic vinegar for 30 minutes. Grill 5-7 minutes per side. Serve on buns with toppings.</p>
            <div class="recipe-meta">
              <span>45 minutes</span>
              <span>Vegetarian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;