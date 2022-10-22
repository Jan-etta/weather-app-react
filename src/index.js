import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/Jan-etta/weather-app-react">
      Coded by Jan-etta{" "}
    </a>
  </StrictMode>
);
