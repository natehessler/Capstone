import html from "html-literal";

export default links => html`
  <nav>
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
