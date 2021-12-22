export function init() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoOriginal = this.textContent;
      var style = document.createElement("style");
      style.textContent = `
        .root{
          display: flex;
          align-items: center;
          justify-content: center; 
          background-color: #9CBBE9;
          border-radius: 4px;
          Width: 312px;
          Height: 55px;  
          font-family: Roboto;
          font-weight: 500;
          font-size: 22px;
          }
  
        @media (min-width: 600px) {
              .root{
                Width: 353px;
              }
          }
          `;
      var shadow = this.attachShadow({ mode: "open" });

      shadow.append(style);
      var div = document.createElement("button");
      div.textContent = textoOriginal;
      div.classList.add("root");
      shadow.append(div);
    }
  }
  customElements.define("custom-button", Button);
}
