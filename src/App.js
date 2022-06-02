import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Duets from "./pages/bedding/duets/Duets";
import Coverlet from "./pages/bedding/coverlet/Coverlet";
import BedSkirts from "./pages/bedding/bedSkirts/BedSkirts";
import Bigpillow from "./pages/accessories/bigPillow/BigPillow";
import Bodypillow from "./pages/accessories/bodyPillow/BodyPillow";
import Curtains from "./pages/accessories/curtains/Curtains";
import Sales from "./pages/sales/Sales";
import OurStory from "./pages/aboutUs/ourStory/OurStory";
import GivingBack from "./pages/aboutUs/givingBack/GivingBack";
import Vedio from "./pages/aboutUs/vedio/Vedio";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Cart from "./pages/cart/Cart";
import PageDetail from "./pages/pageDetail/PageDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* collections */}
        <Route exact path="bedding/duets" element={<Duets />} />

        <Route exact path="bedding/coverlet" element={<Coverlet />} />
        <Route exact path="bedding/bed-skirts" element={<BedSkirts />} />
        <Route exact path="accessories/big-pillow" element={<Bigpillow />} />
        <Route exact path="accessories/body-pillow" element={<Bodypillow />} />
        <Route exact path="accessories/curtains" element={<Curtains />} />
        <Route exact path="sales" element={<Sales />} />
        {/* about us */}
        <Route exact path="our-story" element={<OurStory />} />
        <Route exact path="giving-back" element={<GivingBack />} />
        <Route exact path="vedio" element={<Vedio />} />
        {/* cart */}
        <Route exact path="cart" element={<Cart />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path="page-detail" element={<PageDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
