import html from "html-literal";

export default (st) => html`
  <section id="Recommendations">
    <div class="elements">
    <form id="recommendations" method="POST" action="">
      <h1>User Recommendations</h1>
      <h4>Please enter a recipe recommendation below! Or check out some recipes already submitted by other users!</h4>
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
    <table id="recommendations">
      <tr>
        <th>Name</th>
        <th>Dish Name</th>
        <th>Ingredients</th>
        <th>Cooking Instructions</th>
        <th>Cook Time</th>
        <th>Vegetarian/Vegan</th>
      </tr>
      ${st.recipes
        .map((recommendations) => {
          return `<tr><td>${recommendations.name}</td><td>${recommendations.dish}</td><td>${
            recommendations.ingredients
          }</td><td>${recommendations.instructions}</td><td>${recommendations.time}<td>${recommendations.vegetarian}</td></tr>`;
        })
        .join("")}
    </div>
  </section>
`;
