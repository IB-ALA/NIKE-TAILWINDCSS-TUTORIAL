import { useEffect, useState } from "react";
import CommonIMG from "../../../../components/commonImg";
import ProductVarietyCard from "../../../../components/productVarietyCard";

function ProductImages({ defaultImage, varieties }) {
  const [bigImage, setBigImage] = useState(defaultImage);
  const [chosenVariety, setChosenVariety] = useState("default");

  useEffect(() => {
    console.log({ chosenVariety });
  }, [chosenVariety]);

  useEffect(() => {
    setBigImage(defaultImage);
    console.log({ defaultImage });
  }, []);

  // console.log({ varieties });
  // console.log({ bigImage });

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex justify-center items-center max-xl:py-10 py-10 bg-primary bg-hero bg-cover bg-center mb-6 shadow-3xl rounded-xl">
          <CommonIMG
            imgSrc={bigImage}
            imgAlt={"shoe collection"}
            imgWidth={410}
            imgHeight={300}
            imgClassName={"relative z-10 object-contain"}
          />
        </div>

        {varieties?.length > 0 && (
          <div className="flex flex-col border-t border-stone-200 border-dashed items-start justify-around mt-2 py-3 flex-wrap">
            <p className="font-montserrat text-2xl text-coral-red">Varieties</p>

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
