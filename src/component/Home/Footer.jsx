import { Link } from "react-router-dom";

export default function ContactFooter() {
  return (
    <div className="w-full">
      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-50 to-yellow-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
            <span className="text-[#FF0000]">Intrigued?</span> We&apos;re eager to connect and clarify!
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a to="mailto:support@gumo.co.in" className="text-[#FF0000] text-lg">
                support@gumo.co.in
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <a to="tel:+918867217772" className="text-[#FF0000] text-lg">
                +91 8867217772
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=" text-black py-12 md:py-16 md:px-20"
       style={{ backgroundImage: "url('/gradientBg.png')" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="text-black text-3xl font-bold">
                Gumo
              </Link>
              <p className="text-black max-w-sm">
                Step into a World of Influencer-Inspired Adventures. Discover, Travel, and Travel the Dream Life You&apos;ve
                Always Seen!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg text-black font-semibold mb-4">SOCIAL</h3>
              <div className="space-y-2">
                {["Facebook", "Instagram", "Twitter", "Linkedin", "Youtube"].map((social) => (
                  <Link
                    key={social}
                    to={`#${social.toLowerCase()}`}
                    className="block text-black hover:text-white transition-colors"
                  >
                    {social}
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">NAVIGATION</h3>
              <div className="space-y-2">
                {[
                  { name: "Creator", color: "text-gray-300",path: "/" },
                  { name: "Traveler", color: "text-[#FF0000]", path: "/traveller" },
                  { name: "Partner", color: "text-gray-300", path: "/partner" },
                  { name: "Careers", color: "text-gray-300", path: "/career"},
                  { name: "Privacy Policy", color: "text-gray-300", path: "/policy"},
                  { name: "Terms of service", color: "text-gray-300", path: "/terms-services"},
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block text-black hover:text-white transition-colors ${item.color}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-4">
              <Link to="#google-play" className="block">
                <img
                  src="/Googleplay.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="w-auto h-12"
                />
              </Link>
              <Link to="#app-store" className="block">
                <img
                  src="/Appstore.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="w-auto h-12"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

