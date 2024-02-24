import React from "react";

import { StudentDataPage } from "./Component/StudentDataPage";
import StudentsPage from "./Component/StudentsPage";
import Form from "./Component/Form";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/students",
    element: <StudentsPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <StudentDataPage>
        <RouterProvider router={router} />
      </StudentDataPage>
    </div>
  );
}

export default App;
