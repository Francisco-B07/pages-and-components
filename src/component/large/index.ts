export function init() {
  class Large extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoOriginal = this.textContent;
      var style = document.createElement("style");
      style.textContent = `
          .root{
              font-weight: 500;
              font-size: 22px;   
              padding: 20px;  
            }        
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.append(style);
      var large = document.createElement("h3");
      large.classList.add("root");
      large.textContent = textoOriginal;
      shadow.append(large);
    }
  }
  customElements.define("custom-large", Large);
}
