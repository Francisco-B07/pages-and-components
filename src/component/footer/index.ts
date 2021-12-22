export function init() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoOriginal = this.textContent;

      var style = document.createElement("style");
      style.textContent = `
        .root{
            background-color: #FFA0EA;
            Height:233px;
            width: 100vw;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;          
          }        
  
          `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.append(style);
      var div = document.createElement("div");
      div.classList.add("root");
      div.textContent = textoOriginal;
      shadow.append(div);
    }
  }
  customElements.define("custom-footer", Footer);
}
