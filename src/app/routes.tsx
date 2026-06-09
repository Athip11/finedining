import { createBrowserRouter, Outlet } from "react-router";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Reservations from "./pages/Reservations";

function Root() {
  return (
    <div
      className="app-shell flex flex-col min-h-screen"
      style={{ background: "#131313" }}
    >
      <NavBar />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "menu", Component: Menu },
      { path: "contact", Component: Contact },
      { path: "order", Component: Order },
      { path: "reservations", Component: Reservations },
    ],
  },
]);
