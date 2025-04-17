import { useEffect, useState } from "react";
import CommonIMG from "../../../../components/commonImg";
import ProductVarietyCard from "../../../../components/productVarietyCard";

function ProductImages({ defaultImage, varieties }) {
  const [bigImage, setBigImage] = useState(null);
  const [chosenVariety, setChosenVariety] = useState("default");

  // useEffect(() => {
  //   console.log({ chosenVariety });
  // }, [chosenVariety]);

  // useEffect(() => {
  //   setBigImage(defaultImage);
  // }, [location]);

  useEffect(() => {
    setBigImage(defaultImage);
    console.log({ bigImage });
  }, [defaultImage]);

  // console.log({ varieties });
  // console.log({ bigImage });

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex justify-center items-center md:py-10 py-3 bg-primary bg-hero bg-cover bg-center mb-6 shadow-3xl rounded-xl">
          <CommonIMG
            imgSrc={bigImage}
            imgAlt={"shoe collection"}
            imgWidth={410}
            imgHeight={300}
            imgClassName={
              "relative object-contain sm:w-[410px] sm:h-[300px] w-[250px] h-[170px]"
            }
          />
        </div>

        {varieties?.length > 0 && (
          <div className="flex flex-col border-t border-stone-200 dark:border-t-slate-800 border-dashed items-start justify-around sm:mt-2 py-3 flex-wrap">
            <p className="font-montserrat sm:text-2xl text-lg text-coral-red">
              Varieties
            </p>

            <div className="flex items-center mt-2 justify-around flex-wrap">
              {varieties.map((variety, index) => (
                <ProductVarietyCard
                  key={index}
                  img={variety?.image}
                  name={variety?.name}
                  bigImg={bigImage}
                  setBigImg={setBigImage}
                  setChosenVariety={setChosenVariety}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImages;
