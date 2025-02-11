
export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      {/* <header className="container mx-auto py-6 bg-black">
        <nav className="flex items-center justify-between md:px-4">
          <Link to="/" className="text-[#FF0000] text-3xl font-bold">
            Gumo
          </Link>
          <div className="hidden  md:flex items-center gap-8 px-[40rem]">
            <Link to="/creator" className="hover:text-[#FF0000] transition-colors">
              Creator
            </Link>
            <Link to="/traveller" className="hover:text-[#FF0000] transition-colors">
              Traveller
            </Link>
            <Link to="/partner" className="hover:text-[#FF0000] transition-colors">
              Partner
            </Link>
          </div>
        </nav>
      </header> */}

      {/* Hero Section */}
      <main className="container mx-auto md:px-40 px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold space-y-2">
              <span className="block">
                Live the <span className="text-[#FF0000]">Journey</span>
              </span>
              <span className="block">
                Share the <span className="text-[#FF0000]">Adventure</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Your gateway to influencer-inspired stays. Dive into unique travel experiences and live the stories you
              love to follow!
            </p>
          </div>

          <div className="relative">
        
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/Group 1 (2).png"
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
    </div>
  )
}