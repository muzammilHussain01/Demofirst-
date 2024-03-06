import React from "react";

import StudentDataPage from "./Component/StudentDataPage";
import Form from "./Component/Form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFoundPage from "./Component/PageNotFoundPage";
import MedicineList from "./Component/MedicineList";
import Tabel from "./Component/Tabel";
//yaha par path define hai har page ke
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Form />,
//   },
//   {
//     path: "/students",
//     element: <StudentDataPage />,
//   },
//   {
//     path: "*",
//     element: <PageNotFoundPage />,
//   },
// ]);
function App() {
  return (
    <>
      <Tabel />
      {/* <MedicineList /> */}
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
