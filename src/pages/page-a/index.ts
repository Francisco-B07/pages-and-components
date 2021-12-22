export function initPageA(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <custom-header>Header </custom-header>
  <div class="page--container">
    <div class="page--titulo">
      <custom-titulo >Te damos la bienvenida a esta página </custom-titulo>
    </div>
    <div class="page--parrafo">
      <custom-parrafo >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem? </custom-parrafo>
    </div>
    <div class="page--large">
      <custom-large >Para continuar ingresá tu nombre </custom-large>
    </div>
    <div class="contenedor-input">
      <div class="page--input">
        <custom-input placeholder="Ingresá tu nombre"  label="Nombre"></custom-input>
      </div>
      <div class="page--boton"> 
        <custom-button >Comenzar</custom-button>
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
    .page--parrafo {
      margin-top: 21px;
    }
    .page--large {
      margin-top: 73px;
    }
    .contenedor-input {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page--input {
      margin-top: 29px;
    }
    .page--boton {
      margin-top: 16px;
    }
    .page--footer {
      margin-top: 113px;
    }
  
 `;

  div.append(style);
  var botonEl = div.querySelector(".page--boton");

  botonEl.addEventListener("click", () => {
    params.goTo("/step-1");
  });

  return div;
}
