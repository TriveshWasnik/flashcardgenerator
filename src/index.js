import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyFlashcard from "./pages/MyFlashcard";
import FlashcardDetails from "./pages/FlashcardDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

/* To Set the component on React Menu */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/my-flashcard",
        element: <MyFlashcard />,
      },
      {
        path: "/flash-card-detail/:title",
        element: <FlashcardDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
