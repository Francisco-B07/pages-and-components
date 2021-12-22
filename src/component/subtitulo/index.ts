export function init() {
  class Subtitulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoOriginal = this.textContent;
      var style = document.createElement("style");
      style.textContent = `
        .root{
            font-weight: 700;
            font-size: 38px;

          }        
          `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.append(style);
      var subtitulo = document.createElement("h2");
      subtitulo.classList.add("root");
      subtitulo.textContent = textoOriginal;
      shadow.append(subtitulo);
    }
  }
  customElements.define("custom-subtitulo", Subtitulo);
}
