import { initRouter } from "./router";
import { init as initHeader } from "./component/header";
import { init as initTitulo } from "./component/titulo";
import { init as initParrafo } from "./component/parrafo";
import { init as initLarge } from "./component/large";
import { init as initInput } from "./component/input";
import { init as initButton } from "./component/button";
import { init as initFooter } from "./component/footer";
import { init as initSelect } from "./component/input-select";
import { init as initOutlined } from "./component/outlined";

(function () {
  initHeader();
  initTitulo();
  initParrafo();
  initLarge();
  initInput();
  initButton();
  initFooter();
  initSelect();
  initOutlined();
  const root = document.querySelector("#root");
  initRouter(root);
})();
