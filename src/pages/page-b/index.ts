export function initPageB(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <custom-header>Header </custom-header>
  <div class="page--container">
    <div class="page--titulo">
      <custom-titulo >Necesitamos algunos datos más </custom-titulo>
    </div>
    <div class="contenedor-input">
      <div class="page--input">
        <custom-input label="Email"></custom-input>
      </div>
      <div class="page--input">
        <custom-input label="Comida Favorita"></custom-input>
      </div>
      <div class="page--input">
        <custom-input-select label="Alguna de estas tres opciones" value1="Piedra" value2="Papel" value3="Tijera"></custom-input-select>
      </div>          
      <div class="page--boton-comenzar"> 
        <custom-button >Comenzar</custom-button>
      </div>
      <div class="page--boton-volver"> 
        <custom-outlined >Volver</custom-outlined>
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
    
    .contenedor-input {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page--input {
      margin-top: 41px;
    }
    .page--boton-comenzar {
      margin-top: 54px;
    }
    .page--boton-volver {
      margin-top: 54px;
    }
    .page--footer {
      margin-top: 135px;
    }
  
 `;
  div.append(style);

  var botonComenzarEl = div.querySelector(".page--boton-comenzar");
  botonComenzarEl.addEventListener("click", () => {
    params.goTo("/thankyou");
  });

  var botonVolverEl = div.querySelector(".page--boton-volver");
  botonVolverEl.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
