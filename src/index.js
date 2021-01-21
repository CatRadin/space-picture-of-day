import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SimpleReactLightbox from 'simple-react-lightbox'
import theme from "./Theme";

ReactDOM.render(
    <React.StrictMode>
      <SimpleReactLightbox>
      <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
  );