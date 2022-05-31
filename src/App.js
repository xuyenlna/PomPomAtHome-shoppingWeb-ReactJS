import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Duets from "./pages/collections/duets/Duets";
import Coverlet from "./pages/collections/coverlet/Coverlet";
import BedSkirts from "./pages/collections/bedSkirts/BedSkirts";
import Bigpillow from "./pages/collections/bigPillow/BigPillow";
import Bodypillow from "./pages/collections/bodyPillow/BodyPillow";
import Curtains from "./pages/collections/curtains/Curtains";
import Sales from "./pages/collections/sales/Sales";
import OurStory from "./pages/aboutUs/ourStory/OurStory";
import GivingBack from "./pages/aboutUs/givingBack/GivingBack";
import Vedio from "./pages/aboutUs/vedio/Vedio";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* collections */}
        <Route exact path="collection/duets" element={<Duets />} />

        <Route exact path="collection/coverlet" element={<Coverlet />} />
        <Route exact path="collection/bed-skirts" element={<BedSkirts />} />
        <Route exact path="collection/big-pillow" element={<Bigpillow />} />
        <Route exact path="collection/body-pillow" element={<Bodypillow />} />
        <Route exact path="collection/curtains" element={<Curtains />} />
        <Route exact path="collection/sales" element={<Sales />} />
        {/* about us */}
        <Route exact path="our-story" element={<OurStory />} />
        <Route exact path="giving-back" element={<GivingBack />} />
        <Route exact path="vedio" element={<Vedio />} />
        {/* cart */}
        <Route exact path="cart" element={<Cart />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
