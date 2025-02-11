import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ContactFooter from "../Home/Footer";

const TermsOfServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              We appreciate you taking time to read our privacy policy. We
              believe you always know what data we collect from you and how we
              use it, and that you should have meaningful control over both. We
              want to empower you to make the best decisions about the
              information that you share with us. SociAI TECHNOLOGIES PRIVATE
              LIMITED built the Gumo app as a gratis app. This SERVICE is
              provided by SociAI TECHNOLOGIES PRIVATE LIMITED at no cost and is
              intended for use as is. If you choose to use our Service, then you
              agree to the collection and use of information in relation to this
              policy. The Personal Information that we collect is used for
              providing and improving the Service. We will not use or share your
              information with anyone except as described in this Privacy
              Policy. The terms used in this Privacy Policy have the same
              meanings as in our Terms and Conditions, which is accessible at
              Gumo unless otherwise defined in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Information Collection and Use
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                For a better experience, while using our Service, the type of
                information we collect depends on how you use our application.
                We may require you to provide us with certain personally
                identifiable information, including but not limited to Name,
                Profile Photo, and contact information. Information and content
                you provide: We collect the content, communications, and other
                information you provide when you use our Product, including when
                you sign up for an account, create or share content, and message
                or communicate with others. This can include information in or
                about the content you provide (like metadata), such as the
                location of a photo or the date a file was created.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              More details
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Registration and Profile Information: When you sign up for an
                account or use our Services, we will ask you for your
                name/username and telephone number. You can also upload a
                profile photo. Content: In addition to uploading a profile
                photo, you can choose to post messages, and share images and
                other content through our Services. Contacts: We also request
                access to your device’s contacts, e.g., your phone address book,
                for use in the app on your device. We are collecting your
                contact list so that: We can help you follow other professionals
                in your contact who are using the service Help you invite your
                friends and coworkers to our service You can also deny this
                request and continue to use the app. Similarly, we may collect
                your phone number from other people using our Service if you are
                in their contact lists. They can see whether you are using the
                Service and can invite you to connect or join. Communications:
                If you contact us directly, we may receive additional personal
                data about you. For example, when you contact us for support, we
                may receive your name, email address, phone number, and the
                contents of your support issue along with any other information
                you chose to provide. Information about transactions made on our
                Products: If you use our Products for purchases or other
                financial transactions (such as when you make a purchase in a
                specific product or make a donation), we collect information
                about the purchase or transaction. This includes payment
                information, such as your credit or debit card number and other
                card information; other account and authentication information;
                and billing, shipping, and contact details. Things others do and
                information they provide about you: We also receive and analyze
                content, communications, and information that other people
                provide when they use our Products. This can include information
                about you, such as when others share or comment on a photo of
                you, send a message to you, or upload, sync, or import your
                contact information. Device attributes: Information such as the
                operating system, hardware and software versions, battery level,
                signal strength, available storage space, browser type, app and
                file names and types, and plugins. Device signals: Bluetooth
                signals, and information about nearby Wi-Fi access points,
                beacons, and cell towers. Data from device settings: Information
                you allow us to receive through device settings you turn on,
                such as access to your GPS location, camera, or photos. Network
                and connections: Information such as the name of your mobile
                operator or ISP, language, time zone, mobile phone number, IP
                address, connection speed. Apps, websites, and third-party
                integrations on or using our Products: When you choose to use
                third-party apps, websites, or other services that use, or are
                integrated with, our Products, they can receive information
                about what you post or share. In addition, Personal Information
                you submit to us regarding you or your company is used either to
                respond to requests that you make or to aid us in serving you
                better. We use such Personal Information in the following ways:
                To identify you as a user in our system; To provide improved
                administration of our Site and Services; To provide the Services
                you request; To improve the quality of experience when you
                interact with our Site and Services; To send you e-mail
                notifications; To send newsletters, surveys, offers, and other
                promotional materials related to our Services and for other
                marketing purposes; Protect our services and our users; Market
                and customer analysis, market research, and statistics; To
                prevent and detect fraud or abuse of our services as well as to
                prevent, detect, and investigate any potential unlawful or
                prohibited activities. The app does use third-party services
                that may collect information used to identify you. Link to
                privacy policy of third-party service providers used by the app
                (it may be subject to change in the future): Google Play
                Services Google Analytics for Firebase Firebase Crashlytics
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Event Tracking and Analytics
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                When you use our service, we may collect data and information,
                including Log Data, to enhance your experience and improve our
                services. This data is collected through third-party products
                and includes details such as your device&apos;s Internet
                Protocol (“IP”) address, device name, operating system version,
                app configuration, timestamps, and other statistics. We use this
                information for event tracking and analytics purposes.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Event Categories
              </h3>
              <p className="text-gray-600">
                Our event tracking covers various categories, including user
                activity, content engagement, payment status, profile updates,
                and more. These events help us understand how users interact
                with our app and enable us to make improvements. We assure you
                that this data is collected and analyzed anonymously, without
                personally identifying individual users.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your Privacy Matters
              </h3>
              <p className="text-gray-600">
                Protecting your privacy is our priority. We want you to feel
                secure while using our app, knowing that your personal
                information remains confidential. If you have any questions or
                concerns regarding the data collected through event tracking and
                analytics, please don&apos;t hesitate to contact us at
                support@gumo.co.in. Please note that the types of events tracked
                may evolve over time as we strive to provide you with the best
                possible app experience. We encourage you to review our privacy
                policy periodically for updates. Thank you for choosing our app,
                and for entrusting us with your privacy.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Cookies
              </h3>
              <p className="text-gray-600">
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device&apos;s internal memory. This Service does not use these
                “cookies” explicitly. However, the app may use third-party code
                and libraries that use “cookies” to collect information and
                improve their services. You have the option to either accept or
                refuse these cookies and know when a cookie is being sent to
                your device. If you choose to refuse our cookies, you may not be
                able to use some portions of this Service.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Service Providers
              </h3>
              <p className="text-gray-600">
                We may employ third-party companies and individuals due to the
                following reasons: To facilitate our Service; To provide the
                Service on our behalf; To perform Service-related services; or
                To assist us in analyzing how our Service is used. We want to
                inform users of this Service that these third parties have
                access to your Personal Information. The reason is to perform
                the tasks assigned to them on our behalf. However, they are
                obligated not to disclose or use the information for any other
                purpose.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Security
              </h3>
              <p className="text-gray-600">
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Links to Other Sites
              </h3>
              <p className="text-gray-600">
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Children’s Privacy
              </h3>
              <p className="text-gray-600">
                These Services do not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13. In the case we discover that a child under 13
                has provided us with personal information, we immediately delete
                this from our servers. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact us so that we will be able to take
                the necessary actions.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Data Deletion
              </h3>
              <p className="text-gray-600">
                If you would like us to delete your personal data from our
                records, please contact us at support@gumo.co.in. Please note
                that the deletion of your data may affect your ability to use
                certain features or services provided by Gumo.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Changes to This Privacy Policy
              </h3>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. Thus, you
                are advised to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. This policy is effective as of 2023-07-01.
              </p>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@gumo.co.in.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Gumo. All rights reserved.
          </p>
        </div>
      </footer>
      <ContactFooter />
    </div>
  );
};

export default TermsOfServices;
