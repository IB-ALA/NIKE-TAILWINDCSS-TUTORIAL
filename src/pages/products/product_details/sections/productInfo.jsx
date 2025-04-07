function ProductInfo({ productName, productPrice, productDescription }) {
  return (
    <section className="flex flex-col font-montserrat p-5 border border-slate-100 rounded-xl">
      <p className="text-coral-red text-[40px]">{productName}</p>
      <p className="mb-8 font-mono text-coral-red text-[30px]">
        ₵{productPrice}
      </p>
      <p className="text-2xl text-slate-gray text-justify">
        {productDescription}
      </p>
    </section>
  );
}

export default ProductInfo;
