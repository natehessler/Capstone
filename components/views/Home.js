import html from "html-literal";

export default st => html`
 <section id="home">
    <div class="elements">
      <h2>Welcome to Grill Master!</h2>
      <h3>What are we about?</h3>
      <p>
        Grill Master is for users who may have never grilled before in their life, or for users who love to grill but might be looking for some new recipes. Whether you like steak, burgers, chicken, or even if you're a vegetarian, we have a recipe for you.
      </p>
      <h3>Why use Grill Master?</h3>
      <p>Grill Master provides free recipes for users, where you can also submmit your own for the world to try out.</p>
      <ol>
        <li>Find new recipes</li>
        <li>Submit some of your favorite recipe(s) for other users, and find great recipes submitted by others</li>
        <li>Fill out a contact form to stay in touch about all things grilling</li>
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
