function ProductItem({ product }) {
  return (
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      <td style={{ padding: "10px" }}>{product.name}</td>
      <td style={{ padding: "10px" }}>{product.category}</td>
      <td style={{ padding: "10px" }}>R{product.price}</td>
      <td style={{ padding: "10px", color: product.inStock ? "green" : "red" }}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </td>
    </tr>
  );
}

export default ProductItem;

