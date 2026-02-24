import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./App";
import Head from "./Head";

export function render(url) {
  const html = renderToString(
    <StaticRouter location={`/${url}`}>
      <App />
    </StaticRouter>
  );
  const head = renderToString(
    <StaticRouter location={`/${url}`}>
      <Head />
    </StaticRouter>
  );
  return { html, url, head };
}
