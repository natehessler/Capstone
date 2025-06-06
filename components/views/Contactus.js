import html from "html-literal";

export default () => html`
  <section id="Contactus">
    <div class="elements">
      <h2>Contact Us</h2>
      <p>Have questions about grilling or want to connect with our community? Fill out the form below and we'll be in touch!</p>
      <div class="contact-container">
    <form id="contact"
          accept-charset="utf-8"
          method="POST"
          action="/contacts">

      <div>
        <label for="name">Full Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Full Name"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          required
        />
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          required
        />
      </div>
      <div>
        <label for="experience">Grilling Experience:</label>
        <select id="experience" name="experience">
          <option value="">Select</option>
          <option value="never">I have never grilled</option>
          <option value="few">I have grilled a few times</option>
          <option value="solid">I have solid grilling experience</option>
          <option value="master">I'm already a grill master!</option>
        </select>
      </div>
      <div>
        <label for="meals">Meal(s) of interest:</label>
        <div class="checkbox-group">
        <div class="checkbox-item">
          <input type="checkbox" id="meal1" name="meals" value="Steak" />
          <label for="meal1">Steak</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="meal2" name="meals" value="Burger" />
            <label for="meal2">Burger</label>
          </div>
        <div class="checkbox-item">
          <input type="checkbox" id="meal3" name="meals" value="Chicken" />
          <label for="meal3">Chicken</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="meal4" name="meals" value="Vegetarian" />
            <label for="meal4">Vegetarian</label>
          </div>
        <div class="checkbox-item">
          <input type="checkbox" id="meal5" name="meals" value="Other" />
          <label for="meal5">Other</label>
        </div>
      </div>
      </div>
      <input
        type="hidden"
        name="customer"
        id="meals"
        value="None of these/something else"
      />
      <input type="submit" name="submit" value="Submit" />
    </form>
  </div>
    </div>
  </section>
`;
