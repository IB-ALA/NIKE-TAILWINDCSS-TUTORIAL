import { shoe8 } from "../../../assets/images";
import CommonButton from "../../../components/commonButton";
import CommonIMG from "../../../components/commonImg";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you <span className="text-coral-red">super quality</span>{" "}
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footware
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to details and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <CommonButton
            className={
              "flex justify-center items-center gap-2 font-montserrat leading-none bg-coral-red px-7 py-4 rounded-full text-white"
            }
            btnText={"View details"}
            handleOnClick={""}
          />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <CommonIMG
          imgSrc={shoe8}
          imgAlt={"shoe"}
          imgHeight={522}
          imgWidth={570}
          imgClassName={"object-contain"}
        />
      </div>
    </section>
  );
}

export default SuperQuality;
