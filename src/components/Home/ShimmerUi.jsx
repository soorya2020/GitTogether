const ShimmerUi = ({ height = "h-96" }) => (
  <div className={`w-full ${height} animate-pulse`}>
    <div className="h-full bg-base-00 rounded-3xl backdrop-blur-sm">
      <div className="h-16 bg-base-300 rounded-t-3xl" />
      <div className="p-10 space-y-6">
        <div className="h-12 bg-base-300 rounded-2xl w-3/4 mx-auto" />
        <div className="h-12 bg-base-300 rounded-xl w-5/6 mx-auto" />
        <div className="h-12 bg-base-300 rounded-xl w-4/6 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-base-300 rounded-3xl" />
          ))}
        </div>
        <div className="h-12 bg-base-300 rounded-xl w-4/6 mx-auto" />

      </div>
    </div>
  </div>
);

export default ShimmerUi;
