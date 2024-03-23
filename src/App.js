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
import BasicTable from "./Component/com/Table";
//import AlertDialogSlide from "./Component/Delete";
import MyForm from "./Component/validation/MyForm";
import WithMaterialUI from "./Component/validation/try";
//yaha par path define hai har page ke
const router = createBrowserRouter([
  {
    path: "/",
    element: <AddMedcinePage />,
  },
  {
    path: "/addMedcinePage",
    element: <MyForm />,
  },
  {
    path: "/try",
    element: <WithMaterialUI />,
  },
  {
    path: "/myForm",
    element: <BasicTable />,
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
