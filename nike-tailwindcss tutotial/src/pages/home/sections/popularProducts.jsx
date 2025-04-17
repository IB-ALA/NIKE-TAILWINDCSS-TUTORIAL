import PopularProductCard from "../../../components/popularProductCard";
import { products } from "../../../constants";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start sm:gap-5 gap-2">
        <h2 className="sm:text-4xl text-3xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="sm:mt-16 mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products?.length > 0 &&
          products.map((product) => (
            <PopularProductCard key={product?.name} {...product} />
          ))}
      </div>
    </section>
  );
}

export default PopularProducts;
