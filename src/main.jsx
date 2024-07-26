import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// PROVIDER
import { Provider } from "react-redux";

// STORE
import { store } from "./components/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
