function ProductInfo({ productName, productPrice, productDescription }) {
  return (
    <section className="flex flex-col font-montserrat p-5 border border-slate-100 dark:border-slate-700 rounded-xl">
      <p className="text-coral-red md:text-[40px] text-[30px]">{productName}</p>
      <p className="mb-8 font-mono text-coral-red md:text-[30px] text-[23px]">
        ₵{productPrice}
      </p>
      <p className="xl:text-[18px] sm:text-[16px] text-[14px] text-slate-gray text-justify">
        {productDescription}
      </p>
    </section>
  );
}

export default ProductInfo;
