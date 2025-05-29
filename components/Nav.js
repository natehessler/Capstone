import html from "html-literal";
import logo from "../assets/bbq-grill-master-with-cutlery-and-sausage-HG8TB1.jpg";

export default links => html`
  <nav>
    <div class="brand">
      <img class="logo" src="${logo}" alt="Grill Master Logo"/>
    </div>
    <i class="fas fa-bars" aria-label="Toggle menu"></i>
    <ul class="hidden nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/#/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
