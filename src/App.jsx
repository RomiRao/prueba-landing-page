import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/products" element={} /> */}
            {/* <Route path="/contact" element={} /> */}

            {/* <Route path="/*" element={<ErrorPage />} /> */}
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
