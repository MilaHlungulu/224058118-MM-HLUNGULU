// src/Components/SearchBar.jsx

function SearchBar({
  searchText,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onlyInStock,
  onInStockChange
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* 🔍 Search input */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />

      {/* 🔽 Category dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      >
        <option value="All">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
      </select>

      {/* ✅ In-stock checkbox */}
      <label style={{ fontSize: "14px" }}>
        <input
          type="checkbox"
          checked={onlyInStock}
          onChange={(e) => onInStockChange(e.target.checked)}
          style={{ marginRight: "5px" }}
        />
        Only show in-stock items
      </label>
    </div>
  );
}

export default SearchBar;

