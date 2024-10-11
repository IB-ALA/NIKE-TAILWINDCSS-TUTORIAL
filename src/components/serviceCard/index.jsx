import CommonIMG from "../commonImg";

function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex flex-col flex-1 max-w-96 sm:w-[350px] sm:min-w-[350px] min-w-[250px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <CommonIMG
          imgAlt={label}
          imgWidth={24}
          imgHeight={24}
          imgSrc={imgURL}
        />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>

      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
}

export default ServiceCard;
