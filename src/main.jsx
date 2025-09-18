import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const Page = () => {
  return <App />;
};
(
  <StrictMode>
    <App />
  </StrictMode>
),
  createRoot(document.getElementById("root")).render(<Page />);
