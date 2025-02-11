import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
const FAQPAT = () => {
  return (
    <div>
       <section className="w-full bg-zinc-900 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            FAQ&apos;S
          </h2>
          <div className="mx-auto max-w-[800px]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                How can I list on Gumo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                Listing your property on Gumo is quick and easy. Simply reach out to support@gumo.co.in to sign up as a partner on our platform. Provide the necessary details about your property, and our dedicated team will guide you through the listing process swiftly. Your property can be live on our platform within just 48 working hours!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                How do we handle bookings from customers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                On Gumo, handling bookings is a streamlined process. Customers are provided with the option to reserve a stay at a host&apos;s property for specific dates. After selecting the desired dates and specifying the number of guests, customers can proceed by clicking the &quot;Reserve now&quot; tab. Subsequently, the host is notified and has 24 hours to either accept, decline, or respond to the request. If the host accepts the reservation, it&apos;s promptly booked and confirmed. In case of a decline, hosts have the option to provide a reason, and any payment made by the customer is promptly refunded. Stay tuned for updates on API integration with your channel managers for seamless partnership management.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                What are the cancellation fees if customers cancel their booking?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                Cancellation fees for stays can be set by the host or property owner. Customers can view these fees before confirming their booking. This transparency ensures that customers are aware of any potential charges associated with cancelling their reservation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                How can I customize and promote my Gumo Store?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                Customizing your Gumo Store is easy; personalize it with your profile picture, banner images, and links to all your social media handles to make it uniquely yours. Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events, and more—all in one convenient link. Use this link to promote your store across all platforms where you engage with your audience, making it effortless for followers to access and book travel experiences directly from your social media profiles
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                What are the commission rates charged by Gumo?
                </AccordionTrigger>
                <AccordionContent classNae="text-gray-300">
                Our commission rates are not only competitive but also the lowest in the market. We are dedicated to driving this ecosystem forward and ensuring the growth of our partners&apos; businesses. Detailed information regarding our exceptionally affordable commission rates will be provided during the onboarding process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                How can influencers promote my listing? How much money do I spend here?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                Influencers can effortlessly promote your listing through their Gumo Stores by recommending it to their followers. There&apos;s no need for additional payment to the influencer for promoting your store via their link. Gumo handles the compensation by allocating a share of the commission received on every booking to the influencer. As for the amount spent on influencer collaborations or promotion, it&apos;s determined solely between the influencer and the property, ensuring flexibility and transparency in your partnership.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPAT
