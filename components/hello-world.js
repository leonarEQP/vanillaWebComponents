class HelloWordld extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({
      mode: "open",
    });

    shadow.innerHTML = `<style>
      h1 {
      color: blue;
      }
      </style>
      <h1>Hello, World</h1>
      `;
  }
}

customElements.define("hello-world", HelloWordld);
