
export default function TravelSection() {
  return (
    <div className="bg-[#1A1A1A] text-white min-h-screen">
      <div className="container mx-auto md:px-28 px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/image2.png"
                alt="Travel lifestyle"
                width={600}
                height={600}
                className="w-[30rem] h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#FF0000]">Exploring</span> is thrilling, but inspiring travels can be rewarding
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Launch your GUMO travel platform, highlight your favorite destinations, turn your escapades into bookable
              ventures, earn money for every booking made through your curated adventures and fuel your future travels.
              Lets Gumo!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

