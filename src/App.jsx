import { Route,Routes } from "react-router-dom"
import Carousel from "./component/Home/Carousel"
import ContactFooter from "./component/Home/Footer"
import Home from "./component/Home/HeroSection"
import Page from "./component/Home/Page"
import TravelSection from "./component/Home/TravelSection"
import Navbar from "./component/Navbar/Navbar"
import MainTraveller from "./component/TravellerPage/MainTraveller"
import ArrowImage from "./component/Home/ArrowImageSection"
import Partner from "./component/Partner/Partner"
import PrivatePolicy from "./component/Privacy/PrivatePolicy"
import TermsOfServices from "./component/Privacy/TermsOfServices"
import Career from "./component/Career/Career"

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Home/>
      <TravelSection/>
      <Carousel/>
      <ArrowImage/>
      <Page/>
      <ContactFooter/>
            </>
          }/>
          <Route path="/traveller" element={<MainTraveller/>}/>
          <Route path="/partner" element={<Partner/>}/>
          <Route path="/terms-services" element={<PrivatePolicy/>}/>
          <Route path="/policy" element={<TermsOfServices/>}/>
          <Route path="/career" element={<Career/>}/>
        </Routes>
    </div>
  )
}
export default App