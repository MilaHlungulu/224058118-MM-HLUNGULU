
import { useState } from "react";
import "./App.css";

// Import components from Components folder
import SearchBar from "./Components/SearchBar";
import ProductList from "./Components/ProductList";

// Static product list
const products = [
  { id: 1, name: "Blue T-Shirt", category: "Clothing", price: 150, inStock: true },
  { id: 2, name: "Black Jeans", category: "Clothing", price: 300, inStock: false },
  { id: 3, name: "Red Sneakers", category: "Shoes", price: 500, inStock: true },
  { id: 4, name: "Wireless Mouse", category: "Accessories", price: 250, inStock: true },
  { id: 5, name: "Office Chair", category: "Furniture", price: 1200, inStock: false },
];

function App() {
  // ✅ useState hooks for filters
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onlyInStock, setOnlyInStock] = useState(false);

  // ✅ Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesStock = !onlyInStock || product.inStock;
    return matchesName && matchesCategory && matchesStock;
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fdfdfd",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <h1 style={{ color: "#0077cc" }}>🛒 Product Catalogue</h1>

      {/*  Filters Section */}
      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onlyInStock={onlyInStock}
        onInStockChange={setOnlyInStock}
      />

      {/* Product List to store filters products*/}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
