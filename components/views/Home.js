import html from "html-literal";

export default st => html`
 <section id="home">
 <div class="elements">
 <h2>Welcome to Grill Master!</h2>
 <div class="intro-section">
   <h3>What are we about?</h3>
 <p>
     Grill Master is for users who may have never grilled before in their life, or for users who love to grill but might be looking for some new recipes. Whether you like steak, burgers, chicken, or even if you're a vegetarian, we have a recipe for you.
   </p>
 </div>
 
 <div class="benefits-section">
 <h3>Why use Grill Master?</h3>
 <p>Grill Master provides free recipes for users, where you can also submit your own for the world to try out.</p>
   <div class="feature-list">
     <div class="feature-item">
       <i class="fas fa-search"></i>
     <p>Find new recipes for any skill level</p>
   </div>
   <div class="feature-item">
       <i class="fas fa-share-alt"></i>
         <p>Submit your favorite recipes and discover dishes from other grill enthusiasts</p>
         </div>
          <div class="feature-item">
            <i class="fas fa-envelope"></i>
            <p>Stay connected with our community through our contact form</p>
          </div>
        </div>
      </div>
      
      <div class="weather-section">
        <h3><i class="fas fa-cloud-sun"></i> Current Grilling Weather</h3>
        <p>It's always grilling weather somewhere! Check out the current conditions in St. Louis:</p>
        <div class="weather-card">
          <div class="weather-info">
            <h4>${st.weather.city}</h4>
            <p class="weather-description">${st.weather.description}</p>
            <div class="temperature">
              <span class="current-temp">${st.weather.temp}°F</span>
              <span class="feels-like">Feels like: ${st.weather.feelsLike}°F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
