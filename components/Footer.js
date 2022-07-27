import html from "html-literal";

let year = new Date().getFullYear();

export default () => html`
  <footer id="footer">
    &copy;${year}
    <a href="https://linkedin.com/in/natehessler">Nate Hessler</a>
  </footer>
`;
