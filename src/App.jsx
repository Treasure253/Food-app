import { Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Delivery from "./components/Delivery";
import Pickup from "./components/Pickup";

function App() {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const foodRef = useRef(null);

  // 🔍 handle search click
  const handleSearch = () => {
    setSearch(searchInput);

    // Scroll
    if (search.trim() !== "") {
      foodRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HeadlineCards />
              <div ref={foodRef}>
                <Food search={search} />
              </div>
              <Category />
            </>
          }
        />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/pickup" element={<Pickup />} />
      </Routes>
    </div>
  );
}
export default App;
