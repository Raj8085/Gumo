import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQTAR = () => {
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
                  How can I book from my influencer&apos;s store?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  How can I book from my influencer&apos;s store? To book from
                  an influencer&apos;s store, simply visit the influencer&apos;s
                  Gumo Store link, often located in their social media bio.
                  Browse through their curated recommendations, review property
                  details, and proceed to complete the booking after making the
                  payment. Once confirmed, your booking details will be promptly
                  sent to your email for reference.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  How does booking via the influencer&apos;s store benefit them?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  When you book through the influencer&apos;s store, you&apos;re
                  not only gaining access to curated recommendations but also
                  directly contributing to the influencer&apos;s business
                  growth. This support empowers them to expand their travel
                  journey and share an even wider array of wonderful
                  destinations for you to explore.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  Where can I see my booking?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Your booking invoice or confirmation will be sent to your
                  email address provided during booking. If you have trouble
                  finding your booking, our support team is available to assist
                  you. Additionally, you can access your bookings through the
                  &quot;My Bookings&quot; section within the Passport feature of
                  the Gumo app.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  How do I book stays on the app?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Booking on the Gumo app is a breeze! Simply search for your
                  desired destination either in the search tab or by browsing
                  through videos from your favorite influencers. Once
                  you&apos;ve found the perfect stay, review the feedback from
                  other guests, and proceed to book by following the prompts.
                  You can further refine your search by applying various filters
                  to find accommodations that perfectly suit your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  Where are the reviews sourced from, and how can I add a
                  review?
                </AccordionTrigger>
                <AccordionContent classNae="text-gray-300">
                  Currently, reviews on Gumo are sourced from TripAdvisor.
                  However, stay tuned for updates on Gumo&apos;s review system,
                  where guests will have the ability to add reviews directly on
                  the pages.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-red-500 hover:text-red-400">
                  What offers do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Gumo presents a range of discounts, promotions, and exclusive
                  deals on accommodations year-round. Additionally, we
                  collaborate with influencers to offer exclusive discounts
                  tailored to their stores or followers. Keep an eye out for
                  these enticing offers while browsing for stays to enjoy
                  significant savings on your bookings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQTAR;
