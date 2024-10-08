import CommonButton from "../../../components/commonButton";
import { arrowRight } from "../../../assets/icons";
import { shoes, statistics } from "../../../constants";
import { bigShoe1 } from "../../../assets/images";
import CommonIMG from "../../../components/commonImg";
import ShoeCard from "../../../components/shoeCard";
import { useState } from "react";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <CommonButton
          className={
            "flex justify-center items-center gap-2 font-montserrat leading-none bg-coral-red px-7 py-4 rounded-full text-white"
          }
          btnText={"Shop now"}
          afterTextImg={arrowRight}
          imgClassName={"ml-2 rounded-full w-5 h-5"}
          imgAlt={"Arrow right icon"}
          handleOnClick={""}
        />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.length > 0
            ? statistics.map((stat) => (
                <div key={stat.label} className="">
                  <p className="text-4xl font-palanquin font-bold">
                    {stat.value}
                  </p>

                  <p className="font-montserrat text-slate-gray leading-7">
                    {stat.label}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <CommonIMG
          imgSrc={bigShoeImg}
          imgAlt={"show collection"}
          imgWidth={610}
          imgHeight={500}
          imgClassName={"relative z-10 object-contain"}
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes?.length > 0
            ? shoes.map((shoe, index) => (
                <div className="" key={index}>
                  <ShoeCard
                    key={shoe}
                    imgURL={shoe}
                    changeBigShoeImage={(bigShoeURL) => {
                      setBigShoeImg(bigShoeURL);
                    }}
                    bigShoeImg={bigShoeImg}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

export default Hero;