new EventSource('/esbuild').addEventListener('change', () => location.reload());
"use strict";
(() => {
  // src/main.ts
  document.body.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
})();
//# sourceMappingURL=main.js.map
