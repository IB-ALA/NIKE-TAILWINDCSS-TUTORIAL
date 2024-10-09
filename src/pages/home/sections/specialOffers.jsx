import { arrowRight } from "../../../assets/icons";
import { offer } from "../../../assets/images";
import CommonButton from "../../../components/commonButton";
import CommonIMG from "../../../components/commonImg";

function SpecialOffers() {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <CommonIMG
          imgSrc={offer}
          imgAlt={"special offers image"}
          imgHeight={687}
          imgWidth={773}
          imgClassName={"object-container w-full"}
        />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">special</span> offer
        </h2>

        <p className="mt-4 w-full info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to credible savings, we
          offer unparalleled value that sets us apart
        </p>

        <p className="info-text mt-6 w-full">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 gap-4 flex flex-wrap">
          <CommonButton
            className={
              "flex justify-center items-center gap-2 font-montserrat leading-none bg-coral-red px-7 py-4 rounded-full text-white"
            }
            btnText={"Shop Now"}
            afterTextImg={arrowRight}
            imgClassName={"ml-2 rounded-full w-5 h-5"}
            imgAlt={"Arrow right icon"}
            handleOnClick={""}
          />
          <CommonButton
            className={
              "flex justify-center items-center gap-2 font-montserrat leading-none border-2 border-slate-gray px-7 py-4 rounded-full text-slate-gray"
            }
            btnText={"Learn more"}
            handleOnClick={""}
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
