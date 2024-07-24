<h1>Creating Reusable Web Components with Vanilla JavaScript

<h2>Directory :

<h3>vanillaWebComponents<br>
|-- components/hello-world.js<br>
|-- components/task-manager.js<br>
|-- components/user-card.js<br>
|-- index.html</h3>

<h2>HTMLElement: The base class for all HTML elements. Custom elements extend HTMLElement to define new types of HTML elements.</h2>
<h2>attachShadow: A method used to create and attach a shadow DOM to an element. It takes a parameter ('open' or 'closed') to define the visibility of the shadow DOM.</h2>
<h2>getAttribute: A method inherited from Element that retrieves the value of a specified attribute on an element.</h2>
<h2>ShadowRoot: The interface representing the shadow DOM attached to an element. It provides methods and properties to interact with the shadow DOM, such as querying elements within it.</h2>
<h2>define: A method from customElements used to register a new custom element with a specific tag name and class. This allows the use of custom elements in HTML.</h2>
<h2>connectedCallback: A lifecycle method that is called when the custom element is added to the DOM. It is used to perform setup tasks.</h2>
<h2>disconnectedCallback: A lifecycle method that is called when the custom element is removed from the DOM. It is used to clean up or remove event listeners.</h2>
<h2>attributeChangedCallback: A lifecycle method that is called when an observed attribute changes. It allows the element to react to changes in attributes.</h2>
<h2>adoptedCallback: A lifecycle method that is called when the custom element is moved to a new document (e.g., when the document is imported)..</h2>
