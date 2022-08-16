import html from "html-literal";

export default () => html`
  <section id="Contactus">
    <div class="elements">
      <h2>
        Contact Us
      </h2>
      <section id="contact">
    <form id="contact"
          accept-charset="utf-8"
          method="POST"
          action="https://formspree.io/f/mzbwbdrb">

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
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="meals"
          value="Chicken"
        />
        <label for="meal1">Steak</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="meals"
          value="steak"
        />
        <label for="top2">Burger</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="meals"
          value="burger"
        />
        <label for="top3">Chicken</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="meals"
          value="Chicken"
        />
        <label for="top4">Vegetarian</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="meals"
          value="Vegetarian"
        />
        <label for="top5">None of these/something else</label>
      </div>
      <input
        type="hidden"
        name="customer"
        id="meals"
        value="None of these/something else"
      />
      <div>
        <label for="recommendations">Recomendations for other recipes (optional):</label>
        <input
          type="text"
          name="recommendations"
          id="recommendations"
          placeholder="optional"
        />
      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
    </div>
  </section>
`;
