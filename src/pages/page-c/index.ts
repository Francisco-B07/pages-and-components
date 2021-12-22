export function initPageC(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <custom-header>Header </custom-header>
    <div class="page--container">
      <div class="page--titulo">
        <custom-titulo >Gracias </custom-titulo>
      </div>
      <div class="page--large">
        <custom-large >Toda la información que nos brindaste es muy importante </custom-large>
      </div>
      <div class="contenedor-input">
              
        <div class="page--boton"> 
          <custom-button >De Nada</custom-button>
        </div>
        
      </div>
    </div>
    <div class="page--footer">
      <custom-footer >Footer</custom-footer>
    </div>
    `;

  var style = document.createElement("style");
  style.textContent = `
      .page--container {
        padding: 30px;
      }
      .page--titulo {
        margin-top: 41px;
      }
      .page--large{
        margin-top: 25px;
      }
      .contenedor-input {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .page--boton {
        margin-top: 54px;
      }
      
      .page--footer {
        margin-top: 312px;
      }
    
   `;
  div.append(style);

  var botonEl = div.querySelector(".page--boton");
  botonEl.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
