function ProductInfo({ productName, productPrice, productDescription }) {
  return (
    <section className="flex flex-col font-montserrat sm:p-5 p-3 border border-slate-100 dark:border-slate-700 rounded-xl">
      <p className="text-coral-red md:text-[40px] sm:text-[30px] text-[22px]">
        {productName}
      </p>
      <p className="sm:mb-8 mb-6 text-coral-red md:text-[30px] sm:text-[23px] text-[18px]">
        ₵{productPrice}
      </p>
      <p className="xl:text-[18px] sm:text-[16px] text-[12px] text-slate-gray text-justify">
        {productDescription}
      </p>
    </section>
  );
}

export default ProductInfo;
