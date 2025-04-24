function Spinner({ extraClasses }) {
  return (
    <div
      // [#3498db]
      className={`border-4 border-[#0000001a] border-t-4 border-t-coral-red rounded-full ${
        extraClasses || "w-8 h-8"
      } spinner`}
    ></div>
  );
}

export default Spinner;
