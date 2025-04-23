import ProductItem from "../../../../components/productItem";

function ProductList({ products }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(({ id, image, name, price, sizes }) => (
        <ProductItem
          key={id}
          img={image}
          name={name}
          price={price}
          id={id}
          sizes={sizes}
        />
      ))}
    </section>
  );
}

export default ProductList;
