import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/auth/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

serviceWorker.unregister();
