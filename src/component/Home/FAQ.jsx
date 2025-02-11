import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
const FAQ = () => {
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
                  How do I apply to be a creator with Gumo and create the Gumo
                  Store?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  To become a creator with Gumo and set up your Gumo Store,
                  begin by signing up on our platform. Once logged in, go to the
                  Passport section and click &quot;View More&quot; in the top
                  right corner. From there, select the option to switch to a
                  professional account. Provide your contact details and
                  referral code (if available) to apply. Our team will review
                  your application and respond within 24 hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  How do i monetize my content and how much can I earn?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  You can monetize your content on Gumo by transforming your
                  travel experiences into bookable videos for your followers.
                  This not only enhances collaboration opportunities with
                  properties and resorts but also directly attributes bookings
                  to their properties, potentially increasing revenue for
                  sponsored content. You can earn up to 7.5% commission on
                  bookings of stays, with earnings potential varying based on
                  the type of stay and the property&apos;s partnership with
                  Gumo. Additionally, you can generate income on Gumo by listing
                  your own itineraries or travel packages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  How do I track and redeem my earnings?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  You can track your earnings through the Analytics section of
                  your dashboard, which provides detailed insights into your
                  store&apos;s performance, views, bookings, and earnings. To
                  redeem your earnings, navigate to the earnings section and
                  follow the prompts to withdraw your funds securely.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  How can I customize and promote my Gumo Store?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Customizing your Gumo Store is easy; personalize it with your
                  profile picture, banner images, and links to all your social
                  media handles to make it uniquely yours. Connect your TikTok,
                  Instagram, Twitter, website, store, videos, music, podcast,
                  events, and more—all in one convenient link. Use this link to
                  promote your store across all platforms where you engage with
                  your audience, making it effortless for followers to access
                  and book travel experiences directly from your social media
                  profiles
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  Can I get paid collaborations or campaigns with Gumo?
                </AccordionTrigger>
                <AccordionContent classNae="text-gray-300">
                  While we do not currently facilitate paid collaborations or
                  campaigns, we&apos;re actively working on introducing these
                  opportunities in the near future. Stay tuned for updates!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  How can I add tour packages with Gumo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  You can easily incorporate tour packages into your Gumo Store
                  by collaborating with tour operators or designing your own
                  travel packages. Provide comprehensive details such as
                  itinerary, pricing, and inclusions to entice potential
                  travelers and increase bookings. Utilize the external links
                  feature on your Gumo Store to promote these packages
                  effectively. Additionally, stay tuned as we&apos;re working on
                  assisting you in planning and launching tours for your
                  followers in the near future.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  I&apos;m not able to find my stay video on Gumo, how can I monetize
                  this?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  If you&apos;re unable to locate your stay video on Gumo, don&apos;t
                  worry. Simply reach out to us with the details at
                  support@gumo.co.in or via WhatsApp at +91 8867217772 along
                  with the property details. We&apos;ll promptly contact the property
                  and facilitate their onboarding to Gumo, enabling bookings for
                  your stay video.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
