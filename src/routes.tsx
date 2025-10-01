import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./layouts/default";
import { HomePage } from "./pages/home";
import { NewCredit } from "./pages/new-credit";
import { MyCredits } from "./pages/my-credits";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/new-credit",
        element: <NewCredit />,
      },
      {
        path: "/my-credits",
        element: <MyCredits />,
      },
    ],
  },
]);
