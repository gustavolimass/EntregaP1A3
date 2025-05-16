import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TelaInicial from "./pages/TelaInicial/TelaInicial.jsx";
import LoginCliente from "./pages/LoginCliente/LoginCliente.jsx";
import LoginRestaurante from "./pages/LoginRestaurante/LoginRestaurante.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaInicial/>,
  },
  {
    path: "/cliente/login",
    element: <LoginCliente/>,
  },
  {
    path: "/restaurante/login",
    element: <LoginRestaurante/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
