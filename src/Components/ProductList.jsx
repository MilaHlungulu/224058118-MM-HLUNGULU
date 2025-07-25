import ProductItem from "./ProductItem";

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <p style={{ color: "red", fontStyle: "italic", marginTop: "20px" }}>
        No products found.
      </p>
    );
  }

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)"
      }}
    >
      <thead style={{ backgroundColor: "#f7f7f7" }}>
        <tr>
          <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Category</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Price</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;

