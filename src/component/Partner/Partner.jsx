import { Button } from "@/components/ui/button"
import ContactFooter from "../Home/Footer"
import FAQPAT from "./FAQ"

const Partner = () => {
  return (
    <div className="bg-[#1A1A1A]">
         <main className="container mx-auto md:px-40 px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            Partner with <span className="text-[#FF0000]">GUMO:</span> Expand Your Reach, Maximize Your ROI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Join our platform and list your properties with the most competitive rates across all travel platforms
            </p>
            <Button className="bg-red-700 hover:bg-red-600">Contact us</Button>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/Partner/partner_img1.png"
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
                src="/Partner/partner_img2.png"
                alt="Travel App Interface"
                width={400}
                height={800}
                className="rounded-[40px] shadow-2xl"
              />
          
            </div>
          </div>
          <div className="space-y-8 px-6">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            Drive Bookings via Social <span className="text-[#FF0000]">Media Platforms</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Utilize our platform to drive bookings through various social media channels, reaching a wider audience and increasing your revenue.
            </p>
          </div>
        
        </div>
      </main>

      <main className="container mx-auto md:px-40 px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            Optimize Your <span className="text-[#FF0000]">Marketing</span>ROI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            With our low commission rates and influencer-direct bookable videos, optimize your marketing efforts and convert leads seamlessly through social media campaigns.
            </p>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-[300px] md:max-w-[400px]">
              <img
                src="/Partner/partner_img3.png"
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
                src="/Partner/partner_img4.png"
                alt="Travel App Interface"
                width={400}
                height={800}
                className="rounded-[40px] shadow-2xl"
              />
          
            </div>
          </div>
          <div className="space-y-8 px-6">
            <h1 className="text-4xl text-white md:text-6xl font-bold space-y-2">
            Partner with <span className="text-[#FF0000]">Influencers</span> to Expand Your Reach
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Engage Social Media Influencers to Promote Your Property, Minimize Costs, and Maximize Impact. Tap into Their Follower Communities for Greater Reach.
            </p>
          </div>
        
        </div>
      </main>
     <FAQPAT/>
     <ContactFooter/>
    </div>
  )
}

export default Partner
