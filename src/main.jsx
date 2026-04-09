import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import NotFound from "./NotFound.jsx";
import CreateAccount from "./CreateAccount.jsx";
import ProtectsRoute from "./ProtectsRoute.jsx";
import FundTransfer from "./FundTransfer.jsx";
import Store from "./Store.jsx";
import { Provider } from "react-redux";
import Chack from "./Chack.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path : "/chack",
    element: <Chack/>
  },
  {
    path: "/dashboard",
    element: <ProtectsRoute />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/fundtransfer",
    element: <FundTransfer />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
);
