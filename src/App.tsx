import React, { useEffect } from "react";
import ProductList from "./pages/ProductList.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import "./App.css";
import Cart from "./pages/Cart.tsx";

const App: React.FC = () => {
  useEffect(() => {
    const trapFocus = (event: KeyboardEvent) => {
      const container = document.getElementById("app-container");
      if (!container) return;

      // Define focusable elements with keyboard navigation
      const focusableSelector = `
        a[href],
        button,
        textarea,
        input[type="text"],
        input[type="radio"],
        input[type="checkbox"],
        select,
        [tabindex]:not([tabindex="-1"])`;

      const focusableElements = Array.from(
        container.querySelectorAll(focusableSelector)
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (event.key === "Tab") {
        if (event.shiftKey) {
          // If Shift+Tab and the first element is focused, loop to the last
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // If Tab and the last element is focused, loop to the first
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    // Attach the event listener
    document.addEventListener("keydown", trapFocus);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("keydown", trapFocus);
    };
  }, []);

  return (
    <div id="app-container" tabIndex={-1}>
      <Router>
        {/* Navbar component */}
        <Navbar />
        <Routes>
          {/* Product list component */}
          <Route path="/" element={<ProductList />} />
          {/* Cart component */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* For notification */}
        <ToastContainer position="bottom-right" autoClose={2500} />
      </Router>
    </div>
  );
};

export default App;
