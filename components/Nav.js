import html from "html-literal";
import logo from "../assets/bbq-grill-master-with-cutlery-and-sausage-HG8TB1.jpg";

export default links => html`
  <nav>
    <img class="logo"src="${logo}"/>
    <i class="fas class"></i>
    <ul class="hello nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
