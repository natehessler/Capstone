import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender();
}

function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".class").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hello");
  });
}


// added 8/8
if (state.view === "Contactus") {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    const inputList = event.target.elements;
    console.log("Input Element List", inputList);

    const meals = [];
    // Interate over the meals input group elements
    for (let input of inputList.meals) {
      // If the value of the checked attribute is true then add the value to the toppings array
      if (input.checked) {
        meals.push(input.value);
      }
    }

    const requestData = {
      customer: inputList.name.value,
      email: inputList.email.value,
      phone: inputList.phone.value,
      experience: inputList.experience.value,
      recommendations: inputList.recommendations.value,
      meals: meals,
    };
    console.log("request Body", requestData);

    axios
      .post(`${process.env.PIZZA_PLACE_API_URL}`, requestData)
      .then(response => {
        // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
        store.Pizza.pizzas.push(response.data);
        router.navigate("/Pizza");
      })
      .catch(error => {
        console.log("It puked", error);
      });
  });
}
// end added 8/8


router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home": {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=fbb30b5d6cf8e164ed522e5082b49064&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;
      }
      default: {
        done();
      }
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      console.log (view)
      render(store[view]);
    }
  })
  .resolve();
