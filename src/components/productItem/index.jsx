import AddedToCart from "../addedToCart";
import CommonIMG from "../commonImg";
import ProductItemControls from "../productItemControls";

function ProductItem({ img, name, price, id, sizes }) {
  const inCart = id === "#54376";
  // use a better (complete) check..
  // const inCart = false;
  return (
    <div className="rounded-[20px] shadow-3xl bg-dark-1 dark:shadow-[#31313164] flex flex-col items-center p-3 font-montserrat">
      <div className="">
        <CommonIMG
          imgSrc={img}
          imgHeight={200}
          imgWidth={200}
          imgClassName={"my-6"}
        />
      </div>

      <p className="text-lg mt-2 text-coral-red">{name}</p>

      <p className="text-lg mt-2 text-coral-red">₵{price}</p>
      {/* max-w-96 mx-auto */}
      {inCart ? <AddedToCart /> : <ProductItemControls id={id} sizes={sizes} />}
    </div>
  );
}

export default ProductItem;
