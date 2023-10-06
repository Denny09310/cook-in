import { createRoot } from "react-dom/client";
import { Provider as ReduxStoreProvider } from "react-redux";

import App from "./app";
import { store } from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ReduxStoreProvider store={store}>
    <App />
  </ReduxStoreProvider>
);
