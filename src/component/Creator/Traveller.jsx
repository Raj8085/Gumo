const Traveller = () => {
  return (
    <div className="bg-[#1A1A1A] ">
      <main className="container mx-auto md:px-40 px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            Embark on <span className="text-[#FF0000]">Influencer-Inspired</span> Travel Adventures!
              <span className="block">
                Share the <span className="text-[#FF0000]">Adventure</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Step into a World of Influencer-Inspired Adventures. Discover travel and live the Dream Life You&apos;ve Always Seen!
            </p>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/traveller_img1.png"
                alt="Travel App Interface"
                width={400}
                height={800}
                className="rounded-[40px] shadow-2xl"
              />
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
                <span className="text-sm font-medium">Travel</span>
              </div>
              <div className="absolute bottom-8 left-8 flex gap-4">
                <button className="bg-gray-800/80 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-sm">Explore</span>
                </button>
                <button className="bg-[#FF0000] rounded-full px-4 py-2">
                  <span className="text-sm">Reserve</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="container mx-auto md:px-8  py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/traveller_img2.png"
                alt="Travel App Interface"
                width={400}
                height={800}
                className="rounded-[40px] shadow-2xl"
              />
          
            </div>
          </div>
          <div className="space-y-8 px-6">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            From  <span className="text-[#FF0000]">Reels</span>  to <span className="text-[#FF0000]">Reels</span>  Stays! Book Your Getaway Today!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Discover influencer recommended vacation rentals and stays via Bookable Videos. Refine your choices with Reviews and Pay Online for instant booking and confirmation!
            </p>
          </div>
        
        </div>
      </main>

      <main className="container mx-auto md:px-8  py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/traveller_img3.png"
                alt="Travel App Interface"
                width={400}
                height={800}
                className="rounded-[40px] shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-8 px-6">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            Click, Watch, Book! <span className="text-red-600">Simple</span> as that
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Discover your next trip directly from your favorite influencers social media handles. No need to leave your preferred platform
            </p>
          </div>
        
        </div>
      </main>


      <main className="container mx-auto md:px-40 px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            Empower 
            <span className="text-[#FF0000]">Travel Entrepreneurs</span> 
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Support your favorite travel influencers in their journey to explore and inspire. Every booking you make helps them learn and continue their adventures
            </p>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/traveller_img4.png"
                alt="Travel App Interface"
                width={400}
                height={800}
                className="rounded-[40px] shadow-2xl"
              />
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
                <span className="text-sm font-medium">Travel</span>
              </div>
              <div className="absolute bottom-8 left-8 flex gap-4">
                <button className="bg-gray-800/80 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-sm">Explore</span>
                </button>
                <button className="bg-[#FF0000] rounded-full px-4 py-2">
                  <span className="text-sm">Reserve</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="container mx-auto md:px-8  py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/traveller_img5.png"
                alt="Travel App Interface"
                width={400}
                height={800}
                className="rounded-[40px] shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-8 px-6">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
              Stay <span className="text-red-600">Flexible</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Cancel Most Stays at No Cost. Access 24/7 Customer Support: Get Personal Advice with 1:1 Calls
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Traveller