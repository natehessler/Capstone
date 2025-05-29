import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

// Initialize router with the correct root and hash strategy
const router = new Navigo("/", {hash: true});

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
  const hamburgerMenu = document.querySelector(".fas.fa-bars");
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden");
    });
  }

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
        .post(process.env.RECOMMENDATIONS_URL || "http://localhost:4040/recommendations", requestData)
        .then(response => {
          // Push the new recipe onto the Recommendations state recipes attribute
          store.Recommendations.recipes.push(response.data);
          router.navigate("/#/Recommendations");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}
// Debug
console.log("Starting application");

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
          .get(process.env.RECOMMENDATIONS_URL || "http://localhost:4040/recommendations")
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
    "/": () => render(store.Home),
    ":view": params => {
      let view = capitalize(params.data.view);
      console.log("Route changed to:", view);
      if (store[view]) {
        render(store[view]);
      } else {
        console.error("View not found in store:", view);
        router.navigate("/");
      }
    }
  })
  .notFound(() => {
    console.log("Route not found, navigating to home");
    router.navigate("/");
  })
  .resolve();
