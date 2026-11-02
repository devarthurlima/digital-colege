import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/produtos"
          element={
            <Layout>
              <ProductListingPage />
            </Layout>
          }
        />
        <Route
          path="/produtos/:id"
          element={
            <Layout>
              <ProductViewPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
