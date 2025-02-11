import FAQTAR from "../Creator/FAQTAR"
import Traveller from "../Creator/Traveller"
import ArrowImage from "../Home/ArrowImageSection"
import ContactFooter from "../Home/Footer"

const MainTraveller = () => {
  return (
    <div>
      <Traveller/>
      <ArrowImage/>
      <FAQTAR/>
      <ContactFooter/>
    </div>
  )
}
export default MainTraveller