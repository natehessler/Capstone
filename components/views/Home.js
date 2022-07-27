import html from "html-literal";

export default st => html`
  <section id="home">
    <div class="container">
      <h2>Welcome to Grill Master Flavor Profile!</h2>
      <h3>What are we about?</h3>
      <p>
        Grill Master is for users who may have never grilled before in their life, or for users who love to grill but might be looking for some new recipes. Whether you like steak, burgers, chicken, or even if you're a vegetarian, we have a recipe for you.
      </p>
      <h3>Why use Grill Master?</h3>
      <p>Grill Master provides free recipes for users. We also offer the correct tools which will be needed to perfectly execute your dish.</p>
      <ol>
        <li>Find new recipes</li>
        <li>Find the tools, with links for purchasing, to all your grilling tool needs</li>
        <li>Easily share recipes with yourself or someone else</li>
      </ol>
      <h3>It's always grilling weather! See live and current weather updates for St. Louis below.</h3>
      <h3 class="api">
        The weather in ${st.weather.city} is ${st.weather.description}. The
        temperature is ${st.weather.temp}°F, and it feels like
        ${st.weather.feelsLike}°F.
      </h3>
    </div>
  </section>
`;
