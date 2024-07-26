# Creating Reusable Web Components with Vanilla JavaScript

## This is not a tutorial; it’s simply a basic example of individualized components without using any framework—just pure JavaScript and the methods of the HTMLElement interface

## Directory :

        |-- components/hello-world.js<br>
        |-- components/task-manager.js<br>
        |-- components/user-card.js<br>
        |-- index.html

### $\color{orange}{\textsf{\normalsize HTMLElement:}}$ The base class for all HTML elements. Custom elements extend HTMLElement to define new types of HTML elements.

### $\color{orange}{\textsf{\normalsize attachShadow:}}$ A method used to create and attach a shadow DOM to an element. It takes a parameter ('open' or 'closed') to define the visibility of the shadow DOM.

### $\color{orange}{\textsf{\normalsize getAttribute:}}$ A method inherited from Element that retrieves the value of a specified attribute on an element.

### $\color{orange}{\textsf{\normalsize ShadowRoot:}}$ The interface representing the shadow DOM attached to an element. It provides methods and properties to interact with the shadow DOM, such as querying elements within it.

### $\color{orange}{\textsf{\normalsize define:}}$ A method from customElements used to register a new custom element with a specific tag name and class. This allows the use of custom elements in HTML.

### $\color{orange}{\textsf{\normalsize connectedCallback:}}$ A lifecycle method that is called when the custom element is added to the DOM. It is used to perform setup tasks.

### $\color{orange}{\textsf{\normalsize disconnectedCallback:}}$ A lifecycle method that is called when the custom element is removed from the DOM. It is used to clean up or remove event listeners.

### $\color{orange}{\textsf{\normalsize attributeChangedCallback:}}$ A lifecycle method that is called when an observed attribute changes. It allows the element to react to changes in attributes.

### $\color{orange}{\textsf{\normalsize adoptedCallback}}$ : A lifecycle method that is called when the custom element is moved to a new document (e.g., when the document is imported).

### For more info visit [Web Components](https://www.webcomponents.org/)
