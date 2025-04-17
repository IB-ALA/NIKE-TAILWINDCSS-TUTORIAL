import { star } from "../../assets/icons";
import CommonIMG from "../commonImg";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <CommonIMG
        imgSrc={imgURL}
        imgAlt={"Customer image"}
        imgClassName={"rounded-full object-cover"}
        imgHeight={120}
        imgWidth={120}
      />

      <p className="info-text mt-6 text-center max-w-sm">{feedback}</p>

      <div className="flex justify-center items-center mt-3 gap-2.5">
        <CommonIMG
          imgSrc={star}
          imgAlt={"ratings icon"}
          imgWidth={24}
          imgHeight={24}
          imgClassName={"object-contain m-0"}
        />

        <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
      </div>

      <h4 className="font-bold mt-1 font-palanquin text-3xl">{customerName}</h4>
    </div>
  );
}

export default ReviewCard;
