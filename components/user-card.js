class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .card {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          max-width: 200px;
        }
        .name {
          font-weight: bold;
        }
      </style>
      <div class="card">
        <div class="name">${this.getAttribute("name")}</div>
        <div class="email">${this.getAttribute("email")}</div>
      </div>
    `;
  }
}

customElements.define("user-card", UserCard);
