import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/index/Blogs";
import Contacts from "./components/index/Contacts";
import Home from "./components/index/Home";
import Restaurant from "./components/index/Restaurant";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { BodyTopFirstBackground } from "./components/layout/body-layout/BodyTopFirstBackground";
import { CreateProduct } from "./components/product/CreateProduct";
import { EditProduct } from "./components/product/EditProduct";
import ListProduct from "./components/product/ListProduct";
import CreateCustomer from "./components/customer/CreateCustomer";
import EditCustomer from "./components/customer/EditCustomer";
import ListCustomer from "./components/customer/ListCustomer";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BodyTopFirstBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<ListProduct />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<Contacts />} />

        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/product/list" element={<ListProduct />} />

        <Route path="/customer/create" element={<CreateCustomer />} />
        <Route path="/customer/edit/:id" element={<EditCustomer />} />
        <Route path="/customer/list" element={<ListCustomer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
