import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BestBooks from "./components/BestBooks"
import Banner from "./components/Banner"
import AppStoreBanner from "./components/AppStoreBanner"
import AllBooks from "./components/AllBooks"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"
import Popup from "./components/Popup"
import AOS from "aos"
import "aos/dist/aos.css"


const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  React.useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
    });
    AOS.refresh();
  }, [])

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup = {handleOrderPopup}/>
        <Hero handleOrderPopup = {handleOrderPopup} />
        <BestBooks handleOrderPopup = {handleOrderPopup} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
        <Popup handleOrderPopup = {handleOrderPopup} orderPopup={orderPopup} />
      </div>
    </div>
  )
}

export default App
