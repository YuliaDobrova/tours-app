import { Container, Grid } from "@mui/material";
import "./App.css";
import TourCard from "./components/TourCard";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Tour from "./pages/Tour";
// import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  );
}

export default App;

// <BrowserRouter>
//   <SearchAppBar />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/:id" element={<Tour />} />
//   </Routes>
// </BrowserRouter>
