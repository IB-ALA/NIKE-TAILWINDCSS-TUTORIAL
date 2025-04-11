import { useProduct } from "../../hooks/useProduct";
import CommonIMG from "../commonImg";
import { formatCurrency } from "../../shared";

function OrderItemCard({ orderItem }) {
  const { getProduct } = useProduct();

  const { id, quantity, size, color } = orderItem;
  const item = { ...getProduct(id), size, color, quantity };

  function getItemVarietyImg(color) {
    let img;
    item?.productDetails?.colors?.forEach((variety) => {
      if (variety?.name === color) {
        img = variety?.image;
      }
    });
    if (img) {
      return img;
    }
  }

  return (
    <div className="flex mt-1 pt-1 border-t dark:border-t-slate-800  first:mt-0 first:pt-0 first:border-t-0">
      {item ? (
        <>
          <div className="max-h-20 max-w-20 h-20 flex justify-center items-center pr-2 border-r border-r-[#e6e6e6] dark:border-r-slate-800 mr-3">
            <CommonIMG
              imgSrc={
                color === "default" ? item?.image : getItemVarietyImg(color)
              }
              imgAlt={`${item?.name} image`}
              imgHeight={80}
              imgWidth={80}
              imgClassName={"object-contain max-w-full max-h-full"}
            />
          </div>

          <div className="flex justify-between h-fit w-full text-coral-red">
            <div className="flex flex-col justify-center mr-4">
              <p className="text-[16px] font-bold">{item?.name}</p>

              <p className="text-[16px] font-bold text-[#808080]">
                ₵{formatCurrency(item?.price)}
              </p>
              {size ? (
                <p className="text-[16px] font-bold text-[#808080]">
                  <span className="font-normal text-[14px]">Size:</span> {size}
                </p>
              ) : null}
            </div>

            <div className="flex items-center text-[18px]">
              <p className="border-l dark:border-l-slate-800 py-1 pl-2 pr-1">
                X{quantity}
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default OrderItemCard;
