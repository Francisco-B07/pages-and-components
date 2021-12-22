export function init() {
  class InputSelect extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoLabel = this.getAttribute("label");
      const nameInput = this.getAttribute("name");
      const value1 = this.getAttribute("value1");
      const value2 = this.getAttribute("value2");
      const value3 = this.getAttribute("value3");

      var style = document.createElement("style");
      style.textContent = `
        .input{
            border: 2px solid #000000;
            border-radius: 4px;
            Width: 312px;
            Height: 55px;
            font-family: Roboto;
            font-size: 18px;       
            margin-top: 5px              
          }

          @media (min-width: 600px) {
            .input{
              Width: 353px;
            }
          }
          
          .label{
          font-family: Roboto;
          font-size: 18px;
          display: block;
          
        }
       `;
      var shadow = this.attachShadow({ mode: "open" });
      shadow.append(style);

      var labelEL = document.createElement("label");
      labelEL.textContent = textoLabel;
      labelEL.classList.add("label");

      const inputEL = document.createElement("select");
      inputEL.name = nameInput;
      inputEL.classList.add("input");
      inputEL.innerHTML = `
     
      <option value=${value1}>${value1}</option>
      <option value=${value2}>${value2}</option>
      <option value=${value3}>${value3}</option>
      
      
      `;

      shadow.appendChild(labelEL);
      shadow.appendChild(inputEL);
    }
  }
  customElements.define("custom-input-select", InputSelect);
}
