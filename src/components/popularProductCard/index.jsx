import { star } from "../../assets/icons";
import CommonIMG from "../commonImg";

function PopularProductCard({ imgURL, name, price }) {
  // you can take it to the next level and
  // make the card clickable and redirect
  // to products details page

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-fit mx-auto">
      <CommonIMG imgSrc={imgURL} imgAlt={name} imgWidth={280} imgHeight={280} />

      <div className="mt-8 flex justify-start gap-2.5">
        <CommonIMG
          imgSrc={star}
          imgAlt={"rating"}
          imgWidth={24}
          imgHeight={24}
        />
        <p className="leading-normal text-xl font-montserrat text-slate-gray">
          {4.5}
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>

      <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
