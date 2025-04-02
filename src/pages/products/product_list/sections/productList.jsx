import ProductItem from "../../../../components/productItem";
import { products } from "../../../../data/products";

function ProductList({}) {
  return (
    <section className="grid grid-cols-4 sm:grid-cols-2 gap-6">
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
