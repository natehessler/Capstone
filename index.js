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
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".class").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hello");
  });

  if (state.view === "Recommendations") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        name: inputList.name.value,
        dish: inputList.dish.value,
        ingredients: inputList.ingredients.value,
        instructions: inputList.instructions.value,
        time: inputList.time.value,
        vegetarian: inputList.vegetarian.value,
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.RECOMMENDATIONS_URL}`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Recommendations.recipes.push(response.data);
          router.navigate("/Recommendations");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}
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
      case "Recommendations": {
        axios
          .get(`${process.env.RECOMMENDATIONS_URL}`)
          .then((response) => {
            store.Recommendations.recipes = response.data;
            done();
          })
          .catch((error) => {
            console.log("It puked", error);
          });
        break;
      }
      default: {
        done();
      }
    }
  },
  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    render(store[view]);
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
