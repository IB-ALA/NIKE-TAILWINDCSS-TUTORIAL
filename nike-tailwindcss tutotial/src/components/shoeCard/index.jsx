import CommonIMG from "../commonImg";

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  function handleClick() {
    if (bigShoeImg !== imgURL?.bigShoe) {
      changeBigShoeImage(imgURL?.bigShoe);
    }
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL?.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <CommonIMG
          imgSrc={imgURL?.thumbnail}
          imgAlt={"shoe collection"}
          imgHeight={103}
          imgWidth={127}
          imgClassName={"object-contain"}
        />
      </div>
    </div>
  );
}

export default ShoeCard;
