import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsListPage from "../pages/ProductsListPage";

export default function Navigation() {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route path="/" Component={ProductsListPage} />
      </Routes>
    </BrowserRouter>
  );
}
