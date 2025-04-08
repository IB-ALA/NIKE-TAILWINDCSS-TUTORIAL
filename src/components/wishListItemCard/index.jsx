import ProductItem from "../productItem";

function WishListItemCard({ item }) {
  return (
    <div>
      <ProductItem
        id={item?.id}
        img={item?.image}
        price={item?.price}
        name={item?.name}
        sizes={item?.sizes}
        forWishList={true}
      />
    </div>
  );
}

export default WishListItemCard;
