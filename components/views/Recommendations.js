import html from "html-literal";

export default (st) => html`
  <section id="Recommendations">
    <div class="elements">
      <h2>Recipe Recommendations</h2>
      <p>Share your favorite grilling recipe with our community or browse recipes submitted by other grill masters!</p>
      
      <div class="form-container">
        <h3><i class="fas fa-utensils"></i> Submit a Recipe</h3>
        <form id="recommendations" method="POST" action="">

      <div>
        <label for="name">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div>
        <label for="dish">Dish Name:</label>
        <input
          type="text"
          name="dish"
          id="dish"
          placeholder="Enter Dish Name"
          required
        />
      </div>
      <div>
        <label for="ingredients">Ingredients:</label>
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          placeholder="1 lb ground beef, 3 chicken breasts, etc."
          required
        />
      </div>
      <div>
        <label for="instructions">Cooking Instructions:</label>
        <input
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Mix ingredients, etc."
          required
        />
      </div>
      <div>
        <label for="time">Cook Time:</label>
        <select id="time" name="time">
          <option value="">Select a Cook Time</option>
          <option value="15 minutes or less">15 minutes or less</option>
          <option value="30 minutes or less">30 minutes or less</option>
          <option value="1 hour or less">1 hour or less</option>
          <option value="Longer than 1 hour">Longer than 1 hour</option>
        </select>
      </div>
      <div>
        <label for="vegetarian">Vegetarian/Vegan?:</label>
        <select id="vegetarian" name="vegetarian">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <input type="submit" name="submit" value="Submit Recipe!" />
    </form>
  </div>
  
  <div class="submitted-recipes">
    <h3><i class="fas fa-list"></i> Community Recipes</h3>
    <table id="recommendations">
      <tr>
        <th>Name</th>
        <th>Dish Name</th>
        <th>Ingredients</th>
        <th>Cooking Instructions</th>
        <th>Cook Time</th>
        <th>Vegetarian/Vegan</th>
      </tr>
      ${st.recipes && st.recipes.length > 0
        ? st.recipes
            .map((recommendations) => {
              return `<tr>
                <td data-label="Name">${recommendations.name}</td>
                <td data-label="Dish">${recommendations.dish}</td>
                <td data-label="Ingredients">${recommendations.ingredients}</td>
                <td data-label="Instructions">${recommendations.instructions}</td>
                <td data-label="Cook Time">${recommendations.time}</td>
                <td data-label="Vegetarian">${recommendations.vegetarian}</td>
              </tr>`;
            })
            .join("")
        : `<tr><td colspan="6">No recipes submitted yet!</td></tr>`}
    </table>
    </div>
      </div>
  </section>
`;
