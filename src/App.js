import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import routes from "./helper/rutas";
import CartProvider from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import { Home, Categories, Detail, Cart, NotFound } from "./pages";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          {/* <ModalCart /> */}
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.categorias()} element={<Categories />} />
            <Route path={routes.detalle()} element={<Detail />} />
            <Route path={routes.cart} element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
