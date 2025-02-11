import { ChevronLeft, ChevronRight} from "lucide-react";
import FAQ from "./FAQ";


export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Testimonials Section */}
      <section className="w-full bg-zinc-900 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Discover what our{" "}
              <span className="text-red-500">Gumo travelers</span> are{" "}
              <span className="text-red-500">saying</span>
            </h2>
            <p className="mx-auto mb-12 max-w-[800px] text-gray-300">
              We collaborate with travelers of all kinds - from seasoned
              explorers to rising stars, trendsetters, and industry leaders. We
              seek individuals with captivating stories and remarkable travel
              experiences
            </p>
          </div>

          <div className="relative mx-auto max-w-[800px]">
            <div className="rounded-lg bg-zinc-800/50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <img
                  src="/01f7854f-e1fc-4786-ab82-49f11b111725.jpeg"
                  alt="Profile"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-red-500">
                    Anjaly Jaychandran
                  </h3>
                  <p className="text-sm text-gray-400">
                    @dr_anjaly_jaychandran
                  </p>
                  <p className="mt-4 text-gray-300">
                    Gumo empowers my audience to explore new horizons while
                    providing me with the means to embark on even more enriching
                    travel experiences. It&apos;s a win-win for both me and my
                    followers!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              <button className="rounded-full bg-zinc-800 p-2 text-white hover:bg-zinc-700">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-zinc-800 p-2 text-white hover:bg-zinc-700">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="w-full bg-red-500 py-12">
        <div className="container px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Coming soon!
          </h2>
          <p className="text-xl text-white">
            Influencer-curated travel packages, experiences, itineraries, 1:1
            chats with influencers, and more. Stay tuned
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ/>
      {/* Contact Section */}
      {/* <section className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-8">
        <div className="container px-4 text-center md:px-6">
          <h2 className="mb-4 text-2xl font-bold">
            <span className="text-red-500">Intrigued?</span> We&apos;re eager to
            connect and clarify!
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <p className="text-sm text-gray-600">Email Us</p>
              <a
                to="mailto:support@gumo.co.in"
                className="text-red-500 hover:text-red-600"
              >
                support@gumo.co.in
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-600">Contact Us</p>
              <a
                to="tel:+918867217772"
                className="text-red-500 hover:text-red-600"
              >
                +91 8867217772
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <footer className="w-full bg-zinc-900 py-12">
        <div className="container grid gap-8 px-4 md:grid-cols-4 md:px-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-500">Gumo</h3>
            <p className="text-sm text-gray-300">
              Step Into a World of Influencer-Inspired Adventures. Discover,
              Travel, and Travel the Dream Life You&apos;ve Always Seen!
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">SOCIAL</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="#" className="hover:text-red-500">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">NAVIGATION</h4>
            <ul className="space-y-2 text-sm text-gray-300">
                <Link to="/" className="hover:text-red-500">
                  Traveler
                </Link>
              <li>
                <Link to="/" className="hover:text-red-500">
                  Partner
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-red-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-red-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-red-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link to="#" className="inline-block">
              <img
                src="/placeholder.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-[42px] w-auto"
              />
            </Link>
            <Link to="#" className="inline-block">
              <img
                src="/placeholder.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="h-[42px] w-auto"
              />
            </Link>
          </div>
        </div>
      </footer> */}



    </main>
  );
}
