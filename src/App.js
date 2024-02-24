import React from "react";

import StudentDataPage from "./Component/StudentDataPage";
import Form from "./Component/Form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFoundPage from "./Component/PageNotFoundPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/students",
    element: <StudentDataPage />,
  },
  {
    path: "*",
    element: <PageNotFoundPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
