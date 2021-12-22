import { initPageA } from "./pages/page-a";
import { initPageB } from "./pages/page-b";
import { initPageC } from "./pages/page-c";
const routes = [
  {
    path: /\/welcome/,
    component: initPageA,
  },
  {
    path: /\/step-1/,
    component: initPageB,
  },
  {
    path: /\/thankyou/,
    component: initPageC,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
