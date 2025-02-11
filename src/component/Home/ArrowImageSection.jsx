
function ArrowImage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center px-4 py-16">
      {/* Top text */}
      <div className="text-center mb-8">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          but wait there is <span className="text-red-500">more!</span>
        </p>
      </div>

      {/* Main heading */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Traveler&apos;s Command Center: <span className="text-red-500">Link</span> Your World, Unleash Your Adventure!
        </h1>
      </div>

      {/* Description */}
      <div className="text-center max-w-4xl">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          Link your Instagram, Twitter, website, shop, videos, music, podcasts, events, and beyond. Seamlessly unite them all in a dynamic bio landing page tailored for conversion
        </p>
      </div>
      <div className="text-center">
        <img
          src="/image4.png" // This path assumes the image is located in the public folder
          alt="Traveler's Command Center"
          className="max-w-full h-auto mt-8"
        />
      </div>
    </div>
  );
}
export default ArrowImage;