import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

import axios from "axios";

const router = new Navigo("/");
var calendar;

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(store.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();

  addEventListeners(st);
}


function handleEventDragResize(info) {
  const event = info.event;

  if (confirm("Are you sure about this change?")) {
    const requestData = {
      customer: event.title,
      start: event.start.toJSON(),
      end: event.end.toJSON(),
      url: event.url
    };

    axios
      .put(`${process.env.API_URL}/Recipes/${event.id}`, requestData)
      .then(response => {
        console.log(`Event '${response.data.customer}' (${response.data._id}) has been updated.`);
      })
      .catch(error => {
        info.revert();
        console.log("It puked", error);
      });
  } else {
    info.revert();
  }
}

function addEventListeners(st) {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  if (st.view === "Recipes") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;

      const requestData = {
        customer: inputList.customer.value,
        start: new Date(inputList.start.value).toJSON(),
        end: new Date(inputList.end.value).toJSON(),
      };

      axios
        .post(`${process.env.API_URL}/Recipes`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Recipes.Recipes.push(response.data);
          router.navigate("/recipes");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  if (st.view === "Recipes" && st.Recipes) {
    const calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        today:    'Today',
        month:    'Month',
        week:     'Week',
        day:      'Day',
        list:     'List'
      },
      height: '100%',
      dayMaxEventRows: true,
      navLinks: true,
      editable: true,
      selectable: true,
      eventClick: function(info) {
        // change the border color just for fun
        info.el.style.borderColor = 'red';
      },
      eventDrop: function(info) {
        handleEventDragResize(info);
      },
      eventResize: function(info) {
        handleEventDragResize(info);
      },
      select: (info) => {
        const customer = prompt("Please enter a title");

        if (customer) {
          const requestData = {
            customer: customer,
            start: info.start.toJSON(),
            end: info.end.toJSON(),
            allDay: info.view.type === 'dayGridMonth'
          };

          axios
          .post(`${process.env.API_URL}/Recipes`, requestData)
          .then(response => {
            // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
            response.data.title = response.data.customer;
            response.data.url = `/Recipes/${response.data._id}`;
            console.log('matsinet-response.data:', response.data);
            store.Recipes.Recipes.push(response.data);
            console.log(`Event '${response.data.customer}' (${response.data._id}) has been created.`);
            calendar.addEvent(response.data);
            calendar.unselect();
          })
          .catch(error => {
            console.log("It puked", error);
          });
        } else {
          calendar.unselect();
        }
      },
      events: st.appointments || []
    });
    calendar.render();
  }

  if (st.view === "Recipes" && st.event) {
    const deleteButton = document.getElementById("delete-appointment");
    deleteButton.addEventListener("click", (event) => {
      deleteButton.disabled = true;
      console.log('matsinet-event.target.dataset.id:', event.target.dataset.id);

      if (confirm("Are you sure you want to delete this appointment")) {
        axios
        .delete(`${process.env.API_URL}/Recipes/${event.target.dataset.id}`)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          console.log(`Event '${response.data.customer}' (${response.data._id}) has been deleted.`);
          router.navigate('/Recipes');
        })
        .catch(error => {
          console.log("It puked", error);
        });
      } else {
        deleteButton.disabled = false;
      }
    });
  }
}

//  ADD ROUTER HOOKS HERE ...
router.hooks({
  before: (done, params) => {
    let page = "Home";
    let id = "";

    if (params && params.data) {
      page = params.data.page ? capitalize(params.data.page) : "Home";
      id = params.data.id ? params.data.id : "";
    }

    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=st.%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
        )
        .then((response) => {
          store.Home.weather = {};
          store.Home.weather.city = response.data.name;
          store.Home.weather.temp = response.data.main.temp;
          store.Home.weather.feelsLike = response.data.main.feels_like;
          store.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch((err) => console.log(err));
    } else if (page === "Recipes" && id === "") {
      axios
        .get(`${process.env.API_URL}/recipes`)
        .then((response) => {
          const events = response.data.map(event => {
            return {
              id: event._id,
              title: event.customer,
              start: new Date(event.start),
              end: new Date(event.end),
              url: `/recipes/${event._id}`,
              allDay: event.allDay || false
            };
          });
          store.Recipes.event = null;
          store.Recipes.appointments = events;
          done();
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    } else if (page === "Recipes" && id !== "") {
      axios
      .get(`${process.env.API_URL}/recipes/${id}`)
      .then((response) => {
        store.Recipes.Recipes = null;
        store.Recipes.event = {
          id: response.data._id,
          title: response.data.customer,
          start: new Date(response.data.start),
          end: new Date(response.data.end),
          url: `/recipes/${response.data._id}`
        };
        done();
      })
      .catch((error) => {
        console.log("It puked", error);
      });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(store.Home),
    ":page/:id": (params) => {
      let page = capitalize(params.data.page);
      render(store[page]);
    },
    ":page": (params) => {
      let page = capitalize(params.data.page);
      render(store[page]);
    }
  })
  .resolve();
