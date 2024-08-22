import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./components/Sections/Home/Home";
import Products from "./components/Sections/Products/Products";
import Contact from "./components/Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Products />} />
            <Route path="/contact" element={<Contact />} />

            {/* <Route path="/*" element={<ErrorPage />} /> */}
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
