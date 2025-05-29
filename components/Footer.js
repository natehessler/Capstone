import html from "html-literal";

export default () => html`
  <footer id="footer">
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Grill Master | Created by <a href="https://linkedin.com/in/natehessler" target="_blank">Nate Hessler</a></p>
    </div>
  </footer>
`;
