import AddedToCart from "../../../../components/addedToCart";
import ProductItemControls from "../../../../components/productItemControls";
import { useCart } from "../../../../hooks/useCart";

function ProductControls({ productId, productSizes }) {
  const { isProductInCart } = useCart();
  return (
    <div>
      {isProductInCart(productId) ? (
        <AddedToCart forWishList={true} />
      ) : (
        <ProductItemControls
          id={productId}
          sizes={productSizes}
          useSpaceBetween={true}
        />
      )}
    </div>
  );
}

export default ProductControls;
