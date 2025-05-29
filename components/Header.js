import html from "html-literal";

export default state => html`
  <header>
    <div class="header">
      <h1><i class="fas fa-fire"></i> ${state.header}</h1>
    </div>
  </header>
`;
