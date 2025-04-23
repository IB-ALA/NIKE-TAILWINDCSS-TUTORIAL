function Spinner({ width, height }) {
  return (
    <div
      // [#3498db]
      className={`border-4 border-[#0000001a] border-t-4 border-t-coral-red rounded-full ${
        width || "w-8"
      } ${height || "h-8"} spinner`}
    ></div>
  );
}

export default Spinner;
