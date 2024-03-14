import React from "react";

import StudentDataPage from "./Component/StudentDataPage";
import Form from "./Component/Form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFoundPage from "./Component/PageNotFoundPage";
import MedicineList from "./Component/MedicineList";
import Tabel from "./Component/Tabel";
import MUItab from "./Component/MUItab";
import Table from "./Component/com/Table";
import AddMedcinePage from "./Component/com/AddMedcinePage";
//import AlertDialogSlide from "./Component/Delete";

//yaha par path define hai har page ke
const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
  },
  {
    path: "/addMedcinePage",
    element: <AddMedcinePage />,
  },
  {
    path: "/table",
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
  return (
    <>
      {/* <Table /> */}
      {/* <AlertDialogSlide /> */}
      {/* <MUItab /> */}
      {/* <Tabel /> */}
      {/* <MedicineList /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
