import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "./i18n.js";
import { I18nextProvider } from "react-i18next";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(

    <I18nextProvider i18n={i18n}>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
      </RecoilRoot>
    </I18nextProvider>

);
